import "../css/marketing-button.css";

function MarketingButton() {
    return (
        <div className="marketing">
            <button className="marketing-button">
                무제한으로 즐기는 700여편의 커리어 콘텐츠
                <span className="plus">&nbsp;wanted&nbsp;+</span>
                <img className="marketing-chevron" src="/images/chevron-right.png" alt="right"/>
            </button>
        </div>
    );
}

export default MarketingButton;