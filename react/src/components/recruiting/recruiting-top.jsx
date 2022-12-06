import "../../css/recruiting/recruiting-top.css";

const recruitingTopItems = require("../../datas/recruiting-top.json");

function RecruitingTop() {
    return (
        <div className="recruiting-top">
            <h2>적극 채용중인 회사</h2>

            <div className="header-card">
                {recruitingTopItems.map((item) => (
                    <div className="header-card-item" key={item.id}>
                        <img src={item.imageUrl} alt="card" />
                        <img id="logo" src={item.logoImageUrl} alt="logo" />
                        <p className="header-card-title">{item.title}</p>
                        <p className="header-card-position">
                            {item.position}개 포지션
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecruitingTop;
