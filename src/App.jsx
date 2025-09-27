import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { scroller, Element } from 'react-scroll';
import { Helmet } from 'react-helmet-async';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import VM from './Components/visionAndMission/VM';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Gallery from './Components/Gallery/Gallery';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
// import OurExpertTeam from './Components/Expert/Expert';
import BranndPatners from './Components/BrandPartners/BrandPartners';
import CareerPage from './Components/CareerPage/CareerPage';
import Privacy from './Pages/Privacy';
import Terms from './Pages/Terms';
import Cookies from './Pages/Cookies'
import JobApplicationForm from './Components/JobApplicationForm/JobApplicationForm';
import JobApplicationPrivacy from './Components/JobApplicationForm/JobApplicationPrivacy';
import NotFound from './Pages/404';
import AboutPage from './Pages/AboutPage';


const Home = ({ setIsVideoPlaying }) => {
  return (
    <>
      <Helmet>
        <title>Techxica Technology | Future-Ready Engineering Solutions</title>
        <meta name="description" content="Disrupt the future with cutting-edge engineering and AI-powered infrastructure solutions. Explore innovative programs and transform challenges into limitless potential." />
        <link rel="canonical" href="https://techxicatechnology.com/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="about-container">
        <About setPlayState={setIsVideoPlaying} />
      </Element>
      <Element name="vision-mission">
        <VM />
      </Element>
      <div className="container">
        <Element name="programs">
        <Title subTitle='Our PROGRAM' title='What We Offer' />
          <Programs />
        </Element>
        {/* <Element name="expert-section">
          <OurExpertTeam />
        </Element> */}
        <Element name="expert-section">
          <BranndPatners />
        </Element>
        <br /><br />
        <Element name="gallery">
          <Gallery />
        </Element>
        <br /><br />
        <Title subTitle='Contact Us' title='Get in Touch' />
        <br />
        <Element name="contact">
          <Contact />
        </Element>
      </div>
    </>
  );
};

const ContactPage = () => {
  const location = useLocation();
  const [jobTitle, setJobTitle] = useState(null);

  useEffect(() => {
    // Get job title from location state
    if (location.state?.jobTitle) {
      setJobTitle(location.state.jobTitle);
    }

    // Scroll to title
    scroller.scrollTo('contact-title', {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -80
    });
  }, [location.state]);

  return (
    <div className="contact-page-container">
      <Helmet>
        <title>Contact Techxica Technology - Get in Touch</title>
        <meta name="description" content="Contact Techxica Technology for technology solutions, partnerships, or career inquiries. We're here to help transform your challenges into opportunities." />
        <link rel="canonical" href="https://techxicatechnology.com/contact" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <br /><br /><br />
      <div className="container">
        <Element name="contact-title">
          <Title 
            subTitle={jobTitle ? `Applying for: ${jobTitle}` : 'Contact Us'} 
            title={jobTitle ? 'Application Form' : 'Get in Touch'}
          />
        </Element>
        <div className="contact-page-spacer"></div>
        <Contact jobTitle={jobTitle} />
      </div>
    </div>
  );
};

const App = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        scroller.scrollTo(id, {
          duration: 500,
          delay: 0,
          smooth: 'easeInOutQuart',
          offset: -80
        });
      }, 100);
    }
  }, [location]);

  return (
    <div className="app-container">
      <Navbar />
      <VideoPlayer playState={isVideoPlaying} setPlayState={setIsVideoPlaying} />
      
      <main>
        <Routes>
          <Route 
            path="/" 
            element={<Home setIsVideoPlaying={setIsVideoPlaying} />} 
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareerPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/apply" element={<JobApplicationForm />} />
          <Route path="/job-application-privacy" element={<JobApplicationPrivacy />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;