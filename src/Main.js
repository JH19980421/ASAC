import React from "react";
import "./Main.css";
import InsightButton from "./component/InsightButton";
import Video from "./component/Video";
import Main2TopTitle from "./component/Main2TopTitle";
import Main3Gallery from "./component/Main3Gallery";
import Main4BottomBox from "./component/Main4BottomBox";
import GalleryContent from "./component/GalleryContent";

const Main = () => {
  return (
    <div>
      <div class="main">
        <div class="main1">
          <div class="banner">
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1851%2F62d57330.thumb_1006_280.jpg&w=1060&q=100"
              alt="메인배너사진"
              style={{ width: "1060px", height: "300px", objectfit: "cover" }}
            />
            <br />
            <br />
          </div>

          <section class="section_insight">
            <div class="insight_box">
              <h2 class="insight_h2">나에게 필요한 커리어 인사이트 </h2>
              <button class="insight_button_svg">
                <svg width="24" height="24" viewBox="0 0 17 17">
                  <defs>
                    <filter id="bfoh3u0w3a">
                      <feColorMatrix
                        in="SourceGraphic"
                        values="0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 1.000000 0"
                      ></feColorMatrix>
                    </filter>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <g>
                      <g>
                        <g transform="translate(-1080 -374) translate(1080 374)">
                          <g>
                            <path
                              stroke="#999"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.2"
                              d="M9.421 13.334c-.736.277-1.535.43-2.368.43-3.706 0-6.71-3.005-6.71-6.711 0-3.707 3.004-6.71 6.71-6.71 1.853 0 3.53.75 4.745 1.965 1.214 1.214 1.965 2.892 1.965 4.745 0 1.853-.75 3.53-1.965 4.745"
                              transform="translate(1 1)"
                            ></path>
                            <path
                              fill="#999"
                              d="M6.382 10.408c0-.371.3-.671.67-.671.371 0 .672.3.672.67 0 .372-.3.672-.671.672-.37 0-.671-.3-.671-.671"
                              transform="translate(1 1) rotate(-180 7.053 10.408)"
                            ></path>
                            <path
                              stroke="#999"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.2"
                              d="M5.04 5.655c0-1.08.901-1.958 2.013-1.958 1.11 0 2.013.877 2.013 1.958 0 1.08-1.007 1.957-2.013 1.957v.783"
                              transform="translate(1 1)"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
            <div class="insight_button">
              <InsightButton name="리더쉽" />
              <InsightButton name="인간관계" />
              <InsightButton name="조직문화" />
              <InsightButton name="라이프스타일" />
              <InsightButton name="커리어 고민" />
              <InsightButton name="취업/이직" />
              <InsightButton name="회사생활" />
              <InsightButton name="IT/기술" />
              <InsightButton name="디자인" />
              <div>
                <button type="button" class="circle_button">
                  <span class="SvgIcon_SvgIcon__root__8vwon">
                    <svg
                      class="SvgIcon_SvgIcon__root__svg__DKYBi"
                      id="svg_button"
                      style={{ fill: "#888" }}
                      viewBox="0 0 18 18"
                    >
                      <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                    </svg>
                  </span>
                </button>
              </div>
              <div>
                <button class="InterestTagSlide_InterestTagSlide__more__v2_Y1">
                  <svg id="svg-dot" width="16" height="3" viewBox="0 0 16 3">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2 0C2.828 0 3.5 0.672 3.5 1.5C3.5 2.328 2.828 3 2 3C1.172 3 0.5 2.328 0.5 1.5C0.5 0.672 1.172 0 2 0ZM8 0C8.828 0 9.5 0.672 9.5 1.5C9.5 2.328 8.828 3 8 3C7.172 3 6.5 2.328 6.5 1.5C6.5 0.672 7.172 0 8 0ZM14 0C14.828 0 15.5 0.672 15.5 1.5C15.5 2.328 14.828 3 14 3C13.172 3 12.5 2.328 12.5 1.5C12.5 0.672 13.172 0 14 0Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </section>

          <div class="insight">
            <ul class="insight_video">
              <Video
                VideoAddress="https://brunch.co.kr/@97449a64110b4d5/9"
                ImgAddress="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2FdFGD%2Fimage%2F1MRuCokBnkptJcDoKnOD9p1ZHOs.PNG&amp;w=500&amp;q=75"
                P1="비건(Vegan)제품, 주류가 될 수 있을까?"
                P2="못 보던 마요네즈가 냉장고에 있다. 비건 마요네즈. 아내는 달걀 알러지가 있는 딸을 위해 구매했다고 했습니다. “달걀이 안 들어가 있고, 식물성 재료로 만들어져서 건강한 거야”. “앞으로 비건 제품 위주로 식재료를 바꿀 거야” 최근 커머스 업계의 주요 전략으로 비건(Vegan) 제품이 다양하게 등장하고 있습니다. 동물성 식품의 섭취는 물론, 동물성 제품과"
                Img2Adress="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&amp;w=60&amp;q=90"
                P3="사사김"
              />
              <Video
                VideoAddress="https://brunch.co.kr/@97449a64110b4d5/9"
                ImgAddress="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2FdFGD%2Fimage%2F1MRuCokBnkptJcDoKnOD9p1ZHOs.PNG&amp;w=500&amp;q=75"
                P1="비건(Vegan)제품, 주류가 될 수 있을까?"
                P2="못 보던 마요네즈가 냉장고에 있다. 비건 마요네즈. 아내는 달걀 알러지가 있는 딸을 위해 구매했다고 했습니다. “달걀이 안 들어가 있고, 식물성 재료로 만들어져서 건강한 거야”. “앞으로 비건 제품 위주로 식재료를 바꿀 거야” 최근 커머스 업계의 주요 전략으로 비건(Vegan) 제품이 다양하게 등장하고 있습니다. 동물성 식품의 섭취는 물론, 동물성 제품과"
                Img2Adress="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&amp;w=60&amp;q=90"
                P3="사사김"
              />
              <Video
                VideoAddress="https://brunch.co.kr/@97449a64110b4d5/9"
                ImgAddress="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2FdFGD%2Fimage%2F1MRuCokBnkptJcDoKnOD9p1ZHOs.PNG&amp;w=500&amp;q=75"
                P1="비건(Vegan)제품, 주류가 될 수 있을까?"
                P2="못 보던 마요네즈가 냉장고에 있다. 비건 마요네즈. 아내는 달걀 알러지가 있는 딸을 위해 구매했다고 했습니다. “달걀이 안 들어가 있고, 식물성 재료로 만들어져서 건강한 거야”. “앞으로 비건 제품 위주로 식재료를 바꿀 거야” 최근 커머스 업계의 주요 전략으로 비건(Vegan) 제품이 다양하게 등장하고 있습니다. 동물성 식품의 섭취는 물론, 동물성 제품과"
                Img2Adress="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&amp;w=60&amp;q=90"
                P3="사사김"
              />
              <Video
                VideoAddress="https://brunch.co.kr/@97449a64110b4d5/9"
                ImgAddress="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2FdFGD%2Fimage%2F1MRuCokBnkptJcDoKnOD9p1ZHOs.PNG&amp;w=500&amp;q=75"
                P1="비건(Vegan)제품, 주류가 될 수 있을까?"
                P2="못 보던 마요네즈가 냉장고에 있다. 비건 마요네즈. 아내는 달걀 알러지가 있는 딸을 위해 구매했다고 했습니다. “달걀이 안 들어가 있고, 식물성 재료로 만들어져서 건강한 거야”. “앞으로 비건 제품 위주로 식재료를 바꿀 거야” 최근 커머스 업계의 주요 전략으로 비건(Vegan) 제품이 다양하게 등장하고 있습니다. 동물성 식품의 섭취는 물론, 동물성 제품과"
                Img2Adress="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&amp;w=60&amp;q=90"
                P3="사사김"
              />
              <Video
                VideoAddress="https://brunch.co.kr/@97449a64110b4d5/9"
                ImgAddress="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2FdFGD%2Fimage%2F1MRuCokBnkptJcDoKnOD9p1ZHOs.PNG&amp;w=500&amp;q=75"
                P1="비건(Vegan)제품, 주류가 될 수 있을까?"
                P2="못 보던 마요네즈가 냉장고에 있다. 비건 마요네즈. 아내는 달걀 알러지가 있는 딸을 위해 구매했다고 했습니다. “달걀이 안 들어가 있고, 식물성 재료로 만들어져서 건강한 거야”. “앞으로 비건 제품 위주로 식재료를 바꿀 거야” 최근 커머스 업계의 주요 전략으로 비건(Vegan) 제품이 다양하게 등장하고 있습니다. 동물성 식품의 섭취는 물론, 동물성 제품과"
                Img2Adress="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&amp;w=60&amp;q=90"
                P3="사사김"
              />
              <Video
                VideoAddress="https://brunch.co.kr/@97449a64110b4d5/9"
                ImgAddress="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2FdFGD%2Fimage%2F1MRuCokBnkptJcDoKnOD9p1ZHOs.PNG&amp;w=500&amp;q=75"
                P1="비건(Vegan)제품, 주류가 될 수 있을까?"
                P2="못 보던 마요네즈가 냉장고에 있다. 비건 마요네즈. 아내는 달걀 알러지가 있는 딸을 위해 구매했다고 했습니다. “달걀이 안 들어가 있고, 식물성 재료로 만들어져서 건강한 거야”. “앞으로 비건 제품 위주로 식재료를 바꿀 거야” 최근 커머스 업계의 주요 전략으로 비건(Vegan) 제품이 다양하게 등장하고 있습니다. 동물성 식품의 섭취는 물론, 동물성 제품과"
                Img2Adress="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&amp;w=60&amp;q=90"
                P3="사사김"
              />
              <Video
                VideoAddress="https://brunch.co.kr/@97449a64110b4d5/9"
                ImgAddress="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2FdFGD%2Fimage%2F1MRuCokBnkptJcDoKnOD9p1ZHOs.PNG&amp;w=500&amp;q=75"
                P1="비건(Vegan)제품, 주류가 될 수 있을까?"
                P2="못 보던 마요네즈가 냉장고에 있다. 비건 마요네즈. 아내는 달걀 알러지가 있는 딸을 위해 구매했다고 했습니다. “달걀이 안 들어가 있고, 식물성 재료로 만들어져서 건강한 거야”. “앞으로 비건 제품 위주로 식재료를 바꿀 거야” 최근 커머스 업계의 주요 전략으로 비건(Vegan) 제품이 다양하게 등장하고 있습니다. 동물성 식품의 섭취는 물론, 동물성 제품과"
                Img2Adress="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&amp;w=60&amp;q=90"
                P3="사사김"
              />
              <Video
                VideoAddress="https://brunch.co.kr/@97449a64110b4d5/9"
                ImgAddress="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2FdFGD%2Fimage%2F1MRuCokBnkptJcDoKnOD9p1ZHOs.PNG&amp;w=500&amp;q=75"
                P1="비건(Vegan)제품, 주류가 될 수 있을까?"
                P2="못 보던 마요네즈가 냉장고에 있다. 비건 마요네즈. 아내는 달걀 알러지가 있는 딸을 위해 구매했다고 했습니다. “달걀이 안 들어가 있고, 식물성 재료로 만들어져서 건강한 거야”. “앞으로 비건 제품 위주로 식재료를 바꿀 거야” 최근 커머스 업계의 주요 전략으로 비건(Vegan) 제품이 다양하게 등장하고 있습니다. 동물성 식품의 섭취는 물론, 동물성 제품과"
                Img2Adress="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&amp;w=60&amp;q=90"
                P3="사사김"
              />
            </ul>
          </div>
          <div class="more">
            <button class="more_button">
              <span class="Button_label">
                더 많은 콘텐츠 보기
                <span class="Button_Button__endIcon__MpDfc">
                  <span
                    class="SvgIcon_SvgIcon__root__8vwon CareerContentList_CareerContentList__More__Arrow__rw9X6"
                    id="more_button_svg"
                  >
                    <svg
                      class="SvgIcon_SvgIcon__root__svg__DKYBi"
                      viewBox="0 0 19 19"
                    >
                      <path
                        d="M2.71967 5.71967C2.98594 5.4534 3.4026 5.4292 3.69621 5.64705L3.78033 5.71967L9.499 11.438L15.2162 5.7211C15.4824 5.45479 15.899 5.43051 16.1927 5.64832L16.2768 5.72092C16.5431 5.98715 16.5674 6.40381 16.3496 6.69745L16.277 6.78158L10.0304 13.0302C9.76416 13.2966 9.34745 13.3208 9.0538 13.103L8.96967 13.0303L2.71967 6.78033C2.42678 6.48744 2.42678 6.01256 2.71967 5.71967Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </span>
              </span>
            </button>
          </div>
        </div>
        <section class="CreatorBannerSection_CreatorBannerSection__wrapper__lYhin">
          <div class="CreatorBannerSection_CreatorBannerSection__A3WkR">
            <div class="CreatorBannerSection_CreatorBannerSection__container__XFcw6">
              <div class="creator_banner_box">
                <p>즐겨보는 크리에이터의 글도 추천하고 싶다면?</p>
                <a
                  class="kjdhjkfh"
                  href="https://forms.gle/uurkbpmkA1FapxGJ6"
                  target="_blank"
                >
                  <span class="abcabc">크리에이터 추천하기</span>
                  <span class="creator_Button_Button">
                    <span class="creator_Button_Button_svg_box">
                      <svg
                        class="SvgIcon_SvgIcon__root__svg__DKYBi"
                        style={{ fill: "#36F" }}
                        viewBox="0 0 18 18"
                        id="creator_icon"
                      >
                        <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                      </svg>
                    </span>
                  </span>
                </a>
              </div>
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Fcreator-application.png&amp;w=224&amp;q=90"
                alt="크리에이터 추천하기"
                loading="lazy"
                style={{ width: "112px", height: "77px" }}
                class="CreatorBannerSection_CreatorBannerSection__image__B0a_e"
              />
              <div class="img_box">
                <button
                  type="button"
                  class="CreatorBannerSection_CreatorBannerSection__close__M_JMx"
                >
                  <span class="SvgIcon_SvgIcon__root__8vwon">
                    <svg
                      class="SvgIcon_SvgIcon__root__svg__DKYBi"
                      style={{ fill: "lightgray" }}
                      id="creator_icon"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.97 19.03a.749.749 0 1 0 1.06-1.06l-6.5-6.5a.749.749 0 0 0-1.06 0l-6.5 6.5a.749.749 0 1 0 1.06 1.06L12 13.06l5.97 5.97zM12 10.94 6.03 4.97a.749.749 0 1 0-1.06 1.06l6.5 6.5a.749.749 0 0 0 1.06 0l6.5-6.5a.749.749 0 1 0-1.06-1.06L12 10.94z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <hr class="Divider_Divider__root__f2LD0" />
        <div class="main2">
          <div class="main2_top">
            <div class="main2_main2_top">
              <Main2TopTitle
                Title="3분만에 읽는 Wanted+ 아티클"
                Link="/events?sort=deadline&amp;label=article&amp;payable=all"
                Content="아티클 전체보기"
              />
              <ul class="Main2TopContent">
                <GalleryContent
                  Url="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2465%2Fbd154172.jpg&amp;w=800&amp;q=75"
                  P1="성과는 초과해서, 역할은 주어진대로"
                  P2="#고객서비스·리테일 #CS/CX #서비스기획"
                />
                <GalleryContent
                  Url="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2465%2Fbd154172.jpg&amp;w=800&amp;q=75"
                  P1="성과는 초과해서, 역할은 주어진대로"
                  P2="#고객서비스·리테일 #CS/CX #서비스기획"
                />
                <GalleryContent
                  Url="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2465%2Fbd154172.jpg&amp;w=800&amp;q=75"
                  P1="성과는 초과해서, 역할은 주어진대로"
                  P2="#고객서비스·리테일 #CS/CX #서비스기획"
                />
                <GalleryContent
                  Url="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2465%2Fbd154172.jpg&amp;w=800&amp;q=75"
                  P1="성과는 초과해서, 역할은 주어진대로"
                  P2="#고객서비스·리테일 #CS/CX #서비스기획"
                />
              </ul>
            </div>
          </div>
          <hr class="Divider_Divider__root__f2LD0" />
          <div class="main2_bottom">
            <div class="main2_main2_top">
              <Main2TopTitle
                Title="직장인을 위한 Wanted+ VOD"
                Link="/events?sort=deadline&amp;label=article&amp;payable=all"
                Content="VOD 전체보기"
              />
              <ul class="Main2TopContent">
                <GalleryContent
                  Url="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2465%2Fbd154172.jpg&amp;w=800&amp;q=75"
                  P1="성과는 초과해서, 역할은 주어진대로"
                  P2="#고객서비스·리테일 #CS/CX #서비스기획"
                />
                <GalleryContent
                  Url="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2465%2Fbd154172.jpg&amp;w=800&amp;q=75"
                  P1="성과는 초과해서, 역할은 주어진대로"
                  P2="#고객서비스·리테일 #CS/CX #서비스기획"
                />
                <GalleryContent
                  Url="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2465%2Fbd154172.jpg&amp;w=800&amp;q=75"
                  P1="성과는 초과해서, 역할은 주어진대로"
                  P2="#고객서비스·리테일 #CS/CX #서비스기획"
                />
                <GalleryContent
                  Url="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2465%2Fbd154172.jpg&amp;w=800&amp;q=75"
                  P1="성과는 초과해서, 역할은 주어진대로"
                  P2="#고객서비스·리테일 #CS/CX #서비스기획"
                />
              </ul>
            </div>
          </div>
          <div class="LineBanner_LineBanner__DlqhX LineBanner_LineBanner__no__mgt__2BIfw">
            <a
              href="/profile"
              class=""
              aria-label="line banner"
              data-attribute-id="home__userInfo"
              data-kind="jobCategory"
            >
              <div class="LineBanner_LineBanner__link__Dkpb1">
                <div class="LineBanner_LineBanner__box__5V33Y LineBanner_LineBanner__gradient__Kzp45">
                  <span>
                    직군/직무를 입력하면 관련 콘텐츠를 추천해 드려요.
                    <em class="LineBanner_LineBanner__emoji__69eEU">👀</em>
                    <span class="SvgIcon_SvgIcon__root__8vwon LineBanner_LineBanner__icon__LtNSz">
                      <svg
                        class="SvgIcon_SvgIcon__root__svg__DKYBi"
                        style={{ fill: "white" }}
                        viewBox="0 0 18 18"
                      >
                        <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="main3">
          <div class="main3_top">
            <div class="main3_title">
              <button
                type="button"
                class="ArrowButton_ArrowButton__zK5U5"
                disabled=""
              >
                <span class="SvgIcon_SvgIcon__root__8vwon">
                  <svg
                    class="SvgIcon_SvgIcon__root__svg__DKYBi"
                    id="svg_article1"
                    style={{ fill: "lightgray" }}
                    viewBox="0 0 18 18"
                  >
                    <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
                  </svg>
                </span>
              </button>
              <div class="Title_Title__nD0Q6">
                <div class="Title_Title__Wrapper__Jbb7_">
                  <h2 class="Title_Title__Title__iETTN">
                    커리어 성장을 위한 맞춤 이벤트
                  </h2>
                </div>
                <a
                  class="Title_Title__subtitle__jPQH4"
                  data-attribute-id="home__seeMore"
                  data-domain="article"
                  data-click-section="button"
                  href="/events?sort=deadline&amp;label=article&amp;payable=all"
                >
                  이벤트 전체보기
                  <span class="SvgIcon_SvgIcon__root__8vwon Title_Title__subtitle__icon__Hrpwd">
                    <svg
                      class="SvgIcon_SvgIcon__root__svg__DKYBi"
                      viewBox="0 0 19 19"
                      style={{ fill: "gray" }}
                    >
                      <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                    </svg>
                  </span>
                </a>
              </div>
              <button type="button" class="ArrowButton_ArrowButton__zK5U5">
                <span class="SvgIcon_SvgIcon__root__8vwon">
                  <svg
                    class="SvgIcon_SvgIcon__root__svg__DKYBi"
                    id="svg_article2"
                    style={{ fill: "lightgray" }}
                    viewBox="0 0 18 18"
                  >
                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                  </svg>
                </span>
              </button>
            </div>
            <div class="main3_gal">
              <Main3Gallery
                Link="/events/jobs_contents"
                Url="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2431%2Ff6fb0b1c.jpg&amp;w=1200&amp;q=100"
                Title1="온라인"
                Content="[무료] 이력서, 포트폴리오, 면접을 부탁해 by 원티드"
              />

              <Main3Gallery
                Link="/events/jobs_contents"
                Url="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2431%2Ff6fb0b1c.jpg&amp;w=1200&amp;q=100"
                Title1="온라인"
                Content="[무료] 이력서, 포트폴리오, 면접을 부탁해 by 원티드"
              />
            </div>
          </div>
        </div>
        <div class="main4_top">
          <div class="bb">
            <div class="main4_top_content">
              <div class="main4_top_top">
                <span class="main4_top_top_box">
                  <svg
                    class="SvgIcon_SvgIcon__root__svg__DKYBi FirstWantedPlusSubscribe_FirstWantedPlusSubscribe__title__Logo__Svg__ivrbt"
                    id="wanted_svg"
                    viewBox="0 0 160 31"
                  >
                    <path
                      d="M0.140625 10.0156L6.11719 29H11.4258L15.5391 16.5547L19.6172 29H24.9609L30.9375 10.0156H25.6289L22.1133 21.8984L18.2461 10.0156H12.7969L8.92969 21.8984L5.41406 10.0156H0.140625ZM46.5469 29H51.6094V10.0156H46.5469V11.9844C45.1758 10.2441 43.1895 9.3125 40.6406 9.3125C35.2969 9.3125 31.4121 13.6016 31.4297 19.5078C31.4121 25.4141 35.2969 29.7031 40.6406 29.7031C43.1895 29.7031 45.1758 28.7891 46.5469 27.0664V29ZM36.4922 19.5078C36.4746 16.2559 38.6016 13.8828 41.5547 13.8828C44.543 13.8828 46.5117 16.0977 46.5469 19.5078C46.5117 22.918 44.543 25.1328 41.5547 25.1328C38.6016 25.1328 36.4746 22.7598 36.4922 19.5078ZM60.0469 29V17.75C60.082 15.7285 61.6289 14.0234 63.7383 14.0234C66.041 14.0234 67.2188 15.5527 67.2188 18.1719V29H72.2812V16.7656C72.2812 12.125 69.6445 9.3125 65.5312 9.3125C63.2285 9.3125 61.3125 10.4023 60.0469 12.1953V10.0156H54.9844V29H60.0469ZM86.6602 10.0156H82.8633V3.72266L77.8008 5.76172V10.0156H74.3906V14.5156H77.8008V22.7422C77.8008 28.1035 81.3867 30.2305 86.6602 29.1758V24.5352C83.7949 25.0801 82.8633 24.1836 82.8633 22.7422V14.5156H86.6602V10.0156ZM89.1211 19.5078C89.1211 25.4141 93.2871 29.7031 99 29.7031C103.078 29.7031 106.418 27.5762 108.035 23.832L103.148 22.6367C102.34 24.2012 100.881 25.1328 99 25.1328C96.4863 25.1328 94.7285 23.4805 94.2891 20.8438H108.809C108.844 20.4043 108.879 19.9648 108.879 19.5078C108.861 13.6016 104.713 9.3125 99 9.3125C93.2871 9.3125 89.1211 13.6016 89.1211 19.5078ZM94.5176 17.3281C94.834 15.377 96.4688 13.8828 99 13.8828C101.496 13.8828 103.113 15.377 103.465 17.3281H94.5176ZM130.746 29V0.804688L125.684 2.84375V11.9844C124.312 10.2441 122.326 9.3125 119.777 9.3125C114.434 9.3125 110.549 13.6016 110.566 19.5078C110.549 25.4141 114.434 29.7031 119.777 29.7031C122.326 29.7031 124.312 28.7891 125.684 27.0664V29H130.746ZM115.629 19.5078C115.611 16.2559 117.738 13.8828 120.691 13.8828C123.68 13.8828 125.648 16.0977 125.684 19.5078C125.648 22.918 123.68 25.1328 120.691 25.1328C117.738 25.1328 115.611 22.7598 115.629 19.5078ZM148.148 16.4141H141.363V20.3164H148.148V27.3828H152.191V20.3164H159.012V16.4141H152.191V9.41797H148.148V16.4141Z"
                      fill="#000000"
                    ></path>
                  </svg>
                </span>
                <div class="Grid_Grid__item__FUkSS Grid_Grid__direction_row__j_m9q Grid_Grid__justify_flex-start__auIsx Grid_Grid__align-items_flex-start__PA0JE undefined Grid_Grid__align-self_auto__sjisA Grid_Grid__wrap_nowrap__4r_cp">
                  구독해야 하는 이유
                </div>
              </div>
              <p class="main4_top_center">
                구독자의 서류 합격률이 비구독자보다 <span>1.5배</span> 높아요!
              </p>
              <a class="main4_top_bottom" href="/events/wantedplus">
                <span class="main4_top_bottom_span">
                  <svg
                    class="SvgIcon_SvgIcon__root__svg__DKYBi"
                    viewBox="0 0 15 15"
                  >
                    <defs>
                      <path
                        id="al3je9dvha"
                        d="M576.95 196.13c-.217-.217-.57-.217-.787 0-.217.218-.217.57 0 .788l3.71 3.71c.217.217.57.217.787 0l6.677-6.678c.217-.217.217-.57 0-.787-.217-.217-.57-.217-.787 0l-6.284 6.284-3.316-3.316z"
                      ></path>
                    </defs>
                    <g fill="currentColor" fill-rule="evenodd">
                      <g transform="translate(-575 -192)">
                        <use
                          fill="#FFF"
                          fill-rule="nonzero"
                          stroke="#FFF"
                          strokeWidth=".3"
                          xlinkHref="#al3je9dvha"
                        ></use>
                      </g>
                    </g>
                  </svg>
                  첫 구독 0원 신청하기
                </span>
              </a>
            </div>

            <div class="main4_top_img_box">
              <img
                class="main4_top_img"
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Ffirst-wantedplus-subscribe.png&w=800&q=90"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="main4">
          <div class="main4_bottom_title">
            <div class="main4_bottom_title_box">
              <h2 class="main4_bottom_title_title">
                채용 정보를 찾고 계셨나요?
              </h2>
            </div>
          </div>
          <div class="main4_bottom_content">
            <Main4BottomBox
              link="/wdlist"
              svg=<svg
                class="SvgIcon_SvgIcon__root__svg__DKYBi"
                width="32px"
                height="32px"
                viewBox="0 0 32 32"
              >
                <path
                  width="28px"
                  height="28px"
                  d="M27.96 29.374a1 1 0 1 0 1.414-1.414l-8.667-8.667-.338-.294a1 1 0 0 0-1.357.05 9 9 0 1 1 2.24-3.676 1 1 0 1 0 1.909.6 11.01 11.01 0 0 0 .506-3.306c0-6.076-4.925-11-11-11-6.076 0-11 4.924-11 11 0 6.074 4.925 11 11 11 2.615 0 5.087-.918 7.04-2.549l8.253 8.256z"
                ></path>
              </svg>
              name="채용공고"
            />

            <Main4BottomBox
              link="/profile"
              svg=<svg
                class="SvgIcon_SvgIcon__root__svg__DKYBi"
                id="search"
                viewBox="0 0 32 32"
              >
                <path d="M18.812 14.36c-.722.917-1.172 1.905-1.188 2.959-.023 1.658.907 2.901 2.613 3.605l.132.044c3.985 1.027 6.615 3.38 6.615 5.748L27 28.118c0 .03-.222.215-.4.215H5.33c-.157 0-.314-.14-.314-.203L5 26.705c0-2.283 2.384-4.493 6.185-5.564.349-.079.896-.273 1.458-.616.885-.54 1.504-1.297 1.654-2.301a1 1 0 1 0-1.978-.296c-.05.333-.293.63-.719.89-.345.21-.703.338-.909.385C6.075 20.503 3 23.353 3 26.716l.016 1.426c0 1.214 1.103 2.191 2.313 2.191h21.272c1.213-.002 2.399-.995 2.399-2.226l-.016-1.403c0-3.432-3.313-6.414-8.044-7.654-.944-.404-1.327-.932-1.316-1.702.008-.541.284-1.147.76-1.75.31-.394.622-.691.81-.84l.1-.092c1.409-1.474 2.319-3.428 2.319-5.333 0-4.169-3.488-7.666-7.648-7.666-4.158 0-7.647 3.498-7.647 7.666 0 1.795.506 3.33 1.55 4.628a1 1 0 1 0 1.558-1.255c-.748-.93-1.108-2.02-1.108-3.373 0-3.065 2.595-5.666 5.647-5.666 3.054 0 5.648 2.6 5.648 5.666 0 1.329-.67 2.786-1.722 3.906a7.46 7.46 0 0 0-1.079 1.122z"></path>
              </svg>
              name="내 프로필"
            />

            <Main4BottomBox
              link="/matchup/intro"
              svg=<svg
                class="SvgIcon_SvgIcon__root__svg__DKYBi"
                id="search"
                viewBox="0 0 32 32"
              >
                <path d="M11.667 28.667a1 1 0 0 1-1-1v-7h-2v7a1 1 0 0 1-1 1H2.333a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1H17a1 1 0 0 1 1 1v4.333h11a1 1 0 0 1 .993.884l.007.116v12a1 1 0 1 1-2 0v-11H18v15.334h11a1 1 0 1 1 0 2H11.667zM16 6H3.333v20.667h3.334v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7H16V6zm5 12.333c.736 0 1.333.597 1.333 1.334V21a1.333 1.333 0 1 1-2.666 0v-1.333c0-.737.597-1.334 1.333-1.334zM21 13c.736 0 1.333.597 1.333 1.333v1.334a1.333 1.333 0 1 1-2.666 0v-1.334c0-.736.597-1.333 1.333-1.333zM8 13a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.667a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1H8zm0-5.333a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.667a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1H8z"></path>
              </svg>
              name="매치업"
            />

            <Main4BottomBox
              link="/salary"
              svg=<svg
                class="SvgIcon_SvgIcon__root__svg__DKYBi"
                id="search"
                viewBox="0 0 32 32"
              >
                <path d="M10.667 21.667a3.67 3.67 0 0 1 3.528 2.666H28a1 1 0 0 1 0 2l-13.805.001a3.67 3.67 0 0 1-7.057 0H4a1 1 0 1 1 0-2h3.138a3.67 3.67 0 0 1 3.529-2.667zm0 2a1.668 1.668 0 0 0 0 3.333 1.668 1.668 0 0 0 0-3.333zm10.666-11.334A3.67 3.67 0 0 1 24.862 15H28a1 1 0 0 1 0 2h-3.138a3.67 3.67 0 0 1-7.057 0H4a1 1 0 0 1 0-2h13.805a3.67 3.67 0 0 1 3.528-2.667zm0 2a1.668 1.668 0 0 0 0 3.334 1.668 1.668 0 0 0 0-3.334zM10.667 3a3.67 3.67 0 0 1 3.528 2.666H28a1 1 0 0 1 0 2H14.195a3.67 3.67 0 0 1-7.057 0H4a1 1 0 1 1 0-2h3.138A3.67 3.67 0 0 1 10.667 3zm0 2a1.668 1.668 0 0 0 0 3.333 1.668 1.668 0 0 0 0-3.333z"></path>
              </svg>
              name="채용공고"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
