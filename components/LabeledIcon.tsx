import React from 'react';
import * as Icons from "react-icons/fa6";

function LabeledIcon({iconName = "FaCheck",className,color = "green",txColor="black", label = "Quality"}) {
    const IconComponent = Icons[iconName];

    return (
        <div className={`w-full flex justify-start items-center ${className}`}>
            <IconComponent style={{fontSize : "x-large"}} color={color}/>
            <p className="ml-2 font-bold text-lg" style={{color:txColor}}>{label}</p>
        </div>
    );
}

export default LabeledIcon;