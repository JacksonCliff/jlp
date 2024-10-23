import  Gallery  from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from "react-images";
import SelectedImage from "./SelectedImage";
import {useCallback, useEffect, useState} from "react";
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
        width: 6.13,
        height: 9
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



export default function MansoryGallery() {

    const [selected, setSelected] = useState({visible:false,img:""});



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
            img : ""
        })
    }

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
                    <Modal
                        onClose={closeLightBox}
                        styles={{display:"flex",justifyContent:"center",alignItems : "center"}}
                    >
                       <Image src={selected.img} alt={"Modal-logo"} width={300} height={300}/>
                    </Modal>
                )}
        </ModalGateway>
        </div>)
}