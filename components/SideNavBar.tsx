import React, {useEffect, useState} from 'react';
import Image from "next/image";
import {navSections} from "../Constant/UIDatas";

const SectionText = ({text,activeSection,textSectionId,sectionRef}) => {
    const handleScroll = () => {
        console.log(sectionRef,"<===== Check Ref")
        sectionRef.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div className="relative group flex justify-center items-center">
            {
                activeSection === textSectionId?
                    <div
                        className="absolute rounded-full bg-customRed mt-2 h-2/5 duration-10 scale-x-100 transition-transform ease-in-out origin-left z-0">
                        <p className={`opacity-0 ${text.length > 10? "mx-8" : "mx-3"}`}>{text}</p>
                    </div>
                    :
                    <div
                        className="absolute bg-customRed transform scale-x-0 transition-transform duration-10 mt-2 h-2/5 ease-in-out group-hover:scale-x-100 origin-left rounded-full z-0">
                        <p className={`opacity-0 ${text.length > 10? "mx-8" : "mx-3"}`}>{text}</p>
                    </div>
            }
            <div className="relative  z-1">
                <button onClick={handleScroll} className="text-white-500">{text}</button>
            </div>
        </div>
    )
}

function SideNavBar({sectionRefs}) {

    const [activeSection, setActiveSection] = useState<string>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            const sectionIds = ['section1', 'section2', 'section3', 'section4', 'section5'];

            sectionIds.forEach((sectionId, index) => {
                const section = sectionRefs.current[index];
                const rect = section.getBoundingClientRect();
                const sectionTop = window.scrollY + rect.top;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + rect.height) {
                    setActiveSection(sectionId);
                    console.log(sectionId,section,rect,'Active section ID')
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
            <div className="absolute top-0 left-0 w-1/4 h-full pt-10">
                <aside
                    className="sticky top-0 left-0 w-100 h-screen bg-black bg-opacity-90 p-4 z-10 flex flex-col justify-center items-center">
                    <Image
                        src="/image/logo.png"
                        alt="sidebar-logo"
                        width={ 150 } // Set the width here
                        height={ 150 } // Set the height here
                        className="rounded-full-lg shadow-lg"
                    />
                    <nav className="flex flex-col gap-4 text-center">
                        {navSections.map((nav,index) => {
                            return(
                                <SectionText
                                    key={nav.sectionId}
                                    text={nav.section}
                                    activeSection={activeSection}
                                    textSectionId={nav.sectionId}
                                    sectionRef={sectionRefs.current[index]}
                                />
                            )
                        })}
                    </nav>
                </aside>

            </div>

    );
}

export default SideNavBar;