import "../css/recruiting-list.css";

const recruitingList = require('../recruiting-list.json');

function RecruitingList() {

    return (
        <div className="card-container">
            {
                recruitingList.map((item) => (
                    <div className="card-item">
                        <img id="bookmark-outline" src={ require('../assets/images/bookmark-outline.png') } alt="bookmark"/>
                        <img src={item.imageUrl} alt="image"/>
                        <p className="card-title">{item.title}</p>
                        <p>{item.company}</p>
                        <div className="card-badge">{item.badge}</div>
                        <p className="card-region">{item.region}</p>
                        <p>채용보상금 {item.reward}원</p>
                    </div>
                ))
            }
        </div>
    )
}

export default RecruitingList;