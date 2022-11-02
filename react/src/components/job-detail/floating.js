import "../../css/job-detail/floating.css";
import * as Formatting from "../../utils/formatting";

function Floating() {
    return (
        <div className="floating">
            <div className="share-img-container">
                <img className="share-img" src={ require('../../assets/images/share.png') } alt="share"/>
            </div>
            <p className="floating-header">채용보상금</p>
            <div className="bonus-container">
                <div className="share-bonus">
                    <p>추천인</p>
                    <p>{Formatting.priceFormatting(500000)}원</p>
                </div>
                <div className="share-bonus">
                    <p>추천인</p>
                    <p>{Formatting.priceFormatting(500000)}원</p>
                </div>  
            </div>
            
            <button id="bookmark-outline" className="floating-button">
                <img src={ require('../../assets/images/bookmark-outline.png') } alt="bookmark"/>북마크하기
            </button>
            <button id="submit" className="floating-button">지원하기</button>

            <div className="floating-bottom">
                <div className="likes">
                    <img src={ require('../../assets/images/heart.png') } alt="heart"/>
                    <p className="likes-count">9</p>
                </div>
                <ul className="profile-container">
                    <li className="profile-item"><img src="https://lh3.googleusercontent.com/a/ALm5wu2bYv18aK6_ahAXODnanhRHwCfEqvoUbqKJCBKA=s96-c" alt="profile"/></li>
                    <li className="profile-item"><img src="https://k.kakaocdn.net/dn/chOGWm/btrJ7se3l3K/eeQiZuGgc7rBHKj9RBRFk1/img_110x110.jpg" alt="profile"/></li>
                    <li className="profile-item"><img src="https://lh3.googleusercontent.com/a/AATXAJyptvBO9pOC55mAwO0IA3-llT_OIJ3QyPcS1-DN=s96-c" alt="profile"/></li>                
                </ul>
            </div>
        </div>
    )

}

export default Floating;