'use client';

import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import SideNavBar from "../components/SideNavBar";
import {foodCards, foodDetails, navSections, pizzas, wholeMenu} from "../Constant/UIDatas";
import CustomSlider from "../components/CustomSlider";
import Tilt from 'react-parallax-tilt';
import ProgressBar from "../components/ProgressBar";
import MansoryGallery from "../components/MansoryGallery";
import {FaCaretRight} from "react-icons/fa6"
import AppText from "../components/AppText";
import AnimatedMenu from "../components/AnimatedMenu";
import CategoryBox from "../components/CategoryBox";
import SearchBarWithSuggestions from "../components/SearchBarWithSuggestions";
import FoodDetailsBox from "../components/FoodDetailsBox";
import RomanticEnvelope from "@/components/RomanticEnvelop";
import { confession } from "../Constant/UIDatas";
import {temObj} from "../Constant/UIDatas";
import RomanticEnvelopeWrapper from "@/components/EnvelopWrapper";
import FloatingHearts from "@/components/FloatingHeart";

export default function Restaurant() {

    const sectionRefs = useRef<(HTMLElement | null)[]>([]);
    // const [areRefsReady, sectionRefsetRefsReady] = useState(false);
    const [searchBarData,setSearchBarData] = useState(wholeMenu);
    const [showSuggestions,setShowSuggestions] = useState(false);
    const [details,setDetails] = useState(foodDetails[0]);

    const middleFun = (dataId  : number) => {
        setSearchBarData(foodCards[dataId].searchData);
        setShowSuggestions(true);
    }


    // useEffect(() => {
    //     // When the sections are mounted, mark the refs as ready
    //     if (sectionRefs.current.length === navSections.length) {
    //         setRefsReady(true);
    //     }
    // }, []);

    return (
        <div className="relative min-h-screen">
            <FloatingHearts/>
            <RomanticEnvelopeWrapper/>
            {/* <SearchBarWithSuggestions
                show={showSuggestions}
                setShow={setShowSuggestions}
                suggestions={searchBarData}
                onSearch={(key)=> alert(key)}
                setData={setSearchBarData}
            />
            <FoodDetailsBox
                name={temObj.name}
                id={temObj.id}
                image={temObj.image}
                ingredients={temObj.ingredients}
                allergy={temObj.allergy}
                details={temObj.details}
            />
            <div className={"w-full h-100 flex flex-row flex-wrap"}>
                {foodCards.map((each) => {
                    return  <CategoryBox key={each.id} image={each.src} label={each.title} onClick={() => middleFun(each.id)}/>
                })}

            </div> */}
        </div>
    );
}

