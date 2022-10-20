import React from 'react';
import Footer from '../Footer/Footer';
import SlideShow from './SlideShow';

const Main = (props) => {
   return (
    <>
      <div className="main">
      <SlideShow/>

        <div className="section">

          <div className="career">
            <div className="title">
              <h2>나에게 필요한 커리어 인사이트</h2>
              <button type="button"><img style={{verticalalign: 'top', height: 30}} src={require("../../../images/question.svg")} alt="" /></button>
            </div>
            <div className="scroll_button">
              <div className="left">
                <div className="select">
                  <div className="slide">
                    <li>인간관계</li> <li>회사생활</li> <li>리더십</li> <li>리이프스타일</li> <li>취업/이직</li> <li>IT/기술</li> <li>조직문화</li> <li>커리어고민</li> <li>노무</li> <li>노무</li> <li>노무</li> <li>커리어고민</li> <li>노무</li> <li>IT/기술</li> <li>조직문화</li> <li>커리어고민</li> <li>노무</li> <li>노무</li> <li>취업/이직</li> <li>IT/기술</li> <li>조직문화</li> <li>커리어고민</li> <li>노무</li> <li>노무</li> <li>노무</li> <li>커리어고민</li> <li>IT/기술</li> <li>조직문화</li>
                  </div>

                </div>
                <span className="toggleButton select_prev" > <img src={require("../../../images/prev.png")}  alt=""/></span>
                <span className="toggleButton select_next"> <img src={require("../../../images/next.png")}  alt=""/></span>


              </div>


              <div className="right">
                <button><img src={require("../../../images/option.png")}  alt=""/></button>
              </div>


            </div>

            <div className="list">
              <li> <a href="/#"> <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20201229%2F8%2F28666531.jpg&amp;w=500&amp;q=75"  alt=""/> <h1> 변화를 즐기는 팀을 만들어볼까요? - 김윤혁 </h1> <p> 혼자서는 해낼 수 없는, 여러 명이 함께 그리고 한 방향으로 움직여야지만 해결 할 수 있는 미션이 있습니다. 그리고 그런 움직임을 가능케 하는 것이 바로 리더십입니다. 우리가 왜 즐기는 팀을 만들기 위해 노력했고, 그것을 지속가능하게 하기위해 어떻게 끊임없이 변화했는지를 풀어보려고 합니다. 이직은 거의 없고 성장은 빠르게 할 수 있었던 강남언니팀이 되기까지, 혼자가 아니라 함께 만들어간 조직문화와 그것을 가능케 한 리더십에 대한 이야기를 나누겠습니다. </p> <div className="writer"> <p> <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&amp;w=60&amp;q=90" alt=""/> 강남언니 김윤혁 </p> </div> </a> </li>
              <li> <a href="/#"> <img src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2Fdjzp%2Fimage%2Fuw5K_9n8JaLzxFb7bX5RkegfByw.jpg&w=500&q=75"  alt=""/> <h1> 변화를 즐기는 팀을 만들어볼까요? - 김윤혁 </h1> <p> 혼자서는 해낼 수 없는, 여러 명이 함께 그리고 한 방향으로 움직여야지만 해결 할 수 있는 미션이 있습니다. 그리고 그런 움직임을 가능케 하는 것이 바로 리더십입니다. 우리가 왜 즐기는 팀을 만들기 위해 노력했고, 그것을 지속가능하게 하기위해 어떻게 끊임없이 변화했는지를 풀어보려고 합니다. 이직은 거의 없고 성장은 빠르게 할 수 있었던 강남언니팀이 되기까지, 혼자가 아니라 함께 만들어간 조직문화와 그것을 가능케 한 리더십에 대한 이야기를 나누겠습니다. </p> <div className="writer"> <p> <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&amp;w=60&amp;q=90" alt=""/> 강남언니 김윤혁 </p> </div> </a> </li>
              <li> <a href="/#"> <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20201229%2F8%2F28666531.jpg&amp;w=500&amp;q=75"  alt=""/> <h1> 변화를 즐기는 팀을 만들어볼까요? - 김윤혁 </h1> <p> 혼자서는 해낼 수 없는, 여러 명이 함께 그리고 한 방향으로 움직여야지만 해결 할 수 있는 미션이 있습니다. 그리고 그런 움직임을 가능케 하는 것이 바로 리더십입니다. 우리가 왜 즐기는 팀을 만들기 위해 노력했고, 그것을 지속가능하게 하기위해 어떻게 끊임없이 변화했는지를 풀어보려고 합니다. 이직은 거의 없고 성장은 빠르게 할 수 있었던 강남언니팀이 되기까지, 혼자가 아니라 함께 만들어간 조직문화와 그것을 가능케 한 리더십에 대한 이야기를 나누겠습니다. </p> <div className="writer"> <p> <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&amp;w=60&amp;q=90" alt=""/> 강남언니 김윤혁 </p> </div> </a> </li>
              <li> <a href="/#"> <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20201229%2F8%2F28666531.jpg&amp;w=500&amp;q=75"  alt=""/> <h1> 변화를 즐기는 팀을 만들어볼까요? - 김윤혁 </h1> <p> 혼자서는 해낼 수 없는, 여러 명이 함께 그리고 한 방향으로 움직여야지만 해결 할 수 있는 미션이 있습니다. 그리고 그런 움직임을 가능케 하는 것이 바로 리더십입니다. 우리가 왜 즐기는 팀을 만들기 위해 노력했고, 그것을 지속가능하게 하기위해 어떻게 끊임없이 변화했는지를 풀어보려고 합니다. 이직은 거의 없고 성장은 빠르게 할 수 있었던 강남언니팀이 되기까지, 혼자가 아니라 함께 만들어간 조직문화와 그것을 가능케 한 리더십에 대한 이야기를 나누겠습니다. </p> <div className="writer"> <p> <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&amp;w=60&amp;q=90" alt=""/> 강남언니 김윤혁 </p> </div> </a> </li>
              <li> <a href="/#"> <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20201229%2F8%2F28666531.jpg&amp;w=500&amp;q=75"  alt=""/> <h1> 변화를 즐기는 팀을 만들어볼까요? - 김윤혁 </h1> <p> 혼자서는 해낼 수 없는, 여러 명이 함께 그리고 한 방향으로 움직여야지만 해결 할 수 있는 미션이 있습니다. 그리고 그런 움직임을 가능케 하는 것이 바로 리더십입니다. 우리가 왜 즐기는 팀을 만들기 위해 노력했고, 그것을 지속가능하게 하기위해 어떻게 끊임없이 변화했는지를 풀어보려고 합니다. 이직은 거의 없고 성장은 빠르게 할 수 있었던 강남언니팀이 되기까지, 혼자가 아니라 함께 만들어간 조직문화와 그것을 가능케 한 리더십에 대한 이야기를 나누겠습니다. </p> <div className="writer"> <p> <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&amp;w=60&amp;q=90" alt=""/> 강남언니 김윤혁 </p> </div> </a> </li>
              <li> <a href="/#"> <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20201229%2F8%2F28666531.jpg&amp;w=500&amp;q=75"  alt=""/> <h1> 변화를 즐기는 팀을 만들어볼까요? - 김윤혁 </h1> <p> 혼자서는 해낼 수 없는, 여러 명이 함께 그리고 한 방향으로 움직여야지만 해결 할 수 있는 미션이 있습니다. 그리고 그런 움직임을 가능케 하는 것이 바로 리더십입니다. 우리가 왜 즐기는 팀을 만들기 위해 노력했고, 그것을 지속가능하게 하기위해 어떻게 끊임없이 변화했는지를 풀어보려고 합니다. 이직은 거의 없고 성장은 빠르게 할 수 있었던 강남언니팀이 되기까지, 혼자가 아니라 함께 만들어간 조직문화와 그것을 가능케 한 리더십에 대한 이야기를 나누겠습니다. </p> <div className="writer"> <p> <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&amp;w=60&amp;q=90" alt=""/> 강남언니 김윤혁 </p> </div> </a> </li>
              <li> <a href="/#"> <img src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F1Wwt%2Fimage%2Fkk-BOngzUm8v3VTWhEvU_f8aTuQ.png&amp;w=500&amp;q=75" alt="일 잘하는 사람의 태도" /> <h1> 일 잘하는 사람의 태도 </h1> <p> 을 잘한다는 것 오늘 리뷰할 첫 번째 책은, ‘일을 잘한다는 것’입니다. 이 책은 야마구치 슈와 구스노키 겐, 두 저자가 서로 대화하는 형식으로 이루어져 있습니다. 야마구치 슈는 ‘철학은 어떻게 삶의 무기가 되는가’를 쓴 전략 컨설턴트입니다. 게이오대에서 철학과를 졸업하고 미학미술사 석사과정을 수료한 뒤에, 광고회사 덴쓰를 시작으로 전략 컨설팅 회사인 </p> <div className="writer"> <p> <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&amp;w=60&amp;q=90" alt=""/> 장영학</p> </div> </a> </li>
              <li> <a href="/#"> <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20201229%2F8%2F28666531.jpg&amp;w=500&amp;q=75"  alt=""/> <h1> 변화를 즐기는 팀을 만들어볼까요? - 김윤혁 </h1> <p> 혼자서는 해낼 수 없는, 여러 명이 함께 그리고 한 방향으로 움직여야지만 해결 할 수 있는 미션이 있습니다. 그리고 그런 움직임을 가능케 하는 것이 바로 리더십입니다. 우리가 왜 즐기는 팀을 만들기 위해 노력했고, 그것을 지속가능하게 하기위해 어떻게 끊임없이 변화했는지를 풀어보려고 합니다. 이직은 거의 없고 성장은 빠르게 할 수 있었던 강남언니팀이 되기까지, 혼자가 아니라 함께 만들어간 조직문화와 그것을 가능케 한 리더십에 대한 이야기를 나누겠습니다. </p> <div className="writer"> <p> <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&amp;w=60&amp;q=90" alt=""/> 강남언니 김윤혁 </p> </div> </a> </li>
            </div>

            <div className="morebutton">
              <button>
                더 많은 콘텐츠 보기
                <img src={require("../../../images/downarrow.png")}  alt=""/>
              </button>

            </div>
          </div>

          <div className="divider"></div>



          <div className="subsection">

            <div className="titleline">
              <button></button>
              <div className="title">
                <h2>3분만에 읽는 Wanted+ 아티클</h2>
                <a href="/#"><p>아티클 전체보기 {'>'}</p></a>
              </div>
              <button><img src={require("../../../images/right-arrow.png")}  alt=""/></button>
            </div>

            <div className="list">                                
                        <li> <a href="/#"> <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2436%2F5a2f347a.jpg&w=800&q=75" alt="" /> <h1> 냉정하지만, 프리랜서는 종이로 평가할 수밖에 없어요</h1> <p> #시리즈 #마케팅광고 #커리어고민 </p> <div className="writer">  </div> </a> </li>
                        <li> <a href="/#"> <img src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2Fdjzp%2Fimage%2Fuw5K_9n8JaLzxFb7bX5RkegfByw.jpg&w=500&q=75" alt="" /> <h1> 냉정하지만, 프리랜서는 종이로 평가할 수밖에 없어요</h1> <p> #시리즈 #마케팅광고 #커리어고민 </p> <div className="writer">  </div> </a> </li>
                        <li> <a href="/#"> <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2436%2F5a2f347a.jpg&w=800&q=75" alt="" /> <h1> 냉정하지만, 프리랜서는 종이로 평가할 수밖에 없어요</h1> <p> #시리즈 #마케팅광고 #커리어고민 </p> <div className="writer">  </div> </a> </li>
                        <li> <a href="/#"> <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2436%2F5a2f347a.jpg&w=800&q=75" alt="" /> <h1> 냉정하지만, 프리랜서는 종이로 평가할 수밖에 없어요</h1> <p> #시리즈 #마케팅광고 #커리어고민 </p> <div className="writer">  </div> </a> </li>
                   </div>

          </div>

          <div className="divider"></div>


          <div className="subsection">

            <div className="titleline">
              <button></button>
              <div className="title">
                <h2>직장인을 위한 Wanted+ VOD</h2>
                <a href="/#"><p>VOD 전체보기 {'>'}</p></a>
              </div>
              <button><img src={require("../../../images/right-arrow.png")}  alt=""/></button>
            </div>

            <div className="list">
              <li> <a href="/#"> <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2436%2F5a2f347a.jpg&w=800&q=75"  alt=""/> <h1> 냉정하지만, 프리랜서는 종이로 평가할 수밖에 없어요</h1> <p> #시리즈 #마케팅광고 #커리어고민 </p> <div className="writer">  </div> </a> </li>
              <li> <a href="/#"> <img src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2Fdjzp%2Fimage%2Fuw5K_9n8JaLzxFb7bX5RkegfByw.jpg&w=500&q=75"  alt=""/> <h1> 냉정하지만, 프리랜서는 종이로 평가할 수밖에 없어요</h1> <p> #시리즈 #마케팅광고 #커리어고민 </p> <div className="writer">  </div> </a> </li>
              <li> <a href="/#"> <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2436%2F5a2f347a.jpg&w=800&q=75"  alt=""/> <h1> 냉정하지만, 프리랜서는 종이로 평가할 수밖에 없어요</h1> <p> #시리즈 #마케팅광고 #커리어고민 </p> <div className="writer">  </div> </a> </li>
              <li> <a href="/#"> <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2436%2F5a2f347a.jpg&w=800&q=75"  alt=""/> <h1> 냉정하지만, 프리랜서는 종이로 평가할 수밖에 없어요</h1> <p> #시리즈 #마케팅광고 #커리어고민 </p> <div className="writer">  </div> </a> </li>
            </div>

          </div>

          <div className="linebanner">
            <a href="/#">
              <div className="textbox">
                직군/직무를 입력하면 관련 콘텐츠를 추천해 드려요.
                <em className="LineBanner_LineBanner__emoji__69eEU">👀</em>
              </div>
            </a>
          </div>

          <div className="subsection">
            <div className="titleline">
              <button></button>
              <div className="title">
                <h2>커리어 성장을 위한 맞춤 이벤트 </h2>
                <a href="/#"><p>아티클 전체보기 {'>'}</p></a>
              </div>
              <button><img src={require("../../../images/right-arrow.png")}  alt=""/></button>
            </div>

            <div className="list2">                                
                        <li> <a href="/#"> <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2409%2Ff99adacf.jpg&w=1200&q=100" alt=''/> <button>교육</button> <h1> 스타트업 Lead를 위한 그룹코칭</h1> <p> 2022.12.08 (목) </p>  </a> </li>
                        <li> <a href="/#"> <img src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2Fdjzp%2Fimage%2Fuw5K_9n8JaLzxFb7bX5RkegfByw.jpg&w=500&q=75" alt=''/> <button>교육</button> <h1> 냉정하지만, 프리랜서는 종이로 평가할 수밖에 없어요</h1> <p> 2022.12.08 (목) </p></a> </li>
                  </div>


          </div>
        </div>


        <div className="subscribe">
          <div className="sub">
            <div className="left">
              <h1>wanted+ 구독해야 하는 이유</h1>
              <p>구독자의 서류 합격률이 비구독자보다 1.5배 높아요!</p>
              <button>
                첫 구독 0원 신청하기</button>
            </div>
            <div className="right">
              <img src={require("../../../images/pass.png")}  alt=""/>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="info">

            <div className="title">
              <h1>채용 정보를 찾고 계셨나요?</h1>
            </div>

            <div className="gridcontain">
              <div className="grid">
                <img src={require("../../../images/search.png")}  alt=""/>
                <h1>채용공고  <img src={require("../../../images/right-arrow.png")}  alt=""/></h1>

              </div>
              <div className="grid">
                <img src={require("../../../images/profile.png")}  alt=""/>
                <h1>내프로필  <img src={require("../../../images/right-arrow.png")}  alt=""/></h1>
              </div>
              <div className="grid">
                <img src={require("../../../images/search.png")}  alt=""/>
                <h1>채용공고  <img src={require("../../../images/right-arrow.png")}  alt=""/></h1>

              </div>
              <div className="grid">
                <img src={require("../../../images/profile.png")}  alt=""/>
                <h1>내프로필  <img src={require("../../../images/right-arrow.png")}  alt=""/></h1>
              </div>
            </div>

          </div>
        </div>



      </div>
      <Footer />
    </>

  )
}

export default Main