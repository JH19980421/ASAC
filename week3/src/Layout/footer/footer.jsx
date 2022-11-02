import './footer.css';

function Footer() {
	return (
		<footer>
			<div className="footer_top">
				<img
					className="logo_wanted"
					src="../source/wanted.png"
					alt="wanted"
				/>
				<ul className="footer_center">
					<li>
						<a href="#">
							기업소개
						</a>
					</li>
					<li>
						<a href="#">
							이용약관
						</a>
					</li>
					<li>
						<a href="#">
							개인정보
							처리방침
						</a>
					</li>
					<li>
						<a href="#">
							고객센터
						</a>
					</li>
				</ul>
				<div className="icon_wrap">
					<a href="https://www.instagram.com/wantedjobs.kr/">
						<img
							src="../source/instagram.png"
							alt="instagram"
						/>
					</a>
					<a href="https://www.youtube.com/channel/UC0tGZ6MqieGG2m5lA5PeQsw">
						<img
							src="../source/youtube.png"
							alt="youtube"
						/>
					</a>
					<a href="https://facebook.com/wantedkr">
						<img
							src="../source/facebook.png"
							alt="facebook"
						/>
					</a>
					<a href="https://blog.naver.com/_XqCIxl">
						<img
							src="../source/blog.png"
							alt="blog"
						/>
					</a>
					<a href="https://pf.kakao.com/_XqCIxl">
						<img
							src="../source/kakao.png"
							alt="kakao"
						/>
					</a>
					<a href="https://post.naver.com/my.nhn?memberNo=18284175">
						<img
							src="../source/post.png"
							alt="post"
						/>
					</a>
					<a href="https://apps.apple.com/kr/app/id1074569961">
						<img
							src="../source/apple.png"
							alt="apple"
						/>
					</a>
					<a href="">
						<img
							src="../source/store.png"
							alt="store"
						/>
					</a>
				</div>
			</div>
			<div className="footer_bottom">
				<p className="address">
					(주)원티드랩 (대표이사:이복기)
					| 서울특별시 송파구 올림픽로
					300 롯데월드타워 35층 |
					통신판매번호 :
					2020-서울송파-3147
					<br />
					유료직업소개사업등록번호 :
					(국내)
					제2020-3230259-14-5-00018호 |
					(국외) 서울동부-유-2020-2 |
					사업자등록번호 : 299-86-00021
					| 02-539-7118
					<br />© Wantedlab, Inc.
				</p>
				<select
					onchange="if(this.value) location.href=(this.value);"
					className="language"
				>
					<option value="https://www.wanted.co.kr/">
						한국 (한국어)
					</option>
					<option value="https://jp.wanted.jobs/">
						日本 (日本国)
					</option>
					<option value="https://www.wanted.jobs/">
						Worldwide (English)
					</option>
					<option value="https://www.wanted.jobs/">
						Singapore (English)
					</option>
				</select>
			</div>
		</footer>
	);
}

export default Footer;
