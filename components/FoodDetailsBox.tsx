import React from 'react';
import { allergens } from "../Constant/UIDatas";

type FoodDetailsBoxProps = {
    id: number,
    name: string,
    image: string,
    allergy: string[],
    ingredients: string[],
    details: string
};

const FoodDetailsBox: React.FC<FoodDetailsBoxProps> = ({ id, name, image, allergy, ingredients, details }) => {
    return (
        <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-xl">
            <h1 className="text-2xl font-bold text-center mb-6 text-amber-500">{name}</h1>

            {/* Section 1: Image and Ingredients (swapped position) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start mb-6">
                <img
                    src={image}
                    alt={name}
                    className="rounded-lg w-full h-60 object-cover"
                />
                <div>
                    <h2 className="text-lg font-semibold mb-3 text-black">Ingredients</h2>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                        {ingredients.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Section 2: Allergens */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold mb-3 text-amber-500">Allergens</h2>
                <div className="flex flex-wrap gap-4">
                    {allergens
                        .filter(item => allergy.includes(item.title))
                        .map((item, idx) => {
                            // Color mapping based on allergen type
                            const colorMap: Record<string, string> = {
                                "Seafood": "text-blue-500",
                                "Gluten": "text-yellow-600",
                                "Nuts": "text-amber-900",
                                "Milk": "text-black",
                                "Shellfish" : "text-red-500",
                                "Egg" : "text-orange-700",
                                "Sesame" : "text-rose-400"
                            };

                            const textColor = colorMap[item.title] || "text-gray-700";

                            return (
                                <div key={idx} className="flex items-center gap-2">
                                    {/*<img src={item.src} alt={item.title} className="w-5 h-5" />*/}
                                    <span className={`text-sm ${textColor}`}>{item.title}</span>
                                </div>
                            );
                        })}
                </div>
            </div>


            {/* Section 3: Description & History */}
            <div>
                <h2 className="text-lg font-semibold mb-3 text-black">Description & History</h2>
                <p className="text-gray-700 text-sm leading-relaxed">{details}</p>
            </div>
        </div>
    );
};

export default FoodDetailsBox;
