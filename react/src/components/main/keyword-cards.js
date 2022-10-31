import "../../css/main/keyword-cards.css";
const keywordCard = require("../../keyword-card.json");

function KeywordCards() {

    return (
        <div className="keywords__card-detail">
            {
                keywordCard.map((item, idx) => (
                    <div className="keywords__card" key={item.id}>
                        <img src={item.imageUrl} alt="image"/>
                        <p className="keywords__card--title">{item.title} {item.id}</p>
                        <p className="keywords__card--content">
                            {item.content}
                        </p>
                        <div className="keywords__card--badge">
                            <img src={item.badgeUrl} alt="badge"/>
                            <p className="keywords__card--badge-name">{item.badgeName}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default KeywordCards;