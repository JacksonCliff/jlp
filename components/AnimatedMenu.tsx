import React, {MutableRefObject, useEffect, useState} from "react";
import { motion } from "framer-motion";
import {navSections} from "../Constant/UIDatas";
import AppText from "./AppText";
import { RxCross1 } from "react-icons/rx";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

interface AnimatedMenuProps {
    sectionRefs: MutableRefObject<(HTMLElement | null)[]>; // Correct typing for useRef
    openModal : boolean;
    toggleFun : () => void;
}

interface handleScrollProps {
    (htmlRef : HTMLElement | null, sectionId : string) : void
}

const AnimatedMenu = ({sectionRefs,openModal,toggleFun} : AnimatedMenuProps) => {

    const [startAnimation,setStartAnimation] = useState(false);
    const [activeSection, setActiveSection] = useState("section1");

    const handleClose = () => {
        setStartAnimation(false);
        setTimeout(() => {
            toggleFun();
        },500)
    }

    const handleScroll : handleScrollProps = (htmlRef,sectionId) => {
        setActiveSection(sectionId)
        setStartAnimation(false);
        setTimeout(() => {
            if(htmlRef){
                htmlRef.scrollIntoView({ behavior: "smooth" });
            }
            toggleFun();
        },1000)
    };

    {/* Animates Mobile Menu from the side after a delay */}
    useEffect(() => {
        if(openModal){
            setTimeout(() => {
                setStartAnimation(true)
            },500)
            return
        }
        setStartAnimation(false)
    },[openModal])

    return (
                <Modal open={openModal} onClose={() => console.log("Do Nothing")} center>
                    <div>
                        <motion.div
                            initial={ {x : "-100%"} }
                            animate={ {x : startAnimation ? 0 : "-100%"} }
                            transition={ {type : "tween" , duration : 0.3} }
                            className="absolute top-0 left-0 w-3/4 h-screen z-15"
                        >
                            <div className="w-full h-full flex flex-row items-start">
                                <aside
                                    className="w-full h-screen bg-black bg-opacity-90 p-4 z-10 flex flex-col">
                                    <nav className="flex flex-col text-center">
                                        { navSections.map((nav , index) => {
                                            return (
                                                <button key={ nav.sectionId } className="" onClick={ () => handleScroll(sectionRefs.current[index],nav.sectionId) }>
                                                    <div
                                                         className={`relative group flex items-center border-x border-y ${activeSection === nav.sectionId? "border-emerald-400" : "border-white"} border-solid p-3 mt-1 hover:border-emerald-400`}>
                                                        <div className="relative  z-1">
                                                            <AppText className={`${activeSection === nav.sectionId? "text-emerald-400" : "text-white"} hover:text-emerald-400`}>{ nav.section }</AppText>
                                                        </div>
                                                    </div>
                                                </button>

                                            )
                                        }) }
                                    </nav>
                                </aside>
                                <button onClick={handleClose} className="hover:animate-rotateOnce">
                                    <RxCross1 size={ 25 } color={ "white" } className="m-3"/>
                                </button>
                            </div>

                        </motion.div>

                    </div>

                </Modal>


    );
};

export default AnimatedMenu;