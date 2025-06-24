import React, { useRef, useEffect } from 'react';
import introVideo from '../assets/intro.mp4';

const Hero = () => {
  const videoRef = useRef(null);
  const [showFallback, setShowFallback] = React.useState(false);

  const statsData = [
    { number: '12+', label: 'YEARS OF EXPERIENCE' },
    { number: '256+', label: 'PROJECTS COMPLETED' },
    { number: '1.5k', label: 'HAPPY CLIENTS' },
    { number: '36', label: 'RUNNING PROJECTS' },
  ];

  // Try to autoplay and show fallback if it fails
  useEffect(() => {
    const attemptAutoplay = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.play();
          setShowFallback(false);
        }
      } catch (err) {
        setShowFallback(true);
        console.log("Autoplay prevented, showing fallback button");
      }
    };

    const timer = setTimeout(() => {
      attemptAutoplay();
    }, 1000); // Wait a second before trying

    return () => clearTimeout(timer);
  }, []);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => {
          setShowFallback(false);
        })
        .catch(err => {
          console.error("Playback failed:", err);
        });
    }
  };

  return (
    <div className="relative">
      {/* Video Background */}
      <div className="w-full h-screen overflow-hidden relative bg-black">
        <video
          ref={videoRef}
          className="w-full h-full object-cover opacity-90"
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          preload="auto"
          disablePictureInPicture
        >
          <source src={introVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        
        {/* Fallback Play Button (shown if autoplay fails) */}
        {showFallback && (
          <button 
            onClick={handlePlay}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      bg-white text-black px-8 py-3 rounded-full font-bold text-lg
                      hover:bg-opacity-90 transition-all duration-300 shadow-xl
                      flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        )}

        
      </div>

      {/* Stats Section */}
      <div className="w-full bg-black py-2 flex justify-center items-center h-[200px] md:py-3">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 lg:gap-8">
            {statsData.map((item, index) => ( 
              <div 
                key={index} 
                className="text-center p-4 hover:bg-gray-900 transition rounded-lg"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                  {item.number}
                </div>
                <div className="text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-wider text-gray-300">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;