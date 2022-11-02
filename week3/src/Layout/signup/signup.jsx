import './signup.css';

function Signup({ setModal }) {
	const closeSignup = () => {
		setModal(false);
	};

	return (
		<div className="modalBackgroundColor">
			<div className="modal">
				<div className="modal_body">
					<span className="modal_title">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wanted
						<img
							className="close"
							src="../source/close.png"
							alt="close"
							onClick={
								closeSignup
							}
						/>
					</span>
					<div className="introduce">
						직장인을 위한
						<br />
						커리어 플랫폼,
						원티드!
					</div>
					<div className="introduce_sub">
						커리어 성장과 행복을
						위한 여정
						<br />
						지금 원티드에서
						시작하세요.
					</div>
					<div className="emailText">
						이메일
					</div>
					<input
						type="email"
						className="emailBox"
						placeholder="이메일을 입력해주세요."
					/>
					<div className="signup">
						<button className="signup_btn">
							<div>
								이메일로
								계속하기
							</div>
						</button>
					</div>
					<div className="choice">
						or
						<br />
						다음 계정으로
						계속하기
					</div>
				</div>
			</div>
		</div>
	);
}

export default Signup;
