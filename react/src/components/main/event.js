import "../../css/main/event.css";

function Event() {
    return (
        <div className="container__event">
            <div className="event__card">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2422%2Ffeb067d4.jpg&w=1200&q=100" alt="event"/>
                <div className="event__badge-container">
                    <div className="event__badge">아티클</div>
                </div>
                <p className="event__title">기업의 성공을 리드하는 번개장터 마케터의 데이터</p>
            </div>
            <div className="event__card">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2422%2Ffeb067d4.jpg&w=1200&q=100" alt="event"/>
                <div className="event__badge-container">
                    <div className="event__badge">아티클</div>
                    <div className="event__badge">아티클</div>
                </div>
                <p className="event__title">기업의 성공을 리드하는 번개장터 마케터의 데이터</p>
            </div>
        </div>
    );
}

export default Event;