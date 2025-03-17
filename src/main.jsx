import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ThemeProvider } from './components/theme-provider';

createRoot(document.getElementById('root')).render(
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
    <App />
  </ThemeProvider>
);
