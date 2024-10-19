import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

//unsplash pictures



const CustomSlider = () => {
    const images = [
        {url : '/image/homeBg3.webp'},
        {url : '/image/homeBg5.webp'},
        {url : '/image/homeBg.webp'},
    ]

    return (
        <Slide
            autoplay={true}
            arrows={false}
            infinite={true}
            pauseOnHover={false}
            canSwipe={true}
            indicators={() => <div className="indicator"><div className="indicator-dot"/></div>}
            duration={8000}
        >
            <div className="each-slide-effect">
                <div className="bg-[url('/image/homeBg3.webp')] bg-cover bg-center h-screen">
                </div>
            </div>
            <div className="each-slide-effect">
                <div className="bg-[url('/image/homeBg5.webp')] bg-cover bg-center h-screen">
                </div>
            </div>
            <div className="each-slide-effect">
                <div className="bg-[url('/image/homeBg7.webp')] bg-cover bg-center h-screen">
                </div>
            </div>
        </Slide>
    );
};



export default CustomSlider;