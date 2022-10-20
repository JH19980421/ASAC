import '../css/normalize.css';
import '../css/common.css';
import '../css/header.css';

function Header() {
    return (
        <header>
            <img className="menu" src="/images/menu.png" alt="menu"/>
            <a href="./index.html">
                <img className="logo" src="https://www.wantedlab.com/img/logo.png" alt="wanted"/>
            </a>
            
            <ul className="category">
                <li><a href="./recruiting.html">채용</a></li>
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