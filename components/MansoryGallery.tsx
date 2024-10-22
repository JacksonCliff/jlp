import  Gallery  from 'react-photo-gallery'
import clsx from "clsx";
import SelectedImage from "./SelectedImage";
import {useCallback, useState} from "react";

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

    const [selectAll, setSelectAll] = useState(false);

    const toggleSelectAll = () => {
        setSelectAll(!selectAll);
    };

    const imageRenderer = useCallback(
        ({ index, left, top, key, photo}) => (
            <SelectedImage
                selected={selectAll}
                key={key}
                index={index}
                photo={photo}
                left={left}
                top={top}
            />
        ),
        [selectAll]
    );
    return <Gallery
        photos={photos}
        direction={"column"}
        columns={4}
        renderImage={imageRenderer}
    />;
}