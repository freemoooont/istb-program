import React from 'react';
import {FullPageWrapper} from "../hoc/fullPageWrapper";
import {HomeGame, CourseSlide, FooterSlide} from "../Components";
import {useSelector} from "react-redux";
import SideMenu from "../Components/SideMenu/SideMenu";


function Page({stateHandler}){
    React.useEffect(()=>{
        stateHandler();
    }, [])

    const items = useSelector(({program})=> program.schedule);
    const isLoaded = useSelector(({program})=> program.isLoaded);

    const [isTopSlide, setIsTopSlide] = React.useState(true);
    const [isLastSlide, setIsLastSlide] = React.useState(false);

    function onLeave(origin, destination, direction) {
        setIsTopSlide(destination.index === 0);
        setIsLastSlide(destination.index === 5);
    }

    return(
        <div className="App">
            {
                isLoaded &&
                <>
                    <SideMenu isTopSlide={isTopSlide} isLastSlide={isLastSlide} />
                    <FullPageWrapper onLeave={onLeave}>
                        <HomeGame/>
                        {
                            items.map((obj, idx) => (
                                <CourseSlide
                                    key={idx}
                                    {...obj}
                                />
                            ))
                        }<FooterSlide/>
                    </FullPageWrapper>
                </>
            }
        </div>
    )
}

export default Page;