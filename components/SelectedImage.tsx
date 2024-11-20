import React from "react";
import Image from "next/image";
import { FaSearchengin } from "react-icons/fa6";

interface Photo {
    src: string;
    width: number;
    height: number;
    title?: string;
}

interface SelectedImageProps {
    photo: Photo;
    margin: number | undefined;
    direction?: string; // Allow any string
    top: number | undefined;
    left: number | undefined;
    index: number;
    setState: React.Dispatch<React.SetStateAction<number>>;
    openModal : () => void;
}

const SelectedImage: React.FC<SelectedImageProps> = ({
                                                         photo,
                                                         margin,
                                                         direction,
                                                         top,
                                                         left,
                                                         index,
                                                         setState,
                                                         openModal
                                                     }) => {
    const cont: React.CSSProperties = {
        position: "relative",
        left: direction ? left : undefined,
        top: direction ? top : undefined,
    };

    if (direction === "column") {
        cont.position = "absolute";
        cont.left = left;
        cont.top = top;
    } else if (!direction) {
        cont.position = "absolute";
        cont.left = left;
        cont.top = top;
    }

    const handleOnClick = () => {
        setState(index);
        openModal();
    };

    return (
        <div
            style={{ margin, height: photo.height, width: photo.width, ...cont }}
            className="relative flex justify-center items-center"
        >
            {/* Blurred Image */}
            <div className="relative group">
                <Image
                    alt={typeof photo.title === "string"? photo.title : ""}
                    src={photo.src}
                    width={photo.width}
                    height={photo.height}
                    className="group-hover:blur-sm transition-all duration-300"
                />
                {/* Search Icon (Appears on hover, but remains unblurred) */}
                <div
                    onClick={handleOnClick}
                    className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-1 hidden-searchIcon"
                >
                    <FaSearchengin color="white" size={25} />
                </div>
            </div>
        </div>
    );
};

export default SelectedImage;
