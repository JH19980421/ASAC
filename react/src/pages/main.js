import React from "react";

import '../css/main/main.css';

import Article from "../components/main/article";
import Event from "../components/main/event";
import Footer from "../components/footer";
import Header from "../components/header";
import JobSearchMain from "../components/main/job-search-main";
import KeywordCards from "../components/main/keyword-cards";
import Keywords from "../components/main/keywords";
import MarketingBanner from "../components/main/marketing-banner";
import MarketingButton from "../components/main/marketing-button";
import SlideBanner from "../components/main/slide-banner";
import Subtitle from "../components/main/subtitle";


function Main() {

    return (
        <div>
            <Header/>

            <div className="container__top">
                <SlideBanner/>
                
                <div id="top" className="subtitle__container">
                    <p className="subtitle">나에게 필요한 커리어 인사이트</p>
                    <img src={ require('../assets/images/question-mark.png') } alt="question-mark"/>
                </div>
                <Keywords/>
                <div className="container">
                    <KeywordCards/>
                    <button className="see-more">
                        더 많은 콘텐츠 보기
                        <img src={ require('../assets/images/arrow-down.png') } alt="down"/>
                    </button>
                </div>

                <div className="container">
                    <Subtitle
                        title="3분만에 읽는 Wanted+ 아티클"
                        label="아티클 전체보기 &gt;"
                    ></Subtitle>
                    <Article/>
                </div>

                <div className="container no-border">
                    <Subtitle
                        title="개발자를 위한 Wanted+ VOD"
                        label="VOD 전체보기 &gt;"
                    ></Subtitle>
                    <Article/>
                </div>

                <MarketingButton/>

                <div className="event">
                    <Subtitle
                        title="커리어 성장을 위한 맞춤 이벤트"
                        label="이벤트 전체보기 &gt;"
                    ></Subtitle>
                    <Event/>
                </div>

                <MarketingBanner/>

                <div className="container no-border">
                    <Subtitle
                        title="채용 정보를 찾고 계셨나요?"
                    ></Subtitle>

                </div>

                <JobSearchMain/>

            </div>

            <Footer/>
        </div>
    )

}

export default Main;