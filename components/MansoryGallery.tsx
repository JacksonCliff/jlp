import Gallery ,{ RenderImageProps}  from 'react-photo-gallery'
import SelectedImage from "./SelectedImage";
import React , { useCallback, useEffect, useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";
import Image from "next/image";


import {
    Modal ,
    ModalContent,
    useDisclosure
} from "@nextui-org/modal";

import {RxCross1} from "react-icons/rx";

// eslint-disable-next-line react/display-name
// export const Card = React.memo(function (props) {
//     const { data, dataIndex } = props;
//     const { cover } = data[dataIndex];
//     return (
//         <div
//             style={{
//                 width: "100%",
//                 height: 300,
//                 userSelect: "none",
//             }}
//             className="my-slide-component"
//         >
//             <Image
//                 fill={true}
//                 src={cover}
//                 alt={"test"}
//             />
//         </div>
//     );
// });
//
// export const data = [
//     {
//         cover: "/image/homeBg.webp",
//         title: "Intersteller",
//     },
//     {
//         cover: "/image/homeBg.webp",
//         title: "Inception",
//     },
//     {
//         cover: "/image/homeBg2.webp",
//         title: "Blade Runner 2049",
//     },
//     {
//         cover: "/image/homeBg3.webp",
//         title: "Icon man 3",
//     },
//     {
//         cover: "/image/homeBg4.webp",
//         title: "Venom",
//     },
//     {
//         cover: "/image/homeBg5.webp",
//         title: "Steins Gate",
//     },
//     {
//         cover: "/image/homeBg6.webp",
//         title: "One Punch Man",
//     },
//     {
//         cover: "/image/homeBg7.webp",
//         title: "A Silent Voice",
//     },
//     {
//         cover: "/image/homeBg8.webp",
//         title: "Demon Slayer",
//     },
//     {
//         cover: "/image/homeBg9.webp",
//         title: "Attack On Titan",
//     },
// ];

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

    const [selectedImgIndex, setSelectedImgIndex] = useState(0);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();



    const imageRenderer = useCallback(
        ({ index, left, top, photo }: RenderImageProps) => (
            <SelectedImage
                index={index}
                left={left}
                top={top}
                photo={photo}
                margin={10} // Example margin, adjust as needed
                openModal={onOpen}
                direction="column" // Example direction, adjust as needed
                setState={setSelectedImgIndex} // Manage setState in the parent component and pass it down if needed
            />
        ),
        []
    );

    const handleClose = () => {
        onOpenChange();
        setSelectedImgIndex(0);
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
            {
                width < 760? (
                    <Carousel
                        width={width * 0.8}
                        dynamicHeight={true}
                        selectedItem={selectedImgIndex}
                        showThumbs={false}
                        className={"cusCarousel"}
                        infiniteLoop={true}
                    >

                        {photos.map((each) => {
                            return(
                                <div key={each.src} className="w-full relative pt-[70%]">
                                    <Image key={each.src} src={each.src} alt={"test"} fill={true}/>

                                </div>

                            )
                        })}
                    </Carousel>
                ) : (
                    <Gallery
                        photos={photos}
                        direction={"column"}
                        columns={4}
                        renderImage={imageRenderer}
                    />
                )
            }
            <Modal isOpen={isOpen} className="pt-8 bg-black bg-opacity-60">
                <ModalContent>
                        <div>
                            <button onClick={handleClose} className="hover:animate-rotateOnce absolute m-2 right-5">
                                <RxCross1 size={ 25 } color={ "white" } className="m-1"/>
                            </button>
                            <Carousel
                                width={width < 760? width * 0.8 : width * 0.5}
                                dynamicHeight={true}
                                selectedItem={selectedImgIndex}
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
                </ModalContent>
            </Modal>


        </div>)
}