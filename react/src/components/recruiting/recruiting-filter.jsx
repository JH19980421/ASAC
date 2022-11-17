import "../../css/recruiting/recruiting-filter.css";

function RecruitingFilter() {

    return (
        <div className="sticky-top">
            <div className="filter-container">
                <div className="filter-left">
                    <div className="region">
                        <p>지역</p>
                        <p>한국</p>
                    </div>
                    <div className="years">
                        <p>경력</p>
                        <p>전체</p>
                        <img className="filter-expand" src={ require('../../assets/images/arrow-down.png') } alt="down"/>
                    </div>
                    <div className="stack">
                        <p>기술스택</p>
                        <img className="filter-expand" src={ require('../../assets/images/arrow-down.png') } alt="down"/>
                    </div>
                </div>
                <div className="filter-right">
                    <div className="order">
                        <p>응답률순</p>
                        <img className="filter-expand" src={ require('../../assets/images/arrow-down.png') } alt="down"/>
                    </div>
                </div>
            </div>

            <div className="keywords-container">
                <div className="etc-container-left">
                    <button><img src={ require('../../assets/images/chevron-left.png') } alt="left"/></button>
                </div>
                <div className="keywords">
                    <button id="money">연봉이 최고의 복지 💰</button>
                    <button id="home">재택근무 🏠</button>
                    <button id="money">연봉이 최고의 복지 💰</button>
                    <button id="home">재택근무 🏠</button>
                    <button id="money">연봉이 최고의 복지 💰</button>
                    <button id="home">재택근무 🏠</button>
                    <button id="money">연봉이 최고의 복지 💰</button>
                    <button id="home">재택근무 🏠</button>
                    <button id="money">연봉이 최고의 복지 💰</button>
                    <button id="home">재택근무 🏠</button>
                    <button id="money">연봉이 최고의 복지 💰</button>
                    <button id="home">재택근무 🏠</button>
                    <button id="money">연봉이 최고의 복지 💰</button>
                    <button id="home">재택근무 🏠</button>
                    <button id="money">연봉이 최고의 복지 💰</button>
                    <button id="home">재택근무 🏠</button>
                    <div className="empty-large"></div>
                </div>
                <div className="etc-container">
                    <button id="right"><img src={ require('../../assets/images/chevron-right.png') } alt="right"/></button>
                </div>
            </div>
        </div>
    )
}

export default RecruitingFilter;