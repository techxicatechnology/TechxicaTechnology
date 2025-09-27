import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import About from '../Components/About/About';
import VideoPlayer from '../Components/VideoPlayer/VideoPlayer';

const AboutPage = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="about-page-container">
      <Helmet>
        <title>About Techxica Technology - Future-Ready Engineering Solutions</title>
        <meta name="description" content="Learn about Techxica Technology's mission to engineer the future through cutting-edge development, AI-powered solutions, and innovative technology education." />
        <link rel="canonical" href="https://techxicatechnology.com/about" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <VideoPlayer playState={isVideoPlaying} setPlayState={setIsVideoPlaying} />
      
      <main style={{ paddingTop: '80px' }}>
        <div className="container">
          <About setPlayState={setIsVideoPlaying} />
        </div>
      </main>
    </div>
  );
};

export default AboutPage;