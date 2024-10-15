'use client';

import Image from "next/image";
import SimpleImageSlider from "react-simple-image-slider";
import {useEffect, useRef, useState} from "react";
import SideNavBar from "../components/SideNavBar";
import {navSections} from "../Constant/UIDatas";

//unsplash pictures

const images = [
    {url : '/image/homeBg2.jpg'},
    {url : '/image/homeBg5.jpg'},
    {url : '/image/homeBg6.jpg'},
]

export default function Restaurant() {

    const sectionRefs = useRef([]);

    return (
        <div className="relative min-h-screen font-[family-name:var(--font-geist-sans)]">
            <SideNavBar sectionRefs={sectionRefs}/>
            {/* Hero Section with Background Image */ }

            <section id={navSections[0].sectionId} ref={(el) => (sectionRefs.current.push(el))}>
                <SimpleImageSlider
                    width={window.innerWidth}
                    height={window.innerHeight}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                    slideDuration={1}
                    loop={true}
                    autoPlay={true}
                    autoPlayDelay={8}
                />
            </section>



            {/* About Section */ }
            <section id={navSections[1].sectionId} ref={(el) => (sectionRefs.current.push(el))} className="p-16 bg-white h-screen text-center">
                <h2 className="text-4xl font-bold mb-4">About Us</h2>
                <p className="text-lg text-gray-700">
                    We are a family-owned restaurant bringing the best culinary experience with a fusion of flavors.
                </p>
            </section>

            {/* Menu Section */ }
            <section id={navSections[2].sectionId} ref={(el) => (sectionRefs.current.push(el))} className="p-16 bg-gray-50 text-center">
                <h2 className="text-4xl font-bold mb-8">Our Menu</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 shadow-md rounded-full-lg">
                        <h3 className="text-xl font-semibold">Grilled Salmon</h3>
                        <p className="text-gray-600 mt-2">$25</p>
                    </div>
                    <div className="bg-white p-6 shadow-md rounded-full-lg">
                        <h3 className="text-xl font-semibold">Pasta Primavera</h3>
                        <p className="text-gray-600 mt-2">$20</p>
                    </div>
                    <div className="bg-white p-6 shadow-md rounded-full-lg">
                        <h3 className="text-xl font-semibold">Steak Au Poivre</h3>
                        <p className="text-gray-600 mt-2">$30</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */ }
            <section id={navSections[3].sectionId} ref={(el) => (sectionRefs.current.push(el))} className="p-16 bg-white text-center">
                <h2 className="text-4xl font-bold mb-8">What Our Customers Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-100 p-6 rounded-full-lg shadow-md">
                        <p className="text-gray-700 italic">"The food was absolutely amazing! Can't wait to return."</p>
                        <p className="text-sm text-gray-500 mt-4">- John Doe</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-full-lg shadow-md">
                        <p className="text-gray-700 italic">"Best dining experience we've had in a long time."</p>
                        <p className="text-sm text-gray-500 mt-4">- Jane Smith</p>
                    </div>
                </div>
            </section>

            {/* Online Order Section */ }
            <section id={navSections[4].sectionId} ref={(el) => (sectionRefs.current.push(el))} className="p-16 bg-gray-50 text-center mb-100">
                <h2 className="text-4xl font-bold mb-8">What Our Customers Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-100 p-6 rounded-full-lg shadow-md">
                        <p className="text-gray-700 italic">"The food was absolutely amazing! Can't wait to return."</p>
                        <p className="text-sm text-gray-500 mt-4">- John Doe</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-full-lg shadow-md">
                        <p className="text-gray-700 italic">"Best dining experience we've had in a long time."</p>
                        <p className="text-sm text-gray-500 mt-4">- Jane Smith</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
