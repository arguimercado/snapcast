
import React from 'react';

const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50">
      {/* Background animated circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-blue-500/20 rounded-full animate-pulse" style={{animationDelay: '300ms'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-pink-500/20 rounded-full animate-pulse" style={{animationDelay: '700ms'}}></div>
      </div>

      {/* Main loader container */}
      <div className="relative flex flex-col items-center space-y-8">
        
        {/* Video player mockup with loading animation */}
        <div className="relative">
          {/* Video frame */}
          <div className="w-64 h-36 bg-gray-800 rounded-lg shadow-2xl border border-gray-700 overflow-hidden relative">
            {/* Video loading bars */}
            <div className="h-full flex items-end justify-center space-x-1 p-4">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-t from-purple-500 to-blue-500 rounded-sm animate-pulse"
                  style={{
                    width: '8px',
                    height: `${Math.random() * 60 + 20}%`,
                    animationDelay: `${i * 100}ms`,
                    animationDuration: '1.5s'
                  }}
                />
              ))}
            </div>
            
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse">
                {/* Play triangle */}
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            
            {/* Scanning line effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full animate-scan"></div>
          </div>
          
          {/* Glowing effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur-lg opacity-30 animate-pulse -z-10"></div>
        </div>

        {/* Loading spinner with multiple rings */}
        <div className="relative">
          {/* Outer ring */}
          <div className="w-16 h-16 border-4 border-gray-700 rounded-full animate-spin border-t-purple-500"></div>
          {/* Middle ring */}
          <div className="absolute inset-1 w-14 h-14 border-3 border-gray-600 rounded-full animate-spin border-r-blue-500" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
          {/* Inner ring */}
          <div className="absolute inset-3 w-10 h-10 border-2 border-gray-500 rounded-full animate-spin border-b-pink-500" style={{animationDuration: '0.8s'}}></div>
          {/* Center dot */}
          <div className="absolute inset-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
        </div>

        {/* Loading text with staggered animation */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-white flex justify-center space-x-1">
            {['L', 'o', 'a', 'd', 'i', 'n', 'g'].map((letter, i) => (
              <span 
                key={i}
                className="inline-block animate-bounce"
                style={{animationDelay: `${i * 100}ms`}}
              >
                {letter}
              </span>
            ))}
            <span className="animate-pulse ml-2">...</span>
          </h2>
          <p className="text-gray-400 animate-pulse">Preparing your video experience</p>
        </div>

        {/* Animated progress bar */}
        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-pulse rounded-full"></div>
          <div 
            className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-slide-right rounded-full"
            style={{animationDuration: '2s', animationIterationCount: 'infinite'}}
          ></div>
        </div>

        {/* Orbiting dots */}
        <div className="relative w-32 h-32">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-orbit"
              style={{
                animationDelay: `${i * 0.6}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full animate-float-up"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${i * 800}ms`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageLoader;