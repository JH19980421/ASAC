import React, { useState } from "react";
import Modal from "./component/Modal";
import "./component/Modal.css";
import "./component/Modal2.css";
import "./App.css";
import SocialLink from "./component/SocialLink";
import Routing from "./Routing";
import NavBar from "./component/NavBar";
import Search from "./component/Search";

import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [modal, setModal] = useState(false);
  let [search, setSearch] = useState(false);

  return (
    <div>
      <BrowserRouter>
        {modal === true ? <Modal /> : null}
        {search === true ? <Search /> : null}
        <div class="page">
          <div class="header">
            <div class="header_main">
              <div class="header-box">
                <Link to="/">
                  <div class="header-box-left">
                    <div class="menubar">
                      <img
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=undefined&q=75"
                        alt="메뉴삼선바"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div class="menulogo">
                      <img
                        src="https://www.wantedlab.com/img/logo.png"
                        alt="메뉴로고"
                        style={{
                          width: "74.38px",
                          height: "20.8px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>
                </Link>
                <div className="headerNav">
                  <ul className="headerBar">
                    <NavBar name="채용" url="/incruit" />
                    <NavBar name="이벤트" />
                    <NavBar name="직군별 연봉" />
                    <NavBar name="이력서" />
                    <NavBar name="커뮤니티" />
                    <NavBar name="프리랜서" />
                    <NavBar name="AI 합격예측" />
                  </ul>
                </div>
                <div class="header-box-right">
                  <div class="header-box-right-box">
                    <div class="box">
                      <button
                        class="button_search"
                        onClick={() => {
                          setSearch(true);
                        }}
                      >
                        <svg
                          xmlns="https://www.w3.org/2000/svg"
                          xmlnsXlink="https://www.w3.org/1999/xlink"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                        >
                          <defs>
                            <path
                              id="qt2dnsql4a"
                              d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"
                            ></path>
                          </defs>
                          <g fill="none" fill-rule="evenodd">
                            <use
                              fill="#333"
                              fill-rule="nonzero"
                              stroke="#333"
                              stroke-width=".3"
                              xlinkHref="#qt2dnsql4a"
                            ></use>
                          </g>
                        </svg>
                      </button>
                    </div>
                    <div id="log">
                      <button
                        class="signUpButton"
                        type="button"
                        onClick={() => {
                          setModal(true);
                        }}
                      >
                        회원가입/로그인
                      </button>
                    </div>
                    <div
                      id="company"
                      data-attribute-id="gnb"
                      data-gnb-kind="forEmployers"
                    >
                      <a class="dashboardButton" href="/dashboard">
                        기업 서비스
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Routing />
          <div class="footer">
            <div class="footer_up">
              <div class="up_left">
                <div class="logo">
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
                    style={{ width: "110px", height: "39px" }}
                  />
                </div>
                <div class="info">
                  <a
                    href="https://www.wantedlab.com/"
                    class="a1"
                    aria-label=""
                    target="_blank"
                    rel="noopener noreferrer"
                    data-attribute-id="fnb"
                    data-fnb-kind="investment"
                  >
                    기업소개
                  </a>
                  <a
                    href="https://help.wanted.co.kr/hc/ko/articles/360035844551"
                    class="a2"
                    aria-label=""
                    target="_blank"
                    rel="noopener noreferrer"
                    data-attribute-id="fnb"
                    data-fnb-kind="termsOfUse"
                  >
                    이용약관
                  </a>
                  <a
                    href="https://www.wanted.co.kr/privacy"
                    class="a3"
                    aria-label=""
                    target="_blank"
                    rel="noopener noreferrer"
                    data-attribute-id="fnb"
                    data-fnb-kind="privacyPolicy"
                  >
                    개인정보 처리방침
                  </a>
                  <a
                    href="https://help.wanted.co.kr/hc/ko/"
                    class="a4"
                    aria-label=""
                    target="_blank"
                    rel="noopener noreferrer"
                    data-attribute-id="fnb"
                    data-fnb-kind="FAQ"
                  >
                    고객센터
                  </a>
                </div>
              </div>
              <div class="up_right">
                <div class="social_link">
                  <SocialLink
                    url="https://www.instagram.com/wantedjobs.kr/"
                    img="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_instagram.png&amp;w=20&amp;q=100"
                  />

                  <SocialLink
                    url="https://www.youtube.com/channel/UC0tGZ6MqieGG2m5lA5PeQsw"
                    img="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_youtube.png&amp;w=25&amp;q=100"
                  />

                  <SocialLink
                    url="https://www.facebook.com/wantedkr"
                    img="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_facebook.png&amp;w=20&amp;q=100"
                  />

                  <SocialLink
                    url="https://blog.naver.com/wantedlab"
                    img="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_blog.png&amp;w=20&amp;q=100"
                  />

                  <SocialLink
                    url="https://pf.kakao.com/_XqCIxl"
                    img="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_kakao.png&amp;w=19&amp;q=100"
                  />

                  <SocialLink
                    url="https://post.naver.com/my.nhn?memberNo=18284175"
                    img="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_post.png&amp;w=20&amp;q=100"
                  />

                  <SocialLink
                    url="https://apps.apple.com/kr/app/id1074569961"
                    img="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_apple.png&amp;w=17&amp;q=100"
                  />

                  <SocialLink
                    url="https://play.google.com/store/apps/details?id=com.wanted.android.wanted"
                    img="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_google.png&amp;w=17&amp;q=100"
                    alt="google"
                  />
                </div>
              </div>
            </div>
            <div class="footer_down">
              <div class="adress">
                <p>
                  (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로
                  300 롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147
                  <br />
                  유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호
                  | (국외) 서울동부-유-2020-2 | 사업자등록번호 : 299-86-00021 |
                  02-539-7118
                  <br />© Wantedlab, Inc.
                </p>
              </div>
              <div class="select_country">
                <div class="iconbox">
                  <img
                    class="countryicon"
                    src="https://static.wanted.co.kr/images/userweb/ico_KR.svg"
                    alt="country flag KR"
                    style={{ width: "24px", height: "17px" }}
                  />
                  <select class="country">
                    <option value="KR">한국 (한국어)</option>
                    <option value="JP">日本 (日本語)</option>
                    <option value="WW">Worldwide (English)</option>
                    <option value="SG">Singapore (English)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
