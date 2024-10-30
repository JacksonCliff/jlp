import  Gallery  from 'react-photo-gallery'
import SelectedImage from "./SelectedImage";
import {useCallback, useEffect, useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import {Modal,ModalGateway} from "react-images";
import Image from "next/image";

export const photos = [
    {
        src: "/image/homeBg.webp",
        width: 4,
        height: 4
    },
    {
        src: "/image/homeBg2.webp",
        width: 2,
        height: 1.33
    },
    {
        src: "/image/homeBg3.webp",
        width: 6,
        height: 4
    },
    {
        src: "/image/homeBg4.webp",
        width: 9,
        height: 6
    },
    {
        src: "/image/homeBg5.webp",
        width: 6,
        height: 4
    },
    {
        src: "/image/homeBg6.webp",
        width: 2,
        height: 1.13
    },
    {
        src: "/image/homeBg7.webp",
        width: 3,
        height: 2
    },
    {
        src: "/image/homeBg8.webp",
        width: 10,
        height: 6.5
    },

];

const initialWidth = window.innerWidth;

export default function MansoryGallery() {

    const [selected, setSelected] = useState({visible:false,imgIndex:0});



    const imageRenderer = useCallback(
        ({ index, left, top, key, photo}) => (
            <SelectedImage
                key={key}
                index={index}
                photo={photo}
                left={left}
                top={top}
                setState={setSelected}
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
            <ModalGateway>
                {selected.visible && (
                    <Modal onClose={closeLightBox}>

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
                                      <div className="w-full relative pt-[100%]">
                                        <Image key={each.src} src={each.src} alt={"test"} fill={true}/>

                                      </div>

                                  )
                              })}
                            </Carousel>
                  </div>
                </Modal>
                )}
            </ModalGateway>

        </div>)
}