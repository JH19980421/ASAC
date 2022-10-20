import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Keywords from "../components/keywords";
import SlideBanner from "../components/slide-banner";

import '../css/main.css'

function Main() {
    return (
        <div>
            <Header/>

            <div className="container__top">
                <SlideBanner/>
                
                <div id="top" className="subtitle__container">
                    <p className="subtitle">나에게 필요한 커리어 인사이트</p>
                    <img src="/images/question-mark.png" alt="question-mark"/>
                </div>
                <Keywords/>
                



            </div>

            <Footer/>
        </div>
    )

}

export default Main;