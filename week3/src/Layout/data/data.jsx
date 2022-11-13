/* eslint-disable no-lone-blocks */
import React, { useState } from 'react';
import SAVELOGIN from '../savelogin/savelogin';

import './data.css';

function Data(props) {
	const closeData = () => {
		props.setData(false);
		props.setModal(false);
	};

	const LoginId = props.LoginId;
	const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;
	const [password, setPassword] = useState('');
	const [passwordChk, setPasswordChk] = useState('');
	const [passwordDblChk, setPasswordDblChk] = useState();
	const [passwordDbl, setPasswordDbl] = useState('');
	const [checkList, setCheckList] = useState([]);

	const checkAll = (e) => {
		e.target.checked ? setCheckList(['age', 'oneID', 'info']) : setCheckList([]);
	};

	const checkAge = (e) => {
		if (checkList.includes(e.target.name)) {
			if (checkList.includes('oneID') && checkList.includes('info')) {
				setCheckList(['oneID', 'info']);
			}

			if (checkList.includes('oneID') && !checkList.includes('info')) {
				setCheckList(['oneID']);
			}

			if (!checkList.includes('oneID') && checkList.includes('info')) {
				setCheckList(['info']);
			}

			if (!checkList.includes('oneID') && !checkList.includes('info')) {
				setCheckList([]);
			}
		} else {
			if (checkList.includes('oneID') && checkList.includes('info')) {
				setCheckList(['oneID', 'info', 'age']);
			}

			if (checkList.includes('oneID') && !checkList.includes('info')) {
				setCheckList(['oneID', 'age']);
			}

			if (!checkList.includes('oneID') && checkList.includes('info')) {
				setCheckList(['info', 'age']);
			}

			if (!checkList.includes('oneID') && !checkList.includes('info')) {
				setCheckList(['age']);
			}
		}
	};

	const checkID = (e) => {
		if (checkList.includes(e.target.name)) {
			if (checkList.includes('age') && checkList.includes('info')) {
				setCheckList(['age', 'info']);
			}

			if (checkList.includes('age') && !checkList.includes('info')) {
				setCheckList(['age']);
			}

			if (!checkList.includes('age') && checkList.includes('info')) {
				setCheckList(['info']);
			}

			if (!checkList.includes('age') && !checkList.includes('info')) {
				setCheckList([]);
			}
		} else {
			if (checkList.includes('age') && checkList.includes('info')) {
				setCheckList(['oneID', 'info', 'age']);
			}

			if (checkList.includes('age') && !checkList.includes('info')) {
				setCheckList(['oneID', 'age']);
			}

			if (!checkList.includes('age') && checkList.includes('info')) {
				setCheckList(['info', 'oneID']);
			}

			if (!checkList.includes('age') && !checkList.includes('info')) {
				setCheckList(['oneID']);
			}
		}
	};

	const checkInfo = (e) => {
		if (checkList.includes(e.target.name)) {
			if (checkList.includes('age') && checkList.includes('oneID')) {
				setCheckList(['age', 'oneID']);
			}

			if (checkList.includes('age') && !checkList.includes('oneID')) {
				setCheckList(['age']);
			}

			if (!checkList.includes('age') && checkList.includes('oneID')) {
				setCheckList(['oneID']);
			}

			if (!checkList.includes('age') && !checkList.includes('oneID')) {
				setCheckList([]);
			}
		} else {
			if (checkList.includes('age') && checkList.includes('oneID')) {
				setCheckList(['oneID', 'info', 'age']);
			}

			if (checkList.includes('age') && !checkList.includes('oneID')) {
				setCheckList(['info', 'age']);
			}

			if (!checkList.includes('age') && checkList.includes('oneID')) {
				setCheckList(['info', 'oneID']);
			}

			if (!checkList.includes('age') && !checkList.includes('oneID')) {
				setCheckList(['info']);
			}
		}
	};

	const passwordCheck = (password) => {
		if (password.match(passwordRegEx) === null) {
			setPasswordChk(false);
		} else {
			setPasswordChk(true);
		}
	};
	const passwordDoubleCheck = (password, passwordChk) => {
		if (password === passwordChk) {
			setPasswordDblChk(true);
		} else {
			setPasswordDblChk(false);
		}
	};

	return (
		<div>
			<div className="NameModal">
				<div className="Name_body">
					<span className="Name_title">
						회원가입
						<img
							className="close2"
							src="./source/close.png"
							alt="close"
							onClick={closeData}
						/>
					</span>
					<div className="nameText">이름</div>
					<input
						type="text"
						className="nameBox"
						placeholder="이름을 입력해주세요."
					/>
					<div className="nameText">휴대폰 번호</div>
					<select className="number">
						<option value="">대한민국 +82</option>
					</select>
					<div className="inputNumber">
						<input
							type="text"
							className="numberBox"
							placeholder="(예시) 01011111111"
						/>
						<div className="numberBtn">인증번호</div>
					</div>
					<input
						type="text"
						className="certif"
						placeholder="인증번호를 입력해주세요."
						disabled
					/>
					<div className="nameText">비밀번호</div>
					<input
						type="text"
						className="nameBox"
						placeholder="비밀번호를 입력해주세요."
						onChange={(e) => {
							setPassword(e.target.value);
							passwordCheck(e.target.value);
						}}
						style={
							!passwordChk
								? { borderColor: 'red' }
								: { borderColor: 'blue' }
						}
					/>
					{passwordChk || password === '' ? (
						''
					) : (
						<div style={{ color: 'red', textAlign: 'left' }}>
							올바른 비밀번호 형식이 아닙니다.
						</div>
					)}
					<div className="nameText">비밀번호</div>
					<input
						type="text"
						className="nameBox"
						placeholder="비밀번호를 다시 입력해주세요."
						onChange={(e) => {
							passwordDoubleCheck(password, e.target.value);
							setPasswordDbl(e.target.value);
						}}
						style={
							!passwordDblChk
								? { borderColor: 'blue' }
								: { borderColor: 'red' }
						}
					/>
					{passwordDblChk || passwordDbl === '' ? (
						''
					) : (
						<div style={{ color: 'red', textAlign: 'left' }}>
							비밀번호가 서로 일치하지 않습니다.
						</div>
					)}
					<div className="checkpwd">
						영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합하여 8자
						이상 입력해주세요.
					</div>
					<div className="check">
						<div id="bot" className="checkAll">
							<input
								type="checkbox"
								name="all"
								onChange={checkAll}
								checked={
									checkList.length === 3
										? true
										: false
								}
							/>
							<div>전체 동의</div>
						</div>
						<div className="checkAll">
							<input
								type="checkbox"
								name="age"
								onChange={checkAge}
								checked={
									checkList.includes('age')
										? true
										: false
								}
							/>
							<div>만 14세 이상입니다.(필수)</div>
						</div>
						<div className="checkAll">
							<input
								type="checkbox"
								name="oneID"
								onChange={checkID}
								checked={
									checkList.includes('oneID')
										? true
										: false
								}
							/>
							<div>oneID 이용약관 동의(필수)</div>
						</div>
						<div className="checkAll">
							<input
								type="checkbox"
								name="info"
								onChange={checkInfo}
								checked={
									checkList.includes('info')
										? true
										: false
								}
							/>
							<div>개인정보 및 수집 이용 동의(필수)</div>
						</div>
					</div>
					<div className="signup">
						<button
							className="signup_btn"
							onClick={() => {
								props.sessionStorage.setItem(
									'Id',
									LoginId
								);
								props.sessionStorage.setItem(
									'Pw',
									password
								);

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

								props.setSaveLogin(true);
								props.setData(false);
								props.setModal(false);

								console.log(props.sessionStorage);
							}}
						>
							<div>가입 하기</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Data;
