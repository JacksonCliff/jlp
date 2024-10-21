import React from 'react';
import { FaCheck , FaClock , FaThumbsUp } from "react-icons/fa6";
import {className} from "postcss-selector-parser";

function LabeledIcon({className,color = "green",txColor="white"}) {
    return (
        <div className={`w-full flex justify-start items-center ${className}`}>
            <FaCheck style={{fontSize : "x-large"}} color={color}/>
            <p className="ml-2 font-bold text-lg" style={{color:txColor}}>Food Quality</p>
        </div>
    );
}

export default LabeledIcon;