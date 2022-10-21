import "../css/job-search.css";

function JobSearch() {
    return (
        <div class="job-search__container">
            <a href="#" class="job-search__item">
                <img class="job-search__image" src="/images/search.png" alt="search"/>
                <p class="job-search__text">
                    채용공고
                    <img class="job-search__chevron" src="/images/chevron-right.png" alt="right"/>
                </p>
            </a>
            <div class="divider__vertical grid"></div>
            <a href="#" class="job-search__item">
                <img class="job-search__image" src="/images/search.png" alt="search"/>
                <p class="job-search__text">
                    내 프로필
                    <img class="job-search__chevron" src="/images/chevron-right.png" alt="right"/>
                </p>
            </a>
            <div class="divider__vertical grid"></div>
            <a href="#" class="job-search__item">
                <img class="job-search__image" src="/images/search.png" alt="search"/>
                <p class="job-search__text">
                    매치업
                    <img class="job-search__chevron" src="/images/chevron-right.png" alt="right"/>
                </p>
            </a>
            <div class="divider__vertical grid"></div>
            <a href="#" class="job-search__item">
                <img class="job-search__image" src="/images/search.png" alt="search"/>
                <p class="job-search__text">
                    직군별 연봉
                    <img class="job-search__chevron" src="/images/chevron-right.png" alt="right"/>
                </p>
            </a>
        </div>
    );
}

export default JobSearch;