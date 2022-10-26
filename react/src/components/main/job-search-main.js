import "../../css/main/job-search-main.css";

function JobSearch() {
    return (
        <div className="job-search__container">
            <a href="#" className="job-search__item">
                <img className="job-search__image" src={ require('../../assets/images/search.png') } alt="search"/>
                <p className="job-search__text">
                    채용공고
                    <img className="job-search__chevron" src={ require('../../assets/images/chevron-right.png') } alt="right"/>
                </p>
            </a>
            <div className="divider__vertical grid"></div>
            <a href="#" className="job-search__item">
                <img className="job-search__image" src={ require('../../assets/images/search.png') } alt="search"/>
                <p className="job-search__text">
                    내 프로필
                    <img className="job-search__chevron" src={ require('../../assets/images/chevron-right.png') } alt="right"/>
                </p>
            </a>
            <div className="divider__vertical grid"></div>
            <a href="#" className="job-search__item">
                <img className="job-search__image" src={ require('../../assets/images/search.png') } alt="search"/>
                <p className="job-search__text">
                    매치업
                    <img className="job-search__chevron" src={ require('../../assets/images/chevron-right.png') } alt="right"/>
                </p>
            </a>
            <div className="divider__vertical grid"></div>
            <a href="#" className="job-search__item">
                <img className="job-search__image" src={ require('../../assets/images/search.png') } alt="search"/>
                <p className="job-search__text">
                    직군별 연봉
                    <img className="job-search__chevron" src={ require('../../assets/images/chevron-right.png') } alt="right"/>
                </p>
            </a>
        </div>
    );
}

export default JobSearch;