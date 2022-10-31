import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../css/recruiting/recruiting-list.css";

const recruitingList = require('../../recruiting-list.json');
let recruitingListForDisplay = [];

function RecruitingList(props) {
    const { searchInput } = props;

    useEffect(() => {
        console.log('input', searchInput);

        if(!searchInput) {
            recruitingListForDisplay = recruitingList;
        } else {
            recruitingListForDisplay = recruitingList.filter(function (element) {
                return element.title.includes(searchInput);
            });
        }
        console.log('filtered', recruitingListForDisplay);
        
    }, []);


    return (
        <div className="card-container">
            {
                recruitingListForDisplay.map((item) => (
                    <Link to={`/job-detail`}>
                        <div className="card-item" key={item.id}>
                            <img id="bookmark-outline" src={ require('../../assets/images/bookmark-outline.png') } alt="bookmark"/>
                            <img src={item.imageUrl} alt="image"/>
                            <p className="card-title">{item.title}</p>
                            <p>{item.company}</p>
                            <div className="card-badge">{item.badge}</div>
                            <p className="card-region">{item.region}</p>
                            <p>채용보상금 {item.reward}원</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default RecruitingList;