import { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BrandPartners.css';

// Image imports (replace with actual brand logos)
import roboJustLogo from "../../assets/robojust-logo.png"; // Placeholder for RoboJust logo
import voltxTechnologiesLogo from "../../assets/voltxtechnologies-logo.png"; // Placeholder for VoltX Technologies logo

const PartnerCard = ({ logo, name, role, description, website }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      card.style.setProperty('--rotate-x', `${y * 8}deg`);
      card.style.setProperty('--rotate-y', `${-x * 8}deg`);
    };

    const handleMouseLeave = () => {
      card.style.setProperty('--rotate-x', '0deg');
      card.style.setProperty('--rotate-y', '0deg');
      setIsHovered(false);
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`partner-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
    >
      <div className="logo-section">
        <img 
          src={logo} 
          alt={`Logo of ${name}`} 
          className="partner-logo"
          loading="lazy"
        />
      </div>
      <div className="info-section">
        <h2>{name}</h2>
        <h4>{role}</h4>
        <p className="description">{description}</p>
        <a 
          href={website} 
          className="visit-button" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={`Visit ${name} website`}
        >
          Visit Website
        </a>
      </div>
    </div>
  );
};

const PartnerSlider = ({ title, subtitle, partners }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="partner-section">
      <h3 className="partner-title">{title}</h3>
      {subtitle && <p className="partner-subtitle">{subtitle}</p>}
      <div className="slider-container">
        <Slider {...settings}>
          {partners.map((partner, index) => (
            <div key={`partner-slide-${index}`}>
              <PartnerCard {...partner} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const BrandPartners = () => {
  const brandPartners = [
    {
      logo: roboJustLogo,
      name: "RoboJust",
      role: "Robotics & Automation Partner",
      description: "RoboJust is a leading innovator in robotics and automation, providing cutting-edge solutions for industrial and educational applications. Their expertise enhances Techxica’s capabilities in delivering innovative, efficient, and scalable technology solutions.",
      website: "https://www.robojust.com"
    },
    {
      logo: voltxTechnologiesLogo,
      name: "VoltX Technologies",
      role: "IoT & Smart Technology Partner",
      description: "VoltX Technologies specializes in IoT and smart technology solutions, empowering businesses with connected devices and intelligent systems. Their collaboration with Techxica drives the future of connected ecosystems and sustainable innovation.",
      website: "https://www.voltxtechnologies.com"
    }
  ];

  return (
    <section className="partners-section" id="brand-partners">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Brand Partners</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Meet the trusted brands powering Techxica’s innovation</p>
        </div>
        <PartnerSlider
          title="Strategic Partners"
          subtitle="Collaborators driving our technological excellence"
          partners={brandPartners}
        />
      </div>
    </section>
  );
};

export default BrandPartners;