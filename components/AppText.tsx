import React from 'react';

interface AppTextProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

function AppText({children,className,style} : AppTextProps) {
    return (
        <p style={style} className={`${className} playBall`}>{children}</p>
    );
}

export default AppText;