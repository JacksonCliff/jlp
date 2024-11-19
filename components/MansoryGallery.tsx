import Gallery ,{ RenderImageProps}  from 'react-photo-gallery'
import SelectedImage from "./SelectedImage";
import { useCallback, useEffect, useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Image from "next/image";

export const photos = [
    {
        src: "/image/homeBg.webp",
        width: 4,
        height: 4,
        title : "image1"
    },
    {
        src: "/image/homeBg2.webp",
        width: 2,
        height: 1.33,
        title : "image2"

    },
    {
        src: "/image/homeBg3.webp",
        width: 6,
        height: 4,
        title : "image3"

    },
    {
        src: "/image/homeBg4.webp",
        width: 9,
        height: 6,
        title : "image4"

    },
    {
        src: "/image/homeBg5.webp",
        width: 6,
        height: 4,
        title : "image5"

    },
    {
        src: "/image/homeBg6.webp",
        width: 2,
        height: 1.13,
        title : "image6"

    },
    {
        src: "/image/homeBg7.webp",
        width: 3,
        height: 2,
        title : "image7"

    },
    {
        src: "/image/homeBg8.webp",
        width: 10,
        height: 6.5,
        title : "image8"

    },

];


export default function MansoryGallery() {

    const [selected, setSelected] = useState({visible:false,imgIndex:0});


    const imageRenderer = useCallback(
        ({ index, left, top, photo }: RenderImageProps) => (
            <SelectedImage
                index={index}
                left={left}
                top={top}
                photo={photo}
                margin={10} // Example margin, adjust as needed
                direction="column" // Example direction, adjust as needed
                setState={setSelected} // Manage setState in the parent component and pass it down if needed
            />
        ),
        []
    );

    const closeLightBox = () => {
        setSelected({
            visible : false,
            imgIndex : 0
        })
    }

    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        // Set the initial width
        setWidth(window.innerWidth);
        console.log(width)
        // Update the width on window resize
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return(
        <div>
            <Gallery
                photos={photos}
                direction={"column"}
                columns={4}
                renderImage={imageRenderer}
            />

                    <Modal open={selected.visible} onClose={closeLightBox} center>
                        <div>
                            <Carousel
                                width={width * 0.5}
                                dynamicHeight={true}
                                selectedItem={selected.imgIndex}
                                showThumbs={false}
                                className={"cusCarousel"}
                                infiniteLoop={true}
                            >

                                {photos.map((each) => {
                                    return(
                                        <div key={each.src} className="w-full relative pt-[100%]">
                                            <Image key={each.src} src={each.src} alt={"test"} fill={true}/>

                                        </div>

                                    )
                                })}
                            </Carousel>
                        </div>
                    </Modal>

        </div>)
}