import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {sliderImages} from "../Constant/UIDatas";

const CustomSlider = () => {

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
            {sliderImages.map((item,index) => {
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