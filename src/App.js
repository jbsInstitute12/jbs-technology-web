import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Global/Header/Header';
import Aboutus from '../src/Component/About Us/Aboutus';
import Projects from '../src/Component/Projects/Projects';
import Footer from './Global/Footer/Footer';
import Careers from './Component/Careers/Careers';
import Contactus from './Component/ContactUs/Contactus';
import HomePage from './Component/HomePage/HomePage';
import EventsPage from './Component/EventsPage/EventsPage';
import WebDevelopment from './Component/Services/WebDevelopment/WebDevelopment';
import AppDevelopment from './Component/Services/Appdevelopment/AppDevelopment';
import HirededicatedDeveloper from './Component/Services/HirededicatedDeveloper/HirededicatedDeveloper';
import Services from './Component/Services/Services';
import Loader from './Extra/Loader';
import { useEffect, useState } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(delay);
  }, []);
  return (
    <div className="App">
      {
        loading ? (<Loader />) : (
          <Router>
            <Header />
            <ScrollToTop />
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/events" element={<EventsPage />} />
              <Route exact path="/aboutus" element={<Aboutus />} />
              <Route exact path="/portfolio" element={<Projects />} />
              <Route exact path="/services" element={<Services />} />
              <Route exact path="/careers" element={<Careers />} />
              <Route exact path="/contactus" element={<Contactus />} />
              <Route exact path="/webdevelopment" element={<WebDevelopment />} />
              <Route exact path="/appdevelopment" element={<AppDevelopment />} />
              <Route exact path="/hirededicateddeveloper" element={<HirededicatedDeveloper />} />
              <Route exact path="/loader" element={<Loader />} />
            </Routes>
            <Footer />
          </Router>
        )
      }
    </div>
  );
}

export default App
