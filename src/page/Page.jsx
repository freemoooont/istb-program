import React from 'react';
import {FullPageWrapper} from "../hoc/fullPageWrapper";
import {HomeGame, CourseSlide} from "../Components";
import {useSelector} from "react-redux";

function Page({stateHandler}){
    React.useEffect(()=>{
        stateHandler();
    }, [])

    const items = useSelector(({program})=> program.schedule);
    console.log(items);
    return(
        <>
            <div className="App">
                <FullPageWrapper>
                   <HomeGame/>
                    {
                        items.map((obj, idx) => (
                            <CourseSlide
                                key={idx}
                                {...obj}
                            />
                        ))}
                </FullPageWrapper>
            </div>
        </>
    )
}

export default Page;