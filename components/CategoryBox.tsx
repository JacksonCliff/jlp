import React from "react";

type CategoryBoxProps = {
    label: string;
    image: string;
    onClick?: () => void;
};

const CategoryBox: React.FC<CategoryBoxProps> = ({ label, image, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="w-24 h-28 m-2 shadow-md bg-white rounded-xl flex flex-col items-center justify-center p-2 cursor-pointer hover:shadow-md transition text-center"
        >
            <img
                src={image}
                alt={label}
                className="w-full h-3/4 object-cover mb-2 rounded-xl"
            />
            <span className="text-xs font-medium text-gray-700 italic">{label}</span>
        </div>
    );
};

export default CategoryBox;
