import { Link } from "react-router-dom";

import '../css/normalize.css';
import '../css/common.css';
import '../css/header.css';

function Header() {
    return (
        <header>
            <img className="menu" src={ require('../assets/images/menu.png') } alt="menu"/>
            <Link to="..">
                <img className="logo" src="https://www.wantedlab.com/img/logo.png" alt="wanted"/>
            </Link>

            <ul className="category">
                <li><Link to="/recruting">채용</Link></li>
                <li><Link to="./loading.html">로딩창</Link></li>
                <li><Link to="/">직군별 연봉</Link></li>
                <li><Link to="/">이력서</Link></li>
                <li>
                    <Link to="/">커뮤니티</Link>
                    <em className="badge--new">New</em>
                </li>
                <li><Link to="/">프리랜서</Link></li>
                <li>
                    <Link to="/">AI 합격예측</Link>
                    <em className="badge--new">Beta</em>
                </li>
            </ul>

            <div className="header__right">
                <Link to="/">
                    <img className="search" src={ require('../assets/images/search.png') } alt="search"/>
                </Link>
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