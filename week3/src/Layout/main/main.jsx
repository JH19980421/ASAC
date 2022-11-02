import './main.css';
import Keyword from '../keyword/keyword';
import DB from '../db.json';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Main() {
	const navigate = useNavigate();

	const goToJob = () => {
		navigate('/job');
	};

	return (
		<div>
			<html lang="ko" />

			<head>
				<meta charset="UTF-8" />
				<meta
					http-equiv="X-UA-Compatible"
					content="IE=edge"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<title>원티드 - 나다운 일의 시작</title>
				<link
					rel="shortcut icon"
					href="https://static.wanted.co.kr/favicon/favicon.ico"
				/>
			</head>

			<body>
				<main>
					<div className="banner">
						<img
							src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1843%2F6e4ca95f.jpg&w=1060&q=100"
							alt="banner"
							onClick={
								goToJob
							}
						/>
					</div>

					<div className="subtitle_container">
						<p className="subtitle">
							나에게
							필요한
							커리어
							인사이트
						</p>
					</div>

					<div className="keybox">
						<div className="keywords">
							<button>
								회사생활
							</button>
							<button>
								취업/이직
							</button>
							<button>
								조직문화
							</button>
							<button>
								인간관계
							</button>
							<button>
								라이프스타일
							</button>
							<button>
								리더십
							</button>
							<button>
								IT/기술
							</button>
							<button>
								커리어고민
							</button>
							<button>
								콘텐츠
								제작
							</button>
						</div>
						<div className="btn_work">
							<button>
								<img
									src="./source/right.png"
									alt="right"
								/>
							</button>
							<button>
								<img
									src="./source/more.png"
									alt="more"
								/>
							</button>
						</div>
					</div>

					<div className="container">
						<div className="list_keywords">
							<Keyword
								putKey={
									DB.db
								}
							/>
						</div>
						<button className="more_view">
							더 많은
							콘텐츠
							보기
							<img
								src="./source/under.png"
								alt="under"
							/>
						</button>
					</div>

					<div className="container">
						<div className="subtitle_container">
							<p className="subtitle">
								3분만에
								읽는
								Wanted+
								아티클
							</p>
						</div>
						<div className="list">
							<div className="list_content">
								<img
									src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2441%2F0b7c94dc.jpg&w=800&q=75"
									alt="article"
								/>
								<p className="list_name">
									소셜을
									석권한
									'티빙'
									오리지널
									컨텐츠
									마케팅
								</p>
								<p className="list_tag">
									#마케팅/광고
									#브랜딩
									#컨텐츠
									제작
								</p>
							</div>
							<div className="list_content">
								<img
									src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2439%2F2da70321.jpg&w=800&q=75"
									alt="article"
								/>
								<p className="list_name">
									회사에서도
									SNS처럼
									만나면
									되잖아!
								</p>
								<p className="list_tag">
									#경영/전략
									#HR
									#조직문화
								</p>
							</div>
							<div className="list_content">
								<img
									src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2437%2F30d52ee0.jpg&w=800&q=75"
									alt="article"
								/>
								<p className="list_name">
									스타트업에서는
									어떤
									방식으로
									시니어를
									채용해야
									할까?
								</p>
								<p className="list_tag">
									#HR
									#조직문화
									#경영/전략
								</p>
							</div>
							<div className="list_content">
								<img
									src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2440%2F22cd7b04.jpg&w=800&q=75"
									alt="article"
								/>
								<p className="list_name">
									냉정하지만,
									프리랜서는
									종이로
									평가할
									수
									밖에
									없어요{' '}
								</p>
								<p className="list_tag">
									#프리랜서
									#커리어고민
								</p>
							</div>
						</div>
					</div>
					<div
						id="border_none"
						className="container"
					>
						<div className="subtitle_container">
							<p className="subtitle">
								직장인을
								위한
								Wanted+
								VOD
							</p>
						</div>
						<div className="list">
							<div className="list_content">
								<img
									src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210609%2F7%2F01781563.jpg&w=800&q=75"
									alt="article"
								/>
								<p className="author">
									노무법인미안
									김동미
								</p>
								<p className="list_name">
									선택적
									근로시간제의
									모든
									것
									(주52시간제
									정착
									시리즈3)
								</p>
								<p className="list_describe">
									선택적
									근로시간제의
									모든
									것
									(주52시간제
									정착
									시리즈3)
									:
									Wanted
									HR
									Open
									className
								</p>
							</div>
							<div className="list_content">
								<img
									src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220722%2F0%2F84669821.jpg&w=800&q=75"
									alt="article"
								/>
								<p className="author">
									리더의대화연구소
									서수한
								</p>
								<p className="list_name">
									함께
									일하고
									싶은
									리더가
									되는
									질문법
								</p>
								<p className="list_describe">
									일잘러의
									무기는
									테크닉일까,
									마인드셋일까
									:
									Live
									Talk
									#26
								</p>
							</div>
							<div className="list_content">
								<img
									src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20200819%2F04%2F97576753.jpg&w=800&q=75"
									alt="article"
								/>
								<p className="author">
									모빌스그룹
									모춘,
									모빌스그룹
									대오
								</p>
								<p className="list_name">
									모춘&대오의
									퇴사
									후
									무자본
									창업기
								</p>
								<p className="list_describe">
									모춘&대오의
									퇴사
									후
									무자본
									창업기
									:
									Career
									Talk
									#5
								</p>
							</div>
							<div className="list_content">
								<img
									src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210413%2F2%2F39565343.jpg&w=800&q=75"
									alt="article"
								/>
								<p className="author">
									전)
									원티드랩
									최보명
								</p>
								<p className="list_name">
									포트폴리오를
									부탁해
								</p>
								<p className="list_describe">
									[무료]
									포트폴리오를
									부탁해
									by
									원티드
								</p>
							</div>
						</div>
					</div>

					<div className="related">
						<button className="related_btn">
							직군/직무를
							입력하면
							관련
							콘텐츠를
							추천해
							드려요.
						</button>
					</div>

					<div className="event">
						<div className="subtitle_container">
							<p className="subtitle">
								커리어
								성장을
								위한
								맞춤
								이벤트
							</p>
						</div>
						<div className="list_event">
							<div className="event_content">
								<img
									src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2414%2F93dc7b57.jpg&w=1200&q=100"
									alt="event"
								/>
								<p className="list_name">
									스타트업
									Lead를
									위한
									그룹코칭
								</p>
							</div>
							<div className="event_content">
								<img
									src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2421%2F7065bb13.jpg&w=1200&q=100"
									alt="event"
								/>
								<p className="list_name">
									10월
									원티드살롱(평가보상편)
								</p>
							</div>
						</div>
					</div>

					<div className="subscription">
						<div>
							<p className="subscription_text">
								<span className="subscription_text">
									wanted+
								</span>
								구독해야
								하는
								이유
							</p>
							<p className="subscription_detail">
								구독자의
								서류
								합격률이
								비구독자보다
								1.5배
								높아요!
							</p>
							<button className="subscription_button">
								첫
								구독
								0원
								신청하기
							</button>
						</div>
						<img
							className="subscription_image"
							src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Ffirst-wantedplus-subscribe.png&w=800&q=90"
							alt="subscription"
						/>
					</div>
					<div className="subtitle_container">
						<p className="subtitle">
							채용
							정보를
							찾고
							계셨나요?
						</p>
					</div>

					<div className="working">
						<a
							href="https://www.wanted.co.kr/wdlist?country=kr&job_sort=company.response_rate_order&years=-1&locations=all"
							className="working_item"
						>
							<img
								className="working_image"
								src="./source/search.png"
								alt="search"
							/>
							<p className="working_text">
								채용공고
								<img
									className="working_under"
									src="./source/right.png"
									alt="right"
								/>
							</p>
						</a>
						<div className="col_big"></div>
						<a
							href="https://www.wanted.co.kr/login?redirect_url=%2Fprofile"
							className="working_item"
						>
							<img
								className="working_image"
								src="./source/profile.png"
								alt="profile"
							/>
							<p className="working_text">
								내
								프로필
								<img
									className="working_under"
									src="./source/right.png"
									alt="right"
								/>
							</p>
						</a>
						<div className="col_big"></div>
						<a
							href="https://www.wanted.co.kr/matchup/intro"
							className="working_item"
						>
							<img
								className="working_image"
								src="./source/match.png"
								alt="matchup"
							/>
							<p className="working_text">
								매치업
								<img
									className="working_under"
									src="./source/right.png"
									alt="right"
								/>
							</p>
						</a>
						<div className="col_big"></div>
						<a
							href="https://www.wanted.co.kr/salary"
							className="working_item"
						>
							<img
								className="working_image"
								src="./source/sal.png"
								alt="salary"
							/>
							<p className="working_text">
								직군별
								연봉
								<img
									className="working_under"
									src="./source/right.png"
									alt="right"
								/>
							</p>
						</a>
					</div>
				</main>
			</body>
		</div>
	);
}

export default Main;
