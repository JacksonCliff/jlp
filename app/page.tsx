'use client';

import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import SideNavBar from "../components/SideNavBar";
import {navSections} from "../Constant/UIDatas";
import CustomSlider from "../components/CustomSlider";
import Tilt from 'react-parallax-tilt';
import ProgressBar from "../components/ProgressBar";
import MansoryGallery from "../components/MansoryGallery";
import {FaBars, FaCaretRight} from "react-icons/fa6"
import AppText from "../components/AppText";
import AnimatedMenu from "../components/AnimatedMenu";



export default function Restaurant() {

    const sectionRefs = useRef<(HTMLElement | null)[]>([]);
    const [areRefsReady, setRefsReady] = useState(false);
    const [openMenuModal,setOpenMenuModal] = useState(false);

    const handleMenuClick = () => {
        if(openMenuModal){
            setOpenMenuModal(false)
            return
        }
        setOpenMenuModal(true)
    }

    useEffect(() => {
        // When the sections are mounted, mark the refs as ready
        if (sectionRefs.current.length === navSections.length) {
            setRefsReady(true);
        }
    }, []);

    return (
        <div className="relative min-h-screen font-[family-name:var(--font-geist-sans)]">
            <div className="hidden md:block">
                {areRefsReady && <SideNavBar sectionRefs={sectionRefs} />}
            </div>

            <div className="block md:hidden fixed bg-black w-full flex items-center p-1 z-50">
                {/* This content will only be visible on mobile screens smaller than 'md' (768px) */}
                <button onClick={handleMenuClick}>
                    <FaBars size={30} color={"white"}/>
                </button>
            </div>
            {/*     Section with Background Image */ }
            <AnimatedMenu sectionRefs={sectionRefs} openModal={openMenuModal} toggleFun={handleMenuClick}/>

            <section id={navSections[0].sectionId} ref={(el) => {sectionRefs.current[0] = el}}>
                <CustomSlider className="relative z-10"/>
            </section>

            <div className="negativeTop">
                {/* About Section */ }
                <section id={navSections[1].sectionId} ref={(el) => {sectionRefs.current[1] = el}} className="bg-white h-auto text-center">
                    <div className="w-full pt-20 pl-[25%] bg-[url('/image/homeBg3.webp')] bg-cover bg-center h-auto">
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black opacity-50"/>

                        {/* Main content */}
                        <div className="relative z-10">
                            <AppText className="text-4xl font-bold mb-4">Who We Are ?</AppText>
                            <AppText className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white-700">
                                We are a family-owned restaurant bringing the best culinary experience with a fusion of flavors.
                            </AppText>
                            <div className="flex lg:flex-row md:flex-col justify-evenly items-center px-24">
                                <div className="w-1/2 p-10">
                                    <AppText className={"text-slate-300"}>
                                        Cras ultricies ligula sed magna dictum porta. Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                    </AppText>
                                    <ProgressBar color={"Teal"} txColor={"white"} score={90} iconName={"FaCheck"} label={"Food Quality"} />
                                    <ProgressBar color={"Teal"} txColor={"white"} score={77} iconName={"FaClock"} label={"Delivery Time"} />
                                    <ProgressBar color={"Teal"} txColor={"white"} score={86} iconName={"FaThumbsUp"} label={"Guest Satisfaction"} />
                                </div>
                                <Tilt
                                    tiltMaxAngleX={10}
                                    tiltMaxAngleY={10}
                                    className="relative w-2/5 h-[45vh] md:h-[55vh] lg:h-[75vh]"
                                >
                                    <Image
                                        src="/image/homeBg13.webp"
                                        alt="about-logo"
                                        fill={true}
                                        className="object-cover rounded-md"
                                    />
                                </Tilt>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */ }
                <section id={navSections[2].sectionId} ref={(el) => {sectionRefs.current[2] = el}} className="pl-[30%] pr-[5%] text-center mt-32 pt-20 bg-[url('/image/homeBg10.webp')] bg-cover bg-center">
                    <div className=" bg-cover bg-center w-full h-screen">
                        <MansoryGallery/>
                    </div>
                </section>
                {/* Menu Section */ }
                <section id={navSections[3].sectionId} ref={(el) => {sectionRefs.current[3] = el}} className="p-16 bg-white pl-[30%] bg-[url('/image/homeBg11.webp')] bg-cover bg-center">
                    <div className="w-full h-full p-20 bg-[url('/image/homeBg16.webp')] bg-cover bg-center relative z-10">

                        <AppText className="text-center text-4xl">{"Today's Special"}</AppText>
                        <div className="mt-10">
                            <div className="flex flex-row items-center">
                                <FaCaretRight size={20} color={'red'}/>
                                <div className="w-full flex flex-row">
                                    <AppText className="ml-2 text-lg text-white w-auto whitespace-nowrap">Combination Soup</AppText>
                                    <div className="border-dashed border-slate-300 border-b-2 border-t-0 w-full h-0 ml-3 mr-3 mt-5"/>
                                    <AppText className="text-lg text-white"> $10</AppText>

                                </div>
                            </div>
                            <AppText className="text-sm text-slate-300 ml-7">Potato,Mushroom,Bell Pepper,Beans</AppText>
                        </div>
                        <div className="mt-10">
                            <div className="flex flex-row items-center">
                                <FaCaretRight size={20} color={'red'}/>
                                <div className="w-full flex flex-row">
                                    <AppText className="ml-2 text-lg text-white w-auto whitespace-nowrap">Combination Soup</AppText>
                                    <div className="border-dashed border-slate-300 border-b-2 border-t-0 w-full h-0 ml-3 mr-3 mt-5"/>
                                    <AppText className="text-lg text-white"> $10</AppText>

                                </div>
                            </div>
                            <AppText className="text-sm text-slate-300 ml-7">Potato,Mushroom,Bell Pepper,Beans</AppText>
                        </div>
                        <div className="mt-10">
                            <div className="flex flex-row items-center">
                                <FaCaretRight size={20} color={'red'}/>
                                <div className="w-full flex flex-row">
                                    <AppText className="ml-2 text-lg text-white w-auto whitespace-nowrap">Combination Soup</AppText>
                                    <div className="border-dashed border-slate-300 border-b-2 border-t-0 w-full h-0 ml-3 mr-3 mt-5"/>
                                    <AppText className="text-lg text-white"> $10</AppText>

                                </div>
                            </div>
                            <AppText className="text-sm text-slate-300 ml-7">Potato,Mushroom,Bell Pepper,Beans</AppText>
                        </div>
                        <div className="mt-10">
                            <div className="flex flex-row items-center">
                                <FaCaretRight size={20} color={'red'}/>
                                <div className="w-full flex flex-row">
                                    <AppText className="ml-2 text-lg text-white w-auto whitespace-nowrap">Combination Soup</AppText>
                                    <div className="border-dashed border-slate-300 border-b-2 border-t-0 w-full h-0 ml-3 mr-3 mt-5"/>
                                    <AppText className="text-lg text-white"> $10</AppText>

                                </div>
                            </div>
                            <AppText className="text-sm text-slate-300 ml-7">Potato,Mushroom,Bell Pepper,Beans</AppText>
                        </div>
                        <div className="mt-10">
                            <div className="flex flex-row items-center">
                                <FaCaretRight size={20} color={'red'}/>
                                <div className="w-full flex flex-row">
                                    <AppText className="ml-2 text-lg text-white w-auto whitespace-nowrap">Combination Soup</AppText>
                                    <div className="border-dashed border-slate-300 border-b-2 border-t-0 w-full h-0 ml-3 mr-3 mt-5"/>
                                    <AppText className="text-lg text-white"> $10</AppText>

                                </div>
                            </div>
                            <AppText className="text-sm text-slate-300 ml-7">Potato,Mushroom,Bell Pepper,Beans</AppText>
                        </div>
                        <div className="mt-10">
                            <div className="flex flex-row items-center">
                                <FaCaretRight size={20} color={'red'}/>
                                <div className="w-full flex flex-row">
                                    <AppText className="ml-2 text-lg text-white w-auto whitespace-nowrap">Combination Soup</AppText>
                                    <div className="border-dashed border-slate-300 border-b-2 border-t-0 w-full h-0 ml-3 mr-3 mt-5"/>
                                    <AppText className="text-lg text-white"> $10</AppText>

                                </div>
                            </div>
                            <AppText className="text-sm text-slate-300 ml-7">Potato,Mushroom,Bell Pepper,Beans</AppText>
                        </div>
                        <div className="mt-10">
                            <div className="flex flex-row items-center">
                                <FaCaretRight size={20} color={'red'}/>
                                <div className="w-full flex flex-row">
                                    <AppText className="ml-2 text-lg text-white w-auto whitespace-nowrap">Combination Soup</AppText>
                                    <div className="border-dashed border-slate-300 border-b-2 border-t-0 w-full h-0 ml-3 mr-3 mt-5"/>
                                    <AppText className="text-lg text-white"> $10</AppText>

                                </div>
                            </div>
                            <AppText className="text-sm text-slate-300 ml-7">Potato,Mushroom,Bell Pepper,Beans</AppText>
                        </div>
                        <div className="mt-10">
                            <div className="flex flex-row items-center">
                                <FaCaretRight size={20} color={'red'}/>
                                <div className="w-full flex flex-row">
                                    <AppText className="ml-2 text-lg text-white w-auto whitespace-nowrap">Combination Soup</AppText>
                                    <div className="border-dashed border-slate-300 border-b-2 border-t-0 w-full h-0 ml-3 mr-3 mt-5"/>
                                    <AppText className="text-lg text-white"> $10</AppText>

                                </div>
                            </div>
                            <AppText className="text-sm text-slate-300 ml-7">Potato,Mushroom,Bell Pepper,Beans</AppText>
                        </div>
                        <div className="mt-10">
                            <div className="flex flex-row items-center">
                                <FaCaretRight size={20} color={'red'}/>
                                <div className="w-full flex flex-row">
                                    <AppText className="ml-2 text-lg text-white w-auto whitespace-nowrap">Combination Soup</AppText>
                                    <div className="border-dashed border-slate-300 border-b-2 border-t-0 w-full h-0 ml-3 mr-3 mt-5"/>
                                    <AppText className="text-lg text-white"> $10</AppText>

                                </div>
                            </div>
                            <AppText className="text-sm text-slate-300 ml-7">Potato,Mushroom,Bell Pepper,Beans</AppText>
                        </div>

                    </div>
                </section>

                {/* Contact Us Section */ }
                <section id={navSections[4].sectionId} ref={(el) => {sectionRefs.current[4] = el}} className="bg-slate-950 pl-[30%] p-16 text-center mb-100">
                    <div className="relative z-10">
                        <AppText className="text-4xl font-bold mb-8">Contact Us</AppText>
                        <div className="w-full h-52 flex items-center justify-center bg-customRed">
                            <AppText className="text-4xl font-bold">+971559613596</AppText>

                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
