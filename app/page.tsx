'use client';

import Image from "next/image";
import SimpleImageSlider from "react-simple-image-slider";
import {useEffect, useRef, useState} from "react";
import SideNavBar from "../components/SideNavBar";
import {navSections} from "../Constant/UIDatas";

//unsplash pictures

const images = [
    {url : '/image/homeBg2.webp'},
    {url : '/image/homeBg5.webp'},
    {url : '/image/homeBg6.webp'},
]

export default function Restaurant() {

    const sectionRefs = useRef([]);
    const [areRefsReady, setRefsReady] = useState(false);

    const [sliderDimensions, setSliderDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setSliderDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        // When the sections are mounted, mark the refs as ready
        if (sectionRefs.current.length === navSections.length) {
            setRefsReady(true);
        }
    }, []);

    return (
        <div className="relative min-h-screen font-[family-name:var(--font-geist-sans)]">
            {areRefsReady && <SideNavBar sectionRefs={sectionRefs} />}
            {/* Hero Section with Background Image */ }

            <section id={navSections[0].sectionId} ref={(el) => (sectionRefs.current[0] = el)}>
                <SimpleImageSlider
                    width={sliderDimensions.width}
                    height={sliderDimensions.height}
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
            <section id={navSections[1].sectionId} ref={(el) => (sectionRefs.current[1] = el)} className="pl-[25%] bg-white h-screen text-center">
                <h2 className="text-4xl font-bold mb-4">About Us</h2>
                <p className="text-lg text-gray-700">
                    We are a family-owned restaurant bringing the best culinary experience with a fusion of flavors.
                </p>
                <div className="flex flex-row justify-between items-center bg-red p-16">
                    <div className="w-1/2">
                        <p>
                            Cras ultricies ligula sed magna dictum porta. Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                        </p>
                    </div>
                    <div className="relative w-1/2 h-[35vh] md:h-[45vh] lg:h-[60vh]"> {/* Responsive height */}
                        <Image
                            src="/image/homebg7.webp"
                            alt="about-logo"
                            fill={true}
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Menu Section */ }
            <section id={navSections[2].sectionId} ref={(el) => (sectionRefs.current[2] = el)} className="p-16 bg-gray-50 pl-[25%] text-center">
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
            <section id={navSections[3].sectionId} ref={(el) => (sectionRefs.current[3] = el)} className="p-16 bg-white pl-[25%] text-center">
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
            <section id={navSections[4].sectionId} ref={(el) => (sectionRefs.current[4] = el)} className="p-16 bg-gray-50 pl-[25%] text-center mb-100">
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
