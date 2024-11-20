import { StackedCarousel, ResponsiveContainer, StackedCarouselSlideProps } from 'react-stacked-center-carousel';
import React from "react";
import { FaArrowLeft , FaArrowRight } from "react-icons/fa6";

export const data = [
    {
        cover: "/image/homeBg.webp",
        title: "Intersteller",
    },
    {
        cover: "/image/homeBg.webp",
        title: "Inception",
    },
    {
        cover: "/image/homeBg2.webp",
        title: "Blade Runner 2049",
    },
    {
        cover: "/image/homeBg3.webp",
        title: "Icon man 3",
    },
    {
        cover: "/image/homeBg4.webp",
        title: "Venom",
    },
    {
        cover: "/image/homeBg5.webp",
        title: "Steins Gate",
    },
    {
        cover: "/image/homeBg6.webp",
        title: "One Punch Man",
    },
    {
        cover: "/image/homeBg7.webp",
        title: "A Silent Voice",
    },
    {
        cover: "/image/homeBg8.webp",
        title: "Demon Slayer",
    },
    {
        cover: "/image/homeBg9.webp",
        title: "Attack On Titan",
    },
];

export default function ResponsiveCarousel() {
    const ref = React.useRef<ResponsiveContainer>();
    return (
        <div style={{ width: '100%', position: 'relative' ,backgroundColor : "red"}}>
            <ResponsiveContainer
                carouselRef={ref}
                render={(width, carouselRef) => {
                    return (
                        <StackedCarousel
                            ref={carouselRef}
                            slideComponent={Slide}
                            slideWidth={750}
                            carouselWidth={width}
                            data={data}
                            maxVisibleSlide={5}
                            disableSwipe
                            customScales={[1, 0.85, 0.7, 0.55]}
                            transitionTime={450}
                        />
                    );
                }}
            />
            <button
                className='twitch-button left'
                onClick={() => ref.current?.goBack()}
            >
                <FaArrowLeft style={{ fontSize: 30 }} />
            </button>
            <button
                className='twitch-button right'
                onClick={() => ref.current?.goNext()}
            >
                <FaArrowRight style={{ fontSize: 30 }} />
            </button>
        </div>
    );
}

const Slide = React.memo(function (props: StackedCarouselSlideProps) {
    const { data, dataIndex, isCenterSlide, swipeTo, slideIndex } = props;
    const [loadDelay, setLoadDelay] = React.useState<any>();
    const [removeDelay, setRemoveDelay] = React.useState<any>();
    const [loaded, setLoaded] = React.useState(false);
    React.useEffect(() => {
        if (isCenterSlide) {
            clearTimeout(removeDelay);
            setLoadDelay(setTimeout(() => setLoaded(true), 1000));
        } else {
            clearTimeout(loadDelay);
            if (loaded) setRemoveDelay(setTimeout(() => setLoaded(false), 1000));
        }
    }, [isCenterSlide]);

    React.useEffect(() => () => {
        clearTimeout(removeDelay);
        clearTimeout(loadDelay);
    });

    const { coverImage, video } = data[dataIndex];

    return (
        <div className='twitch-card' draggable={false}>
            <div className={`cover fill ${isCenterSlide && loaded ? 'off' : 'on'}`}>
                <div
                    className='card-overlay fill'
                    onClick={() => {
                        if (!isCenterSlide) swipeTo(slideIndex);
                    }}
                />
                <img className='cover-image fill' src={coverImage} />
            </div>
            {loaded && (
                <div>
                    I am description.Nice to meet you!~
                </div>
            )}
        </div>
    );
});