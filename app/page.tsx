'use client';

import RomanticEnvelopeWrapper from "@/components/EnvelopWrapper";
import FloatingHearts from "@/components/FloatingHeart";

export default function Restaurant() {

    // const [areRefsReady, sectionRefsetRefsReady] = useState(false);
    // const [searchBarData,setSearchBarData] = useState(wholeMenu);
    // const [showSuggestions,setShowSuggestions] = useState(false);
    // const [details,setDetails] = useState(foodDetails[0]);

    // const middleFun = (dataId  : number) => {
    //     setSearchBarData(foodCards[dataId].searchData);
    //     setShowSuggestions(true);
    // }


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

