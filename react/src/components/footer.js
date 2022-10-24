import '../css/normalize.css';
import '../css/common.css';
import '../css/footer.css';

function Footer() {
    return (
        <footer>
            <div className="footer__top">
                <img className="logo--full" src={ require('../assets/images/logo-full.png') } alt="logo"/>

                <ul className="footer category">
                    <li><a href="#">기업소개</a></li>
                    <li><a href="#">이용약관</a></li>
                    <li><a href="#">개인정보 처리방침</a></li>
                    <li><a href="#">고객센터</a></li>
                </ul>

                <div className="sns__container">
                    <img className="sns" src={ require('../assets/images/instagram.png') } alt="instagram"/>
                    <img className="sns" src={ require('../assets/images/instagram.png') } alt="instagram"/>
                    <img className="sns" src={ require('../assets/images/instagram.png') } alt="instagram"/>
                    <img className="sns" src={ require('../assets/images/instagram.png') } alt="instagram"/>
                    <img className="sns" src={ require('../assets/images/instagram.png') } alt="instagram"/>
                    <img className="sns" src={ require('../assets/images/instagram.png') } alt="instagram"/>
                    <img className="sns" src={ require('../assets/images/instagram.png') } alt="instagram"/>
                    <img className="sns" src={ require('../assets/images/instagram.png') } alt="instagram"/>
                </div>
            </div>

            <div className="footer__bottom">
                <p className="footer__info">
                    (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300 롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147<br/>
                    유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 | (국외) 서울동부-유-2020-2 | 사업자등록번호 : 299-86-00021 | 02-539-7118<br/>
                    © Wantedlab, Inc.
                </p>

                <select className="footer__nation">
                    <option value="kr">🇰🇷 한국 (한국어)</option>
                    <option value="jp">🇯🇵 일본 (일본어)</option>
                    <option value="world">🌐 Worldwide (English)</option>
                    <option value="sg">🇸🇬 Singapore (English)</option>
                </select>
            </div>
        </footer>
    );
}

export default Footer;