import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../css/recruiting/recruiting-list.css";

import * as Formatting from "../../utils/formatting";

const recruitingList = require('../../recruiting-list.json');
let recruitingListForDisplay = [];


function RecruitingList() {

    // useEffect(() => {
    //     console.log('input', searchInput);

    //     if(!searchInput) {
    //         recruitingListForDisplay = recruitingList;
    //     } else {
    //         recruitingListForDisplay = recruitingList.filter(function (element) {
    //             return element.title.includes(searchInput);
    //         });
    //     }
    //     console.log('filtered', recruitingListForDisplay);
        
    // }, []);


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