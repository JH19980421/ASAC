import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import Floating from "../components/job-detail/floating";
import RecrutingList from "../components/recruiting/recruiting-list";

import "../css/job-detail/job-detail.css";

import jobDetailImage from "../job-detail-image.json";
import jobDetail from "../job-detail.json";

function JobDetail() {
    const params = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header/>

            <div className="job-detail-container">
                <Floating/>

                <div className="job-image">
                    {
                        jobDetailImage.map((item) => (
                            <img src={ item.imageUrl } alt="image" key={item.id}/>
                        ))
                    }
                </div>

                <p className="company-detail-title">웹 프론트엔드 개발자(React) + {params.companyId}</p>
                <div className="company-detail">
                    <div className="company-title-badge">응답률 평균 이상</div>
                    <div className="divider-vertical"></div>
                    <p>서울 / 한국</p>
                </div>

                <div className="tags">
                    {
                        jobDetail[0].tags.map((item) => (
                            <div className="tag-item" key={item.id}>{`#${item.tag}`}</div>
                        ))
                    }
                </div>
                
                <div className="content-title">{jobDetail[0].title}</div>
                <div className="content">
                    <p>{jobDetail[0].content}</p>
                </div>

                <div className="stacks">
                    <p>기술스택 / 툴</p>
                    <div className="stack-item">
                        {
                            jobDetail[0].stacks.map((item) => (
                                <div>{item.stack}</div>
                            ))
                        }
                    </div>
                </div>

                <div className="divider-horizontal"></div>

                <div className="company-location">
                    <div className="due-date">
                        <p>마감일</p>
                        <p>상시</p>
                    </div>
                    <div className="due-date">
                        <p>근무지역</p>
                        <p>서울 용산구 한강대로 366 트윈시티 남산 2 패스트파이브</p>
                    </div>

                    <div className="company-map">
                        <div id="map"></div>
                    </div>
                </div>

                <div className="company-badge">
                    <div className="company-badge-name">
                        <img src="https://static.wanted.co.kr/images/wdes/0_5.0852ff23.jpg" alt="image"/>
                        <div>
                            <p>블루비커</p>
                            <p>IT, 컨텐츠</p>
                        </div>
                    </div>
                    <div className="company-follow">
                        팔로우
                    </div>            
                </div>

                <div className="share-warning">
                    <div className="share-warning-content">
                        <img src={ require('../assets/images/question-mark.png') } alt="question"/>
                        <p>본 채용정보는 원티드랩의 동의없이 무단전재, 재배포, 재가공할 수 없으며, 구직활동 이외의 용도로 사용할 수 없습니다.</p>
                    </div>
                    <img src={ require('../assets/images/chevron-down.png') } alt="expand"/>
                </div>

                <div className="empty-space__small"></div>
            </div>

            <p className="card-container-title">이 포지션을 찾고 계셨나요?</p>
            <RecrutingList />
        </>
    )
}

export default JobDetail;