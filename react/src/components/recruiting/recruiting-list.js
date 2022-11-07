import { Link } from "react-router-dom";
import "../../css/recruiting/recruiting-list.css";

import * as Formatting from "../../utils/formatting";

import recruitingListAll from "../../recruiting-list.json";

function RecruitingList(props) {
    const recruitingList = props.length? props.recruitingList: recruitingListAll;

    return (
        <div className="card-container">
            {
                recruitingList.map((item) => (
                    <Link to={`/job-detail/${item.id}`}>
                        <div className="card-item" key={item.id}>
                            <img id="bookmark-outline" src={ require('../../assets/images/bookmark-outline.png') } alt="bookmark"/>
                            <img src={item.imageUrl} alt="image"/>
                            <p className="card-title">{item.title}</p>
                            <p>{item.company}</p>
                            <div className="card-badge">{item.badge}</div>
                            <p className="card-region">{item.region}</p>
                            <p>채용보상금 {Formatting.priceFormatting(item.reward)}원</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default RecruitingList;