import React from "react";
import Image from "next/image";
import { FaSearchengin } from "react-icons/fa6";







const SelectedImage = ({photo, margin, direction, top, left, setState}) => {


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
        setState(photo.src)
        console.log(photo.src,"<======== Chekc this")
    };


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
                    className="group-hover:blur-sm transition-all duration-300"
                />
                {/* Search Icon (Appears on hover, but remains unblurred) */}
                <div
                    onClick={handleOnClick}
                    className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hidden-searchIcon"
                >
                    <FaSearchengin color={"white"} size={25} />
                </div>
            </div>
        </div>
    );
};

export default SelectedImage;

