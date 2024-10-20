import { useState, useEffect, useRef } from 'react';

export default function ProgressBar({ score = 100 }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let progressInterval;
        const startProgress = () => {
            progressInterval = setInterval(() => {
                setProgress((prevProgress) => {
                    if (prevProgress < score) {
                        return prevProgress + 1; // Increase gradually by 1%
                    } else {
                        clearInterval(progressInterval); // Stop when reaching the score
                        return prevProgress;
                    }
                });
            }, 20); // Adjust the interval for speed control (20ms per step)
        };

        startProgress();

        return () => clearInterval(progressInterval); // Cleanup on unmount
    }, [score]); // Re-run effect if score changes

    return (
        <div className="w-full flex flex-col items-center mt-10">
            {/* Progress Bar Container */}
            <div className="w-full max-w-lg h-2 bg-gray-200 rounded relative">
                {/* Progress Bar */}
                <div
                    className="bg-gradient-to-r from-green-200 to-green-600 h-full rounded progress-bar"
                    style={{
                        width: `${progress}%`, // Set the width based on progress
                        transition: 'width 0.5s ease-out', // Use CSS transition for smooth animation
                    }}
                ></div>

                {/* Moving Percentage Indicator */}
                <div
                    className="absolute -top-3 h-8 w-12 bg-green-600 text-white rounded-full flex justify-center items-center z-10 progress-indicator"
                    style={{
                        left: `${progress}%`, // Move based on the same percentage as the progress bar
                        transform: 'translateX(-50%)', // Center the indicator on the progress bar
                        transition: 'left 0.5s ease-out', // Smooth transition for the indicator
                    }}
                >
                    <p className="progress-text">{Math.round(progress)}%</p>
                </div>
            </div>
        </div>
    );
}
