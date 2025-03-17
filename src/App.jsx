import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Cards from './Pages/Cards';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route
          path="/"
          element={
            <div className="relative">
              <Navbar />
              <HeroSection />
              <AboutSection />
              <ServicesSection />
              <DemoSection />
              <DashboardSection />
              <FaqSection />
              <ContactSection />
              <Footer />
              <Chatbot />
              <AnimatedRobot />
            </div>
          }
        ></Route> */}
        <Route path="/" element={<Cards />} />
      </Routes>
    </Router>
  );
}

export default App;
