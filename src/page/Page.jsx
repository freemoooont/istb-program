import React from 'react';
import {FullPageWrapper} from "../hoc/fullPageWrapper";
import {HomeGame, CourseSlide, FooterSlide} from "../Components";
import {useSelector} from "react-redux";


function Page({stateHandler}){
    React.useEffect(()=>{
        stateHandler();
    }, [])

    const items = useSelector(({program})=> program.schedule);
    const isLoaded = useSelector(({program})=> program.isLoaded);

    return(
        <div className="App">
            {
                isLoaded &&
                <FullPageWrapper>
                    <HomeGame/>
                    {
                        items.map((obj, idx) => (
                            <CourseSlide
                                key={idx}
                                {...obj}
                            />
                        ))
                    }
                    <FooterSlide/>
                </FullPageWrapper>
            }
        </div>
    )
}

export default Page;