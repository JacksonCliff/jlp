import { useState, useEffect, useRef } from 'react';

export default function ProgressBar() {
    const [progress, setProgress] = useState(0);
    const requestRef = useRef();

    // Function to update progress using requestAnimationFrame
    const updateProgress = () => {
        setProgress((prev) => {
            if (prev < 100) {
                return prev + 1; // Increase by 1% each frame
            } else {
                cancelAnimationFrame(requestRef.current); // Stop when reaching 100%
                return prev;
            }
        });

        // Continue the animation loop
        requestRef.current = requestAnimationFrame(updateProgress);
    };

    useEffect(() => {
        // Start the animation loop
        requestRef.current = requestAnimationFrame(updateProgress);
        return () => cancelAnimationFrame(requestRef.current); // Cleanup on component unmount
    }, []);

    return (
        <div className="w-full flex flex-col items-center mt-10">
            {/* Progress Bar Container */}
            <div className="w-full max-w-lg h-8 bg-gray-200 rounded relative">
                {/* Progress Bar */}
                <div
                    className="bg-blue-500 h-full rounded"
                    style={{ width: `${progress}%` }}
                ></div>

                {/* Moving Percentage Indicator */}
                <div
                    className="absolute top-0 h-8 w-12 bg-gray-800 text-white rounded flex justify-center items-center z-10"
                    style={{
                        left: `${progress}%`, // Move based on the same percentage as the progress bar
                        transform: 'translateX(-50%)', // Center the square on the progress bar
                        transition: 'left 0.1s ease-out' // Smooth transition to prevent stutter
                    }}
                >
                    {Math.round(progress)}%
                </div>
            </div>
        </div>
    );
}
