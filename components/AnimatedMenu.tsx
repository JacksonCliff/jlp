import React, {MutableRefObject, useEffect, useState} from "react";
import { motion } from "framer-motion";
import {navSections} from "../Constant/UIDatas";
import AppText from "./AppText";
import { RxCross1 } from "react-icons/rx";
import {
    Modal ,
    ModalContent,
    useDisclosure
} from "@nextui-org/modal";
import {FaBars} from "react-icons/fa6";
import Image from "next/image";





interface AnimatedMenuProps {
    sectionRefs: MutableRefObject<(HTMLElement | null)[]>; // Correct typing for useRef
}

interface handleScrollProps {
    (htmlRef : HTMLElement | null, sectionId : string) : void
}

const AnimatedMenu = ({sectionRefs} : AnimatedMenuProps) => {

    const [startAnimation,setStartAnimation] = useState(false);
    const [activeSection, setActiveSection] = useState("section1");
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const handleClose = () => {
        setStartAnimation(false);
        setTimeout(() => {
            onOpenChange();
        },500)
    }

    const handleScroll : handleScrollProps = (htmlRef,sectionId) => {
        setActiveSection(sectionId)
        setStartAnimation(false);
        setTimeout(() => {
            if(htmlRef){
                htmlRef.scrollIntoView({ behavior: "smooth" });
            }
            onOpenChange();
        },1000)
    };

    {/* Animates Mobile Menu from the side after a delay */}
    useEffect(() => {
        if(isOpen){
            setTimeout(() => {
                setStartAnimation(true)
            },500)
            return
        }
        setStartAnimation(false)
    },[isOpen])

    return (
        <div className="block md:hidden fixed bg-black w-full flex items-center p-1 z-10">
            <button onClick={onOpen}>
                <FaBars size={30} color={"white"}/>
            </button>
            <Modal isOpen={isOpen} className="pt-8 bg-black bg-opacity-60">
                <ModalContent>
                    <motion.div
                        initial={ {x : "-100%"} }
                        animate={ {x : startAnimation ? 0 : "-100%"} }
                        transition={ {type : "tween" , duration : 0.3} }
                        className="absolute top-8 left-0 w-3/4 h-screen z-15"
                    >
                        <div className="w-full h-full flex flex-row items-start">
                            <aside
                                className="w-full h-screen bg-black bg-opacity-90 p-4 z-10 flex flex-col">
                                <Image
                                    src="/image/logo.png"
                                    alt="sidebar-logo"
                                    width={ 150 } // Set the width here
                                    height={ 150 } // Set the height here
                                    className="rounded-full-lg shadow-lg self-center"
                                />
                                <nav className="flex flex-col text-center">
                                    { navSections.map((nav , index) => {
                                        return (
                                            <button
                                                key={ nav.sectionId }
                                                className={`relative group flex items-center border-x border-y ${
                                                    activeSection === nav.sectionId ? "border-emerald-400 text-emerald-400" : "border-white text-white"
                                                } border-solid p-3 mt-1 hover:border-emerald-400 hover:text-emerald-400`}
                                                onClick={ () => handleScroll(sectionRefs.current[index],nav.sectionId) }
                                            >

                                                <AppText className="inherit">{ nav.section }</AppText>
                                            </button>

                                        )
                                    }) }
                                </nav>
                            </aside>
                            <button onClick={handleClose} className="hover:animate-rotateOnce m-1">
                                <RxCross1 size={ 25 } color={ "white" } className="m-1"/>
                            </button>
                        </div>

                    </motion.div>
                </ModalContent>
            </Modal>
        </div>


    );
};

export default AnimatedMenu;