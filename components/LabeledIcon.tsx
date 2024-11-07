import React from 'react';
import * as Icons from "react-icons/fa6";
import AppText from "./AppText";

type IconName = keyof typeof Icons; // Type all valid icon names

interface LabeledIconProps {
    iconName: IconName;
    className: string;
    color: string;
    txColor: string;
    label: string;

}

function LabeledIcon({iconName, className, color, txColor, label,}: LabeledIconProps) {
    const IconComponent = Icons[iconName]; // TypeScript now knows this is a valid icon component

    return (
        <div className={`w-full flex justify-start items-center ${className}`}>
            <IconComponent style={{fontSize : "x-large"}} color={color}/>
            <AppText className="ml-2 font-bold text-lg" style={{color:txColor}}>{label}</AppText>
        </div>
    );
}

export default LabeledIcon;