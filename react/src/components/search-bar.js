import "../css/search-bar.css";
import "../css/common.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function SearchBar(props) {
    const navigate = useNavigate();

    const [showHider, setShowHider] = useState(true);

    const searchBar = useRef();

    const onClickHider = () => {
        setShowHider(!showHider);
        closeSearchBar();
    }

    const closeSearchBar = () => {
        props.showSearchBar(false);
    }

    const onPressEnter = (e) => {
        if(e.keyCode === 13) {
            props.showSearchBar(false);
            navigate(`/search?query=${e.target.value}`);
        }
    }

    return (
        <>
            <div 
                className={showHider? "hider-visible": "hider"} 
                onClick={onClickHider}
            ></div>
            <div className="searchbar__container" onClick={closeSearchBar}>
                <div className="searchbar__search">
                    <img src={ require('../../src/assets/images/search.png') } alt="search" />
                    <input
                        ref={searchBar}
                        type="text" 
                        placeholder="#태그, 회사, 포지션 검색"
                        onKeyDown={(e) => onPressEnter(e)}
                        />
                </div>

                <div className="searchbar__label">
                    <p>추천태그로 검색해보세요</p>
                    <Link to="/recruting">
                        <p className="searchbar__label--gray">기업태그 홈 이동하기 &gt;</p>
                    </Link>
                </div>

                <div className="empty-space__10" onClick={closeSearchBar}></div>

                <div className="searchbar__tags">
                    <div>#리프레시휴가</div>
                    <div>#퇴사율5%이하</div>
                    <div>#샐러드</div>
                    <div>#연봉상위2~5%</div>
                    <div>#커피</div>
                </div>

                <div className="empty-space__50" onClick={closeSearchBar}></div>
            </div>
        </>
    )
}

export default SearchBar;