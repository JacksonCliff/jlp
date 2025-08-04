import React from 'react';

type RomanticLetterProps = {
  greeting?: string;
  body: string;
  farewell?: string;
};

const RomanticEnvelope = ({ greeting, body, farewell }: RomanticLetterProps) => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-pink-50">
      <div className="relative w-full max-w-md sm:max-w-lg">
        {/* Envelope container */}
        <div className="bg-white border border-pink-200 rounded-lg shadow-xl p-6 sm:p-8 md:p-10 z-10">
          <div className="text-pink-900 font-serif space-y-6 m-6 font-vibe">
            {/* Greeting */}
            {greeting && (
              <p className="text-base sm:text-lg md:text-xl italic">
                {greeting}
              </p>
            )}

            {/* Body */}
            <p className="text-base sm:text-lg md:text-xl whitespace-pre-line leading-relaxed">
              {body}
            </p>

            {/* Farewell */}
            {farewell && (
              <p className="text-right text-lg sm:text-xl md:text-2xl italic">
                {farewell}
              </p>
            )}
          </div>
        </div>

        {/* Envelope flap */}
        <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-0 h-0 
                        border-l-[150px] sm:border-l-[180px] border-l-transparent 
                        border-r-[150px] sm:border-r-[180px] border-r-transparent 
                        border-b-[60px] sm:border-b-[70px] border-b-pink-200 z-0" />

        {/* Floating hearts */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="animate-pulse-slow absolute top-4 left-4 text-pink-300 text-2xl">💗</div>
          <div className="animate-pulse-fast absolute bottom-6 right-6 text-pink-300 text-xl">💖</div>
        </div>
      </div>
    </div>
  );
};

export default RomanticEnvelope;
