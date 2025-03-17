import React, { useState, useEffect, useRef } from 'react';
import { Bot, Phone, CircleDot, Shield, Settings } from 'lucide-react';

const Robot_call_card = ({ gender, name, image }) => {
  // State variables
  const [connectionStatus, setConnectionStatus] = useState('Connecting...');
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [isInCall, setIsInCall] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState(gender);
  const [serverUrl, setServerUrl] = useState(
    'web-production-98cdd.up.railway.app'
  );
  const [callStatus, setCallStatus] = useState('Click to start call');

  // Refs
  const websocketRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const streamRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyzerRef = useRef(null);
  const conversationRef = useRef(null);
  const audioChunksRef = useRef([]);
  const speechDetectedRef = useRef(false);
  const lastSpeechDetectedTimeRef = useRef(0);
  const silenceDetectionTimeoutRef = useRef(null);
  const speechDetectionIntervalRef = useRef(null);
  const autoReconnectAttemptsRef = useRef(0);
  const maxReconnectAttempts = 5;
  const reconnectDelay = 2000;
  // Add a ref to track active audio elements
  const activeAudioElementsRef = useRef([]);

  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
  });

  // Connect WebSocket on component mount
  useEffect(() => {
    connectWebSocket();
    return () => {
      // Cleanup on unmount
      if (websocketRef.current) {
        websocketRef.current.close();
      }
      if (isInCall) {
        endCall();
      }
    };
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (conversationRef.current) {
      conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
    }
  }, [messages]);

  const connectWebSocket = () => {
    // Close any existing connection
    if (websocketRef.current) {
      websocketRef.current.close();
    }

    setConnectionStatus('Connecting...');
    setIsConnected(false);

    // Create a new WebSocket connection
    websocketRef.current = new WebSocket(
      `wss://${serverUrl.replace(/^https?:\/\//, '')}/ws`
    );

    websocketRef.current.onopen = () => {
      setConnectionStatus('Connected');
      setIsConnected(true);
      autoReconnectAttemptsRef.current = 0;
      addSystemMessage('Connected to Voice Assistant API');
    };

    websocketRef.current.onclose = (event) => {
      setConnectionStatus('Disconnected');
      setIsConnected(false);

      if (isInCall) {
        endCall();
      }

      // Auto-reconnect logic
      if (autoReconnectAttemptsRef.current < maxReconnectAttempts) {
        addSystemMessage(
          `Connection lost. Reconnecting in ${reconnectDelay / 1000} seconds...`
        );
        setTimeout(connectWebSocket, reconnectDelay);
        autoReconnectAttemptsRef.current++;
      } else {
        addSystemMessage(
          'Failed to reconnect after multiple attempts. Please check server status.'
        );
      }
    };

    websocketRef.current.onerror = (error) => {
      console.error('WebSocket error:', error);
      addSystemMessage('Error connecting to Voice Assistant API');
    };

    websocketRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.error) {
        addSystemMessage(`Error: ${data.error}`);
        return;
      }

      const messageContent = {
        type: 'assistant',
        text: data.text_response,
        transcript: data.transcript,
        audioBase64: data.audio_base64,
      };

      setMessages((prevMessages) => [...prevMessages, messageContent]);

      // Play audio automatically if available
      if (data.audio_base64) {
        playAudio(data.audio_base64);
      }
    };
  };

  const sendMessage = () => {
    if (!messageInput.trim()) return;

    if (
      websocketRef.current &&
      websocketRef.current.readyState === WebSocket.OPEN
    ) {
      // Add message to conversation
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: 'user', text: messageInput },
      ]);

      // Send message to server with selected voice type
      websocketRef.current.send(
        JSON.stringify({
          text: messageInput,
          voice_type: selectedVoice,
        })
      );

      // Clear input
      setMessageInput('');
    } else {
      addSystemMessage('Reconnecting to server...');
      connectWebSocket();
    }
  };

  const addSystemMessage = (text) => {
    setMessages((prevMessages) => [...prevMessages, { type: 'system', text }]);
  };

  const playAudio = (base64Data) => {
    const audio = new Audio(`data:audio/mpeg;base64,${base64Data}`);

    // Add to active audio elements
    activeAudioElementsRef.current.push(audio);

    // Remove from active elements once it's done playing
    audio.onended = () => {
      activeAudioElementsRef.current = activeAudioElementsRef.current.filter(
        (element) => element !== audio
      );
    };

    audio.play();
  };

  const updateServerUrl = () => {
    const newUrl = document.getElementById('server-url').value.trim();
    if (newUrl) {
      setServerUrl(newUrl);
      addSystemMessage(`Server URL updated to: ${newUrl}`);

      // If connected, reconnect with new URL
      if (
        websocketRef.current &&
        websocketRef.current.readyState === WebSocket.OPEN
      ) {
        addSystemMessage('Reconnecting with new server URL...');
        connectWebSocket();
      }
    }
  };

  const startCall = async () => {
    if (isInCall) return;

    if (
      !websocketRef.current ||
      websocketRef.current.readyState !== WebSocket.OPEN
    ) {
      addSystemMessage('Reconnecting to server before starting call...');
      connectWebSocket();

      // Wait for connection or timeout after 3 seconds
      await new Promise((resolve) => {
        const checkInterval = setInterval(() => {
          if (
            websocketRef.current &&
            websocketRef.current.readyState === WebSocket.OPEN
          ) {
            clearInterval(checkInterval);
            resolve();
          }
        }, 100);
        setTimeout(() => {
          clearInterval(checkInterval);
          resolve();
        }, 3000);
      });
    }

    try {
      // Get audio stream
      streamRef.current = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      // Setup audio context for voice activity detection
      setupVoiceActivityDetection(streamRef.current);

      // Initialize media recorder
      setupMediaRecorder(streamRef.current);

      // Set UI to call mode
      setIsInCall(true);
      setCallStatus('Call active - speak to interact');
      addSystemMessage('Call started. Speak to interact with the assistant.');

      // Start continuous voice detection
      startVoiceDetection();
    } catch (error) {
      console.error('Error accessing microphone:', error);
      addSystemMessage('Error accessing microphone. Please check permissions.');
    }
  };

  const endCall = () => {
    if (!isInCall) return;

    // Stop all currently playing audio
    stopAllAudio();

    // Stop voice detection
    clearInterval(speechDetectionIntervalRef.current);
    clearTimeout(silenceDetectionTimeoutRef.current);

    // Stop recording if active
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state !== 'inactive'
    ) {
      mediaRecorderRef.current.stop();
    }

    // Stop all audio tracks
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }

    // Clean up audio context
    if (audioContextRef.current) {
      audioContextRef.current.close();
    }

    // Reset UI
    setIsInCall(false);
    setCallStatus('Click to start call');
    audioChunksRef.current = [];

    addSystemMessage('Call ended.');
  };

  // Add this new function to stop all audio
  const stopAllAudio = () => {
    // Stop all active audio elements
    activeAudioElementsRef.current.forEach((audio) => {
      try {
        audio.pause();
        audio.currentTime = 0;
      } catch (error) {
        console.error('Error stopping audio:', error);
      }
    });

    // Clear the active audio elements array
    activeAudioElementsRef.current = [];
  };

  const setupMediaRecorder = (stream) => {
    mediaRecorderRef.current = new MediaRecorder(stream);

    mediaRecorderRef.current.addEventListener('dataavailable', (event) => {
      audioChunksRef.current.push(event.data);
    });

    mediaRecorderRef.current.addEventListener('stop', () => {
      if (audioChunksRef.current.length > 0) {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: 'audio/wav',
        });
        sendAudioToServer(audioBlob);
        audioChunksRef.current = [];
      }
    });
  };

  const setupVoiceActivityDetection = (stream) => {
    audioContextRef.current = new (window.AudioContext ||
      window.webkitAudioContext)();
    const source = audioContextRef.current.createMediaStreamSource(stream);
    analyzerRef.current = audioContextRef.current.createAnalyser();
    analyzerRef.current.fftSize = 512;
    analyzerRef.current.smoothingTimeConstant = 0.8;
    source.connect(analyzerRef.current);

    lastSpeechDetectedTimeRef.current = 0;
  };

  const startVoiceDetection = () => {
    // Start recording but don't capture chunks yet
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === 'inactive'
    ) {
      mediaRecorderRef.current.start();
      audioChunksRef.current = [];
    }

    // Check for speech every 100ms
    speechDetectionIntervalRef.current = setInterval(() => {
      detectSpeech();
    }, 100);
  };

  const detectSpeech = () => {
    if (!analyzerRef.current) return;

    const bufferLength = analyzerRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyzerRef.current.getByteFrequencyData(dataArray);

    // Calculate average volume
    let sum = 0;
    for (let i = 0; i < bufferLength; i++) {
      sum += dataArray[i];
    }
    const average = sum / bufferLength;

    // Threshold for speech detection (adjust as needed)
    const threshold = 20;

    if (average > threshold) {
      // Speech detected
      if (!speechDetectedRef.current) {
        speechDetectedRef.current = true;
        // If we weren't already recording, start a new recording
        if (mediaRecorderRef.current.state !== 'recording') {
          mediaRecorderRef.current.start();
          audioChunksRef.current = [];
        }
        setCallStatus('Listening...');
      }

      // Update last speech time
      lastSpeechDetectedTimeRef.current = Date.now();

      // Clear any existing silence detection timeout
      clearTimeout(silenceDetectionTimeoutRef.current);

      // Set new silence detection timeout
      silenceDetectionTimeoutRef.current = setTimeout(() => {
        if (
          speechDetectedRef.current &&
          Date.now() - lastSpeechDetectedTimeRef.current > 1500
        ) {
          // Silence detected for 1.5 seconds
          if (mediaRecorderRef.current.state === 'recording') {
            mediaRecorderRef.current.stop();
            speechDetectedRef.current = false;
            setCallStatus('Processing...');
          }
        }
      }, 1500);
    }
  };

  const sendAudioToServer = (audioBlob) => {
    if (
      websocketRef.current &&
      websocketRef.current.readyState === WebSocket.OPEN
    ) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Audio = reader.result.split(',')[1];

        // Send audio data to server with selected voice type
        websocketRef.current.send(
          JSON.stringify({
            audio_base64: base64Audio,
            voice_type: selectedVoice,
          })
        );

        setCallStatus('Waiting for response...');
      };
      reader.readAsDataURL(audioBlob);
    } else {
      addSystemMessage('Connection lost. Attempting to reconnect...');
      connectWebSocket();
      setCallStatus('Reconnecting...');
    }
  };

  return (
    <div className="max-w-md bg-gradient-to-br from-violet-950 to-slate-900 rounded-3xl overflow-hidden shadow-2xl w-1/2">
      {/* Header */}
      <div className="p-6 pb-0">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Bot className="text-violet-400 h-5 w-5" />
            <div>
              <h2 className="text-violet-100 text-lg font-medium">
                {gender} AI Assistant
              </h2>
              <h3 className="text-violet-100 text-sm">{name}</h3>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CircleDot
                className={`h-4 w-4 ${
                  isConnected ? 'text-green-400' : 'text-rose-400'
                }`}
              />
              <span
                className={
                  isConnected
                    ? 'text-green-400 text-sm'
                    : 'text-rose-400 text-sm'
                }
              >
                {connectionStatus}
              </span>
            </div>
            <Settings className="h-5 w-5 text-violet-400/70 hover:text-violet-400 transition-colors cursor-pointer" />
          </div>
        </div>

        <div className="flex items-center gap-3 text-sm text-violet-400/70 mb-6">
          <div className="flex items-center gap-1">
            <Shield className="h-4 w-4" />
            <span className="text-white">Enterprise Security</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-white">•</span>
            <span className="text-white">{currentDate}</span>
          </div>
        </div>
      </div>

      {/* Avatar Section */}
      <div className="flex justify-center mb-8">
        <div className="relative">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-violet-400 to-violet-600 p-1">
            <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 p-1">
              <img
                src={image}
                alt="AI Assistant Avatar"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          <div className="absolute bottom-0 right-0 bg-violet-500 rounded-full p-1.5 border-4 border-slate-900">
            <Bot className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      {/* Call Controls */}
      <div className="px-6 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <div
            className={`w-3 h-3 rounded-full ${
              isInCall ? 'bg-red-500 animate-pulse' : 'bg-slate-600'
            }`}
          ></div>
          <span className="text-slate-300 text-sm">{callStatus}</span>
        </div>

        {!isInCall ? (
          <button
            onClick={startCall}
            className="w-full bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 
                      text-white rounded-xl py-3 flex items-center justify-center gap-2 transition-all duration-300
                      shadow-lg shadow-violet-900/50 hover:shadow-violet-900/75"
          >
            <Phone className="h-5 w-5" />
            <span>Start Call</span>
          </button>
        ) : (
          <button
            onClick={endCall}
            className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 
                      text-white rounded-xl py-3 flex items-center justify-center gap-2 transition-all duration-300
                      shadow-lg shadow-red-900/50 hover:shadow-red-900/75"
          >
            <Phone className="h-5 w-5" />
            <span>End Call</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Robot_call_card;
