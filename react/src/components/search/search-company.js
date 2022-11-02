import "../../css/search/search-company.css";

function SearchCompany() {
    const companyCount = 1;

    return (
        <div className="search-company__container">
            <h2>회사 &nbsp;{companyCount}</h2>
            <section className="search-company__list">
                <div className="search-company__item">
                    <div>
                        <img src="https://static.wanted.co.kr/images/wdes/0_5.e5146fee.jpg"/>
                        <div className="search-company__item--info">
                            <h3>두부랩</h3>
                            <p className="search-company__tag">IT, 컨텐츠</p>
                        </div>
                    </div>
                    <button>팔로우</button>
                </div>
                <div className="search-company__item">
                    <div>
                        <img src="https://static.wanted.co.kr/images/wdes/0_5.e5146fee.jpg"/>
                        <div className="search-company__item--info">
                            <h3>두부랩</h3>
                            <p className="search-company__tag">IT, 컨텐츠</p>
                        </div>
                    </div>
                    <button>팔로우</button>
                </div>
            </section>
        </div>
    )
}

export default SearchCompany;