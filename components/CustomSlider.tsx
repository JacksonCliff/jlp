import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

//unsplash pictures



const CustomSlider = () => {
    const images = [
        {url : '/image/homeBg3.webp'},
        {url : '/image/homeBg5.webp'},
        {url : '/image/homeBg7.webp'},
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
            {images.map((item,index) => {
                return (
                    <div key={ index + 1 } className="each-slide-effect">
                        <div
                            className="bg-cover bg-center h-screen"
                            style={{ backgroundImage: `url(${item.url})` }}
                        />
                    </div>
                )
            })}

        </Slide>
    );
};



export default CustomSlider;