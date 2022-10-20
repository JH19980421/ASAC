import '../css/header.css';

function Header() {
    return (
        <header>
            <img class="menu" src="./assets/images/menu.png" alt="menu"/>
            <a href="./index.html">
                <img class="logo" src="https://www.wantedlab.com/img/logo.png" alt="wanted"/>
            </a>
            
            <ul class="category">
                <li><a href="./recruiting.html">채용</a></li>
                <li><a href="./loading.html">로딩창</a></li>
                <li><a href="#">직군별 연봉</a></li>
                <li><a href="#">이력서</a></li>
                <li>
                    <a href="#">커뮤니티</a>
                    <em class="new-badge">New</em>
                </li>
                <li><a href="#">프리랜서</a></li>
                <li>
                    <a href="#">AI 합격예측</a>
                    <em class="new-badge">Beta</em>
                </li>
            </ul>

            <div class="header-right">
                <a href="#">
                    <img class="search" src="./assets/images/search.png" alt="search"/>
                </a>
                <div class="login">
                    회원가입/로그인
                </div>
                <p class="divider-column"></p>
        
                <div class="organization">기업 서비스</div>            
            </div>
        </header>
    );
}

export default Header;