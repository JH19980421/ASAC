import './savelogin.css';

function SaveLogin(props) {
	const openSearchBar = () => {
		props.setSearchBar(true);
	};

	console.log(props);
	return (
		<header className="loginheader">
			<div className="headerWidth">
				<div className="header_left">
					<img className="menu" src="../source/menu.png" alt="menu" />
					<a href="https://www.wanted.co.kr/">
						<img
							className="logo"
							src="https://www.wantedlab.com/img/logo.png"
							alt="wanted"
						/>
					</a>
				</div>

				<ul className="header_center">
					<li>
						<a href="https://www.wanted.co.kr/jobsfeed">채용</a>
					</li>
					<li>
						<a href="https://www.wanted.co.kr/events">이벤트</a>
					</li>
					<li>
						<a href="https://www.wanted.co.kr/salary">직군별 연봉</a>
					</li>
					<li>
						<a href="https://www.wanted.co.kr/cv/intro">이력서</a>
					</li>
					<li>
						<a href="https://www.wanted.co.kr/community">커뮤니티</a>
					</li>
					<li>
						<a href="https://www.wanted.co.kr/gigs/experts">프리랜서</a>
					</li>
					<li>
						<a href="https://www.wanted.co.kr/aiscore/resume">
							AI 합격예측
						</a>
					</li>
				</ul>

				<div className="header_right">
					<img
						className="search"
						src="../source/search.png"
						alt="search"
						onClick={openSearchBar}
					/>
					<div className="svlogin">
						<div>{JSON.stringify(props.sessionStorage)}</div>
						<button
							className="logout"
							onClick={() => {
								props.sessionStorage.clear();
								props.setSavedLoginId(
									props.sessionStorage.getItem(
										'Id'
									)
								);
								props.setSavedLoginPw(
									props.sessionStorage.getItem(
										'Pw'
									)
								);

								props.setHeads(true);
							}}
						>
							로그아웃
						</button>
					</div>
					<p className="col"></p>
					<div className="service">
						<a href="https://www.wanted.co.kr/dashboard/welcome">
							기업 서비스
						</a>
					</div>
				</div>
			</div>
		</header>
	);
}

export default SaveLogin;
