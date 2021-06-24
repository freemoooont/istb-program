import React from 'react';
import HomeGameSlide from "./HomeGameSlide/HomeGameSlide";
import Game from "./Game/Game";

function HomeGame(){
    return(
        <section className="section welcome--slide">
            <HomeGameSlide/>
            <Game/>
        </section>
    )
}

export default HomeGame;