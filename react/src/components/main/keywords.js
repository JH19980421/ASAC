import '../../css/main/keyword.css';
const keywordItems = require('../../keywords.json');

function Keywords() {
    return (
        <div className="keywords__container">
            <div className="keywords__button--left">
                <button>
                    <img src={ require('../../assets/images/chevron-left.png') } alt="left"/>
                </button>
            </div>
            <div className="keywords__content">
                {
                    keywordItems.map((item) => (
                        <button>{item.keyword}</button>
                    ))
                }
            </div>
            <div className="keywords__button--right">
                <button id="right"><img src={ require('../../assets/images/chevron-right.png') } alt="right"/></button>
                <button><img id="more" src={ require('../../assets/images/more.png') } alt="more"/></button>
            </div>
        </div>
    )
}

export default Keywords;