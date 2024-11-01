import React from 'react';

function AppText({children,className}) {
    return (
        <p className={`${className} playBall`}>{children}</p>
    );
}

export default AppText;