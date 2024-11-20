import React, { useState, useEffect } from 'react';
import LabeledIcon from "./LabeledIcon";
import * as Icons from "react-icons/fa6";
import AppText from "./AppText";

type IconName = keyof typeof Icons;

interface ProgressBarProps {
    score: number;
    iconName : IconName;
    label : string;
    color :string;
    txColor : string;

}

export default function ProgressBar({score=100,iconName,label,color,txColor} : ProgressBarProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let progressInterval : NodeJS.Timeout;
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
            <LabeledIcon
                iconName={iconName}
                color={color}
                txColor={txColor}
                label={label}
                className="mb-2"
            />
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
                    className="absolute -top-3 h-8 w-12 bg-green-600 text-white rounded-full flex justify-center items-center z-1 progress-indicator"
                    style={{
                        left: `${progress}%`, // Move based on the same percentage as the progress bar
                        transform: 'translateX(-50%)', // Center the indicator on the progress bar
                        transition: 'left 0.5s ease-out', // Smooth transition for the indicator
                    }}
                >
                    <AppText className="progress-text">{Math.round(progress)}%</AppText>
                </div>
            </div>
        </div>
    );
}
