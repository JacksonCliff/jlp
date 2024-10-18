import React, {useEffect, useState} from 'react';
import SimpleImageSlider from "react-simple-image-slider";


//unsplash pictures

const images = [
    {url : '/image/homeBg2.webp'},
    {url : '/image/homeBg5.webp'},
    {url : '/image/homeBg6.webp'},
]

function CustomSlider(props) {

    const [sliderDimensions, setSliderDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setSliderDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <SimpleImageSlider
            width={sliderDimensions.width}
            height={sliderDimensions.height}
            images={images}
            showBullets={true}
            showNavs={true}
            slideDuration={1}
            loop={true}
            autoPlay={true}
            autoPlayDelay={8}

        />
    );
}

export default CustomSlider;