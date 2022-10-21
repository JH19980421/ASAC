import "../css/marketing-banner.css";

function MarketingBanner() {
    return (
        <div class="subscription__container">
            <div>
                <p class="text-big">
                    <span class="text-big-bold">wanted+</span>구독해야 하는 이유
                </p>
                <p class="subscription__detail">구독자의 서류 합격률이 비구독자보다 1.5배 높아요!</p>
                <button class="subscription__button">첫 구독 0원 신청하기</button>
            </div>
            <img class="subscription__image" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Ffirst-wantedplus-subscribe.png&w=800&q=90" alt="subscription"/>
        </div>
    )
}

export default MarketingBanner;