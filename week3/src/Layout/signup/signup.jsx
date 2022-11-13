import { useState, useEffect } from 'react';
import './signup.css';
import Data from '../data/data';

function Signup(props) {
	const [useremail, setUsername] = useState('');
	const [checkemail, setCheckemail] = useState('');
	const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

	const emailCheck = (useremail) => {
		if (emailRegEx.test(useremail)) {
			setCheckemail(true);
		} else {
			setCheckemail(false);
		}
	};

	const closeSignup = () => {
		props.setModal(false);
	};

	const [DATA, setData] = useState(false);

	const openData = () => {
		setData(true);
	};

	console.log(props);

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
							onClick={closeSignup}
						/>
					</span>
					<div className="introduce">
						직장인을 위한
						<br />
						커리어 플랫폼, 원티드!
					</div>
					<div className="introduce_sub">
						커리어 성장과 행복을 위한 여정
						<br />
						지금 원티드에서 시작하세요.
					</div>
					<div className="emailText">이메일</div>
					<input
						type="email"
						className="emailBox"
						placeholder="이메일을 입력해주세요."
						onChange={(e) => {
							setUsername(e.target.value);
							emailCheck(e.target.value);
						}}
						style={
							!checkemail
								? { borderColor: 'red' }
								: { borderColor: 'blue' }
						}
					/>
					{checkemail || useremail === '' ? (
						''
					) : (
						<div style={{ color: 'red', textAlign: 'left' }}>
							올바른 이메일 형식이 아닙니다.
						</div>
					)}
					<div className="signup">
						<button
							className="signup_btn"
							onClick={openData}
							disabled={!checkemail}
							style={
								checkemail
									? { backgroundColor: 'blue' }
									: {
											backgroundColor:
												'gray',
									  }
							}
						>
							<div>이메일로 계속하기</div>
						</button>
					</div>
					<div className="choice">
						or
						<br />
						다음 계정으로 계속하기
					</div>
				</div>
			</div>
			{DATA && (
				<Data
					setData={setData}
					setModal={props.setModal}
					setSaveLogin={props.setSaveLogin}
					LoginId={useremail}
					setSearchBar={props.setSearchBar}
					sessionStorage={props.sessionStorage}
					setSavedLoginId={props.setSavedLoginId}
					setSavedLoginPw={props.setSavedLoginPw}
				/>
			)}
		</div>
	);
}

export default Signup;
