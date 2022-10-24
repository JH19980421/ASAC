import RecruitingList from "../components/recruiting-list";
import RecruitingHeader from "../components/recruiting-filter";
import RecruitingTop from "../components/recruiting-top";

import "../css/recruiting.css";
import Header from "../components/header";

function Recruiting() {
    return (
        <div>
            <Header/>

            <div className="job-group-container container-top">
                <div className="job-selector">
                    <p className="bold">개발</p>
                    <button><img className="job-expand" src={ require('../assets/images/chevron-down.png') } alt="down"/></button>
                </div>

                <div className="divider-column big"></div>

                <div className="job-selector detail">
                    <p>개발 전체</p>            
                    <button><img className="job-expand" src={ require('../assets/images/chevron-down.png') } alt="down"/></button>
                </div>
            </div>

            <RecruitingHeader/>

            <div className="bookmark-container">
                <img id="bookmark" src={ require('../assets/images/bookmark.png') } alt="bookmark"/>
                <p className="bookmark-text">북마크 모아보기 &gt;</p>
            </div>

            <RecruitingTop/>

            <RecruitingList/>
            
        </div>
    );
}

export default Recruiting;