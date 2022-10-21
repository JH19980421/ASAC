import '../css/keyword.css';

function Keywords() {
    return (
        <div className="keywords__container">
            <div className="keywords__button--left">
                <button>
                    <img src="/images/chevron-left.png" alt="left"/>
                </button>
            </div>
            <div className="keywords__content">
                <button>회사생활</button>
                <button>취업/이직</button>
                <button>조직문화</button>
                <button>인간관계</button>
                <button>라이프스타일</button>
                <button>리더십</button>
                <button>IT/기술</button>
                <button>커리어고민</button>
                <button>콘텐츠 제작</button>
                <button>회사생활</button>
                <button>취업/이직</button>
                <button>조직문화</button>
                <button>인간관계</button>
                <button>라이프스타일</button>
                <button>리더십</button>
                <button>IT/기술</button>
                <button>커리어고민</button>
                <button>콘텐츠 제작</button>
            </div>
            <div className="keywords__button--right">
                <button id="right"><img src="/images/chevron-right.png" alt="right"/></button>
                <button><img id="more" src="/images/more.png" alt="more"/></button>
            </div>
        </div>
    )
}

export default Keywords;