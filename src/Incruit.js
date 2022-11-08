import React, { useState } from "react";
import NavBar from "./component/NavBar";
import SocialLink from "./component/SocialLink";
import "./Main.css";
import "./Incruit.css";
import { useNavigate } from "react-router-dom";
import IncruitGallery from "./component/IncruitGallery";
import dummy from "./data/Gallery.json";
import Search from "./component/Search";
import "./component/Search.css";
import IncruitDetail from "./IncruitDetail";

const Incruit = () => {
  return (
    <div>
      <div class="Incruit_header">
        <div class="menu_box">
          <div class="menu">
            <div class="menu_title">
              <div class="menu_title_left">
                <span>개발</span>
                <button>
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                  >
                    <path
                      fill="#767676"
                      fill-rule="nonzero"
                      d="M2.28 3.22a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L6 6.94 2.28 3.22z"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="menu_title_middle1"></div>
              <div class="menu_title_middle2"></div>
              <div class="menu_title-right">
                <span>개발 전체</span>
                <button>
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                  >
                    <path
                      fill="#767676"
                      fill-rule="nonzero"
                      d="M2.28 3.22a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L6 6.94 2.28 3.22z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="menu_content">
              <div class="menu_content_top">
                <button id="menu_button_1">
                  <span id="menu_button_span1">지역</span>
                  <span id="menu_button_span2">서울</span>
                </button>
                <button id="menu_button_2">
                  <span id="menu_button_span1">경력</span>
                  <span id="menu_button_span2">신입</span>
                  <svg
                    width="8"
                    height="7"
                    viewBox="0 0 8 7"
                    fill="none"
                    xmlns="https://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z"
                      fill="#333333"
                    ></path>
                  </svg>
                </button>
                <button id="menu_button_3">
                  기술스택
                  <svg
                    width="8"
                    height="7"
                    viewBox="0 0 8 7"
                    fill="none"
                    xmlns="https://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z"
                      fill="#333333"
                    ></path>
                  </svg>
                </button>
                <button id="menu_button_4">
                  응답률순
                  <svg
                    width="8"
                    height="7"
                    viewBox="0 0 8 7"
                    fill="none"
                    xmlns="https://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z"
                      fill="#333333"
                    ></path>
                  </svg>
                </button>
              </div>
              <div>
                <hr class="menu_hr" />
              </div>
              <div class="menu_content_bottom">
                <button id="button_menu_left">
                  <span class="button_menu_left_span">
                    <svg class="button_menu_left_svg" viewBox="0 0 18 18">
                      <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
                    </svg>
                  </span>
                </button>
                <button>
                  연봉이 최고의 복지
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                    alt="원숭이"
                  />
                </button>
                <button>
                  연봉이 최고의 복지
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                    alt="원숭이"
                  />
                </button>
                <button>
                  연봉이 최고의 복지
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                    alt="원숭이"
                  />
                </button>
                <button>
                  연봉이 최고의 복지
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                    alt="원숭이"
                  />
                </button>
                <button>
                  연봉이 최고의 복지
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                    alt="원숭이"
                  />
                </button>
                <button>
                  연봉이 최고의 복지
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                    alt="원숭이"
                  />
                </button>
                <button id="button_menu_right">
                  <span class="button_menu_right_span">
                    <svg class="button_menu_right_svg" viewBox="0 0 18 18">
                      <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="Incruit_main">
        <div class="main_box">
          <div class="bookmark_box">
            <button>
              <svg
                width="13"
                height="17"
                viewBox="0 0 13 17"
                style={{ color: "rgb(51, 102, 255)" }}
              >
                <defs>
                  <path
                    id="bookmarkIconFill"
                    d="M6.25 13.21L.905 16.22c-.403.228-.905-.06-.905-.517V.596C0 .267.27 0 .605 0h11.29c.334 0 .605.267.605.596v15.107c0 .458-.502.745-.905.518L6.25 13.209z"
                  ></path>
                </defs>
                <g fill="none" fill-rule="evenodd" transform="translate(.188)">
                  <use fill="currentColor" xlinkHref="#bookmarkIconFill"></use>
                </g>
              </svg>
              <span>북마크 모아보기</span>
              <svg
                width="10"
                height="16"
                style={{ color: "#3366FF" }}
                viewBox="0 0 12 12"
              >
                <path
                  fill="currentColor"
                  d="M4.22 9.72a.75.75 0 001.06 1.06l4.25-4.25a.75.75 0 000-1.06L5.28 1.22a.75.75 0 00-1.06 1.06L7.94 6 4.22 9.72z"
                ></path>
              </svg>
            </button>
          </div>
          <h3 class="bookmark_title">적극 채용 중인 회사</h3>
          <div class="bookmark_content">
            <div class="bookmark_content_box">
              <a
                href="/company/2979"
                class="Featured_sliderItem__FY8yb"
                aria-label="featured company card link"
                data-attribute-id="company__click"
                data-job-category-id="518"
                data-job-category="IT"
                data-job-role-id="all"
                data-job-role="all"
                data-company-id="2979"
                data-company-name="콜론디(심쿵)"
                data-ad-id="39473"
                data-marketing-case="topPicks"
              >
                <div class="bookmark_up">
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F10785%2Fxyb93wefrghj3ppy__400_400.png&w=400&q=75"
                    alt="back_img"
                  />
                </div>
                <div class="bookmark_center">
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.ab46764a.png&w=100&q=75"
                    alt="middle_img"
                  />
                </div>
                <div class="bookmark_down">
                  <h4>로민</h4>
                  <h5>11개 포지션</h5>
                </div>
              </a>
            </div>
            <div class="bookmark_content_box">
              <a
                href="/company/2979"
                class="Featured_sliderItem__FY8yb"
                aria-label="featured company card link"
                data-attribute-id="company__click"
                data-job-category-id="518"
                data-job-category="IT"
                data-job-role-id="all"
                data-job-role="all"
                data-company-id="2979"
                data-company-name="콜론디(심쿵)"
                data-ad-id="39473"
                data-marketing-case="topPicks"
              >
                <div class="bookmark_up">
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F10785%2Fxyb93wefrghj3ppy__400_400.png&w=400&q=75"
                    alt="back_img"
                  />
                </div>
                <div class="bookmark_center">
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.ab46764a.png&w=100&q=75"
                    alt="middle_img"
                  />
                </div>
                <div class="bookmark_down">
                  <h4>로민</h4>
                  <h5>11개 포지션</h5>
                </div>
              </a>
            </div>
            <div class="bookmark_content_box">
              <a
                href="/company/2979"
                class="Featured_sliderItem__FY8yb"
                aria-label="featured company card link"
                data-attribute-id="company__click"
                data-job-category-id="518"
                data-job-category="IT"
                data-job-role-id="all"
                data-job-role="all"
                data-company-id="2979"
                data-company-name="콜론디(심쿵)"
                data-ad-id="39473"
                data-marketing-case="topPicks"
              >
                <div class="bookmark_up">
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F10785%2Fxyb93wefrghj3ppy__400_400.png&w=400&q=75"
                    alt="back_img"
                  />
                </div>
                <div class="bookmark_center">
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.ab46764a.png&w=100&q=75"
                    alt="middle_img"
                  />
                </div>
                <div class="bookmark_down">
                  <h4>로민</h4>
                  <h5>11개 포지션</h5>
                </div>
              </a>
            </div>
            <div class="bookmark_content_box">
              <a
                href="/company/2979"
                class="Featured_sliderItem__FY8yb"
                aria-label="featured company card link"
                data-attribute-id="company__click"
                data-job-category-id="518"
                data-job-category="IT"
                data-job-role-id="all"
                data-job-role="all"
                data-company-id="2979"
                data-company-name="콜론디(심쿵)"
                data-ad-id="39473"
                data-marketing-case="topPicks"
              >
                <div class="bookmark_up">
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F10785%2Fxyb93wefrghj3ppy__400_400.png&w=400&q=75"
                    alt="back_img"
                  />
                </div>
                <div class="bookmark_center">
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.ab46764a.png&w=100&q=75"
                    alt="middle_img"
                  />
                </div>
                <div class="bookmark_down">
                  <h4>로민</h4>
                  <h5>11개 포지션</h5>
                </div>
              </a>
            </div>
            <div class="bookmark_content_box">
              <a
                href="/company/2979"
                class="Featured_sliderItem__FY8yb"
                aria-label="featured company card link"
                data-attribute-id="company__click"
                data-job-category-id="518"
                data-job-category="IT"
                data-job-role-id="all"
                data-job-role="all"
                data-company-id="2979"
                data-company-name="콜론디(심쿵)"
                data-ad-id="39473"
                data-marketing-case="topPicks"
              >
                <div class="bookmark_up">
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F10785%2Fxyb93wefrghj3ppy__400_400.png&w=400&q=75"
                    alt="back_img"
                  />
                </div>
                <div class="bookmark_center">
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.ab46764a.png&w=100&q=75"
                    alt="middle_img"
                  />
                </div>
                <div class="bookmark_down">
                  <h4>로민</h4>
                  <h5>11개 포지션</h5>
                </div>
              </a>
            </div>
          </div>
          <div class="gallery">
            <ul class="gallery_ul">
              <li class="gallery_list">
                {dummy.Gallery.map((list) => (
                  <IncruitGallery
                    num={list.id}
                    url={list.url}
                    img={list.img}
                    text1={list.text1}
                    text2={list.text2}
                    text3={list.text3}
                    text4={list.text4}
                    text5={list.text5}
                  />
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Incruit;
