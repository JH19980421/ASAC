import { Link } from "react-router-dom";

import '../css/normalize.css';
import '../css/common.css';
import '../css/header.css';
import Recruiting from "../pages/recruiting";

function Header() {
    return (
        <header>
            <img className="menu" src="/images/menu.png" alt="menu"/>
            <Link to="..">
                <img className="logo" src="https://www.wantedlab.com/img/logo.png" alt="wanted"/>
            </Link>

            <ul className="category">
                <li><Link to="/recruting">채용</Link></li>
                <li><a href="./loading.html">로딩창</a></li>
                <li><a href="#">직군별 연봉</a></li>
                <li><a href="#">이력서</a></li>
                <li>
                    <a href="#">커뮤니티</a>
                    <em className="badge--new">New</em>
                </li>
                <li><a href="#">프리랜서</a></li>
                <li>
                    <a href="#">AI 합격예측</a>
                    <em className="badge--new">Beta</em>
                </li>
            </ul>

            <div className="header__right">
                <a href="#">
                    <img className="search" src="/images/search.png" alt="search"/>
                </a>
                <div className="login">
                    회원가입/로그인
                </div>
                <p className="divider__vertical"></p>
        
                <div className="header__organization">기업 서비스</div>            
            </div>
        </header>
    );
}

export default Header;