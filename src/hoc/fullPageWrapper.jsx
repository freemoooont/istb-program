import React from 'react';
import ReactFullpage from "@fullpage/react-fullpage";

export const FullPageWrapper = (props) => {

    const anchors = ["welcomePage", "firstCourse", "secondCourse", "thirdCourse", "fourthCourse"];
    return (
        <ReactFullpage
            licenseKey='16EA2485-DD0F42BB-8ECA24E3-17346540'
            anchors={anchors}
            controlArrows={false}
            slidesNavigation={'top'}
            dragAndMove
            verticalCentered={false}
            sectionsColor={["#F8F8F8","#F8F8F8","#F8F8F8","#F8F8F8","#F8F8F8"]}
            render={() => {
                return (
                    <div>
                        {props.children}
                    </div>
                );
            }}
        />
    )
};