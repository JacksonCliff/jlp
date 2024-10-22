import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaSearchengin } from "react-icons/fa6";

const Checkmark = ({ selected }) => (
    <div
        style={
            selected
                ? { left: "4px", top: "4px", position: "absolute", zIndex: "1" }
                : { display: "none" }
        }
    >
        <svg
            style={{ fill: "white", position: "absolute" }}
            width="24px"
            height="24px"
        >
            <circle cx="12.5" cy="12.2" r="8.292" />
        </svg>
        <svg
            style={{ fill: "#06befa", position: "absolute" }}
            width="24px"
            height="24px"
        >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
    </div>
);

const imgStyle = {
    transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
};
const selectedImgStyle = {
    transform: "translateZ(0px) scale3d(0.9, 0.9, 1)",
    transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
};
const cont = {
    backgroundColor: "#eee",
    cursor: "pointer",
    overflow: "hidden",
    position: "relative"
};


const SelectedImage = ({
                           index,
                           photo,
                           margin,
                           direction,
                           top,
                           left,
                           selected
                       }) => {
    const [isSelected, setIsSelected] = useState(selected);

    const sx = (100 - (30 / photo.width) * 100) / 100;
    const sy = (100 - (30 / photo.height) * 100) / 100;
    const selectedImgStyle = {
        transform: `translateZ(0px) scale3d(${sx}, ${sy}, 1)`,
    };

    const cont = {
        position: "relative",
        left: direction ? left : undefined,
        top: direction ? top : undefined,
    };

    if (direction === "column") {
        cont.position = "absolute";
        cont.left = left;
        cont.top = top;
    }else if(!direction){
        cont.position = "absolute";
        cont.left = left;
        cont.top = top;
    }

    const handleOnClick = (e) => {
        setIsSelected(!isSelected);
    };

    useEffect(() => {
        setIsSelected(selected);
    }, [selected]);

    return (
        <div
            style={{ margin, height: photo.height, width: photo.width, ...cont }}
            className="relative flex justify-center items-center"
        >
            {/* Blurred Image */}
            <div className="relative group">
                <Image
                    alt={photo.title}
                    src={photo.src}
                    width={photo.width}
                    height={photo.height}
                    onClick={handleOnClick}
                    className="group-hover:blur-sm transition-all duration-300"
                />
                {/* Search Icon (Appears on hover, but remains unblurred) */}
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hidden-searchIcon">
                    <FaSearchengin color={"white"} size={25} />
                </div>
            </div>
        </div>
    );
};

export default SelectedImage;

