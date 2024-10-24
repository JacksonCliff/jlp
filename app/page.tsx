'use client';

import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import SideNavBar from "../components/SideNavBar";
import {navSections} from "../Constant/UIDatas";
import CustomSlider from "../components/CustomSlider";
import Tilt from 'react-parallax-tilt';
import ProgressBar from "../components/ProgressBar";
import LabeledIcon from "../components/LabeledIcon";
import MansoryGallery from "../components/MansoryGallery";

export default function Restaurant() {

    const sectionRefs = useRef([]);
    const [areRefsReady, setRefsReady] = useState(false);



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
                <CustomSlider/>
            </section>

            {/* About Section */ }
            <section id={navSections[1].sectionId} ref={(el) => (sectionRefs.current[1] = el)} className="pl-[25%] bg-white h-screen text-center">
                <h2 className="text-4xl font-bold mb-4">About Us</h2>
                <p className="text-lg text-gray-700">
                    We are a family-owned restaurant bringing the best culinary experience with a fusion of flavors.
                </p>
                <div className="flex flex-row justify-between items-center bg-red p-16">
                    <div className="w-1/2 p-10">
                        <p>
                            Cras ultricies ligula sed magna dictum porta. Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                        </p>

                        <ProgressBar score={90} iconName={"FaCheck"} label={"Food Quality"}/>
                        <ProgressBar score={77} iconName={"FaClock"} label={"Delivery Time"}/>
                        <ProgressBar score={86} iconName={"FaThumbsUp"} label={"Guest Satisfaction"}/>

                    </div>
                    <Tilt
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                        className="relative w-1/2 h-[35vh] md:h-[45vh] lg:h-[65vh]"
                    >
                        <Image
                            src="/image/chef-1.jpg"
                            alt="about-logo"
                            fill={true}
                            className="object-cover rounded"
                        />
                    </Tilt>
                </div>
            </section>

            {/* Menu Section */ }
            <section id={navSections[2].sectionId} ref={(el) => (sectionRefs.current[2] = el)} className="pl-[30%] pr-[5%] bg-gray-50 text-center mt-20">
                <MansoryGallery/>
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
