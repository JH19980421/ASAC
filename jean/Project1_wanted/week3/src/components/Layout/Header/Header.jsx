import SerachSVG from "./Search"

const Header = () => {
    return (
      <header>
        <div class="mainbar">
            <div class="left">
                <div class="dropdown">
                    <span class="dropbtn">  <img class="bar" src={require("../../../images/bar.png")}/></span>
                    <div class="dropdown-content">
                      <a href="#">직군전체</a> <a href="#">개발</a> <a href="#">경영</a> <a href="#">디자인</a> <a href="#">영업</a> <a href="#">게임제작</a> <a href="#">미디어</a> <a href="#">금융</a> <a href="#">직군전체</a> <a href="#">개발</a> <a href="#">경영</a> <a href="#">디자인</a> <a href="#">영업</a> <a href="#">게임제작</a> <a href="#">미디어</a> <a href="#">금융</a>
                    </div>
                  </div> 
                  {/* <img src={ require('./images/logo.png') } /> */}
                <a href="index.html">
                    <img class="logo" src={ require('../../../images/logo.png') } />
                </a>
            </div>

            <div class="center">
                <ul>
                    <li><a href="recruit.html">채용</a></li>
                    <li><a href="/">이벤트</a></li>
                    <li><a href="/">직군별 연봉</a></li>
                    <li><a href="/">이력서</a></li>
                    <li><a href="/" class="" aria-label="">커뮤니티<em><svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11"> <g fill="none" fill-rule="evenodd" font-family="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo" font-size="9" font-weight="500"> <g fill="#36F"> <g> <g> <g> <g> <g> <g><text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)"> <tspan x="0" y="8">New</tspan> </text></g> </g> </g> </g> </g> </g> </g> </g> </svg></em></a></li>
                    <li><a href="/">프리랜서</a></li>
                    <li><a href="/aiscore/resume" class="" aria-label="">AI 합격예측<span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11"> <g fill="none" fill-rule="evenodd" font-family="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo" font-size="9" font-weight="500"> <g fill="#36F"> <g> <g> <g> <g> <g> <g><text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)"> <tspan x="0" y="8">Beta</tspan> </text></g> </g> </g> </g> </g> </g> </g> </g> </svg></span></a></li>
                </ul>
            </div>

            <div class="right">
                <ul>
                    {/* /<li><a href="/"><svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 18 18"> <defs> <path id="qt2dnsql4a" d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"> </path> </defs> <g fill="none" fill-rule="evenodd"> <use fill="#333" fill-rule="nonzero" stroke="#333" stroke-width=".3" xlink:href="#qt2dnsql4a"></use> </g> </svg></a></li> */}
                    <li><a id="btn-modal">{SerachSVG()}</a></li>
                    <li><a id="btn-modal">회원가입/로그인</a></li>
                    <li id="vborder"></li>
                    <li><a class="dashboardButton" href="/">기업 서비스</a></li>
                </ul>
            </div>
        </div>
      </header>
    )
  }
  
  export default Header