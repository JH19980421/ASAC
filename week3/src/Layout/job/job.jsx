import './job.css';
import Keyword from '../keyword/keyword';
import DB from '../db.json';
import { useState, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import Map from '../map/map';

function Job() {
	const priceToString = (price) => {
		return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	};

	return (
		<div>
			<html lang="ko" />

			<head>
				<meta charset="UTF-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>[블루비커] 웹 프론트엔드 개발자(React) 채용 | 원티드</title>
				<link
					rel="stylesheet"
					type="text/css"
					href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
				/>
			</head>

			<body>
				<div className="padding_body"></div>
				<div className="JobDetail">
					<div className="JobDetail_Wrapper">
						<div className="JobContent">
							<div className="JobImage">
								<div className="JobImageShow">
									<img
										src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F17641%2Fo3nyaoapwhskmgjl__1080_790.jpg&amp;w=1000&amp;q=75"
										alt="디더블유아이 - 경영기획팀(인사/회계/자금/대관업무)"
									/>
								</div>
							</div>
							<div className="JobHeader">
								<h2>
									경영기획팀(인사/회계/자금/대관업무)
								</h2>
								<div>
									<h6
										style={{
											maxwidth: 'calc(100% - 88px)',
										}}
									>
										디더블유아이
									</h6>
									<button
										type="button"
										className="TooltipBtn"
									>
										응답률 매우 높음
									</button>
									<span className="JobHeader_container">
										서울
										<span className="JobHeader_dot__aiQxn">
											한국
										</span>
									</span>
								</div>
							</div>
							<div className="TagLink">
								<ul>
									<li>
										<a>
											#연봉업계평균이상
										</a>
									</li>
									<li>
										<a>#퇴사율5%이하</a>
									</li>
									<li>
										<a>#50명이하</a>
									</li>
									<li>
										<a>#설립10년이상</a>
									</li>
									<li>
										<a>#자기계발</a>
									</li>
									<li>
										<a>#IT,컨텐츠</a>
									</li>
								</ul>
							</div>
						</div>

						<div className="JobDescirption">
							<p>
								<span>
									경영기획팀(인사/회계/자금/대관업무)
									경력직을 모집합니다. IT솔루션
									업체로 중소기업의 경영관리
									업무를 전반적으로 할 수 있는
									경력직을 모집합니다. 많은
									관심과 지원을 바랍니다.
								</span>
							</p>
							<h6>주요업무</h6>
							<p>
								<span>
									• 인사/회계/자금/대관업무/비서
									업무
									<br />
									• 더존 회계 시스템 사용,
									입찰업무, 계약관리 등
									<br />
									• 1차 서류전형 -＞ 2차 면접
									-＞ 최종 합격
									<br />• 제출서류 - 이력서,
									자기소개서, 경력증명서
								</span>
							</p>
							<h6>자격요건</h6>
							<p>
								<span>
									• 유관 업무 경력 3년 이상
									<br />
									• 문서 작성 ( 엑셀, 파워포인트
									등 )
									<br />• 더존 시스템 운영
									가능자
								</span>
							</p>
							<h6>우대사항</h6>
							<p>
								<span>
									• 운전 가능자
									<br />
									• 인근 거주자
									<br />
									• 영어 가능자
									<br />• 관련 자격증 소지자 (
									전산회계 등 )
								</span>
							</p>
							<h6>혜택 및 복지</h6>
							<p>
								<span>
									ㆍ인센티브 제공
									<br />
									ㆍ생일자 휴가 및 선물 제공
									<br />
									ㆍ경조휴가 및 경조비 제공
									<br />
									ㆍ장기근속자 포상
									<br />
									ㆍ명절 선물 제공
									<br />
									ㆍ4대보험
									<br />
									ㆍ자기계발비 지원
								</span>
							</p>
						</div>

						<div className="JobWorkPlace">
							<div className="WorkBox">
								<span className="header">마감일</span>
								<span className="body">2022.11.11</span>
							</div>
							<div className="WorkBox">
								<span className="header">근무지역</span>
								<span className="body">
									중구 청파로 450, 3층 (중림동,
									신흥빌딩)
								</span>
							</div>
							<Map />
						</div>

						<div className="CompanyInfo">
							<button
								type="button"
								className="CompanyBtn"
								data-attribute-id="company__click"
								data-company-id="17641"
								data-company-name="디더블유아이"
							>
								<div
									className="CompanyLogo"
									style={{
										backgroundimage:
											'url("https://static.wanted.co.kr/images/wdes/0_5.599efd71.png")',
									}}
								></div>
								<div>
									<h5>디더블유아이</h5>
									<h6>IT, 컨텐츠</h6>
								</div>
							</button>
							<button
								className="followBtn"
								data-attribute-id="company__follow__click"
								data-company-id="17641"
								data-company-name="디더블유아이"
								data-kind="add"
							>
								<span>팔로우</span>
							</button>
						</div>

						<div className="WarningHeader">
							<h5>
								본 채용정보는 원티드랩의 동의없이
								무단전재, 재배포, 재가공할 수 없으며;
								<br />
								없으며, 구직활동 이외의 용도로 사용할 수
								없습니다.
							</h5>
						</div>
					</div>

					<div className="JobProcess_container">
						<div className="BeforeApplication_container">
							<div className="asideBox">
								<div className="Reward_container">
									<h3>채용보상금</h3>
									<ul>
										<li>
											<h4>
												추천인
											</h4>
											<p>
												{priceToString(
													500000
												)}
											</p>
										</li>
										<li>
											<h4>
												지원자
											</h4>
											<p>
												{priceToString(
													500000
												)}
											</p>
										</li>
									</ul>
								</div>
								<button
									className="BookmarkBtn"
									type="button"
								>
									북마크하기
								</button>
								<button className="ApplyBtn">
									지원하기
								</button>
								<div className="Reactions"></div>
							</div>
						</div>
					</div>
				</div>

				<div className="WorkTitle">이 포지션을 찾고 계셨나요?</div>
				<div className="workContainer">
					<div className="list_keywords">
						<Keyword putKey={DB.db} />
					</div>
				</div>
			</body>
		</div>
	);
}

export default Job;
