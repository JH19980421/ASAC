import React from 'react';
import './data.css';

const data = () => {
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
						/>
					</span>
					<div className="nameText">
						이름
					</div>
					<input
						type="text"
						className="nameBox"
						placeholder="이름을 입력해주세요."
					/>
					<div className="nameText">
						휴대폰 번호
					</div>
					<select className="number">
						<option value="">
							대한민국
							+82
						</option>
					</select>
					<div className="inputNumber">
						<input
							type="text"
							className="numberBox"
							placeholder="(예시) 01011111111"
						/>
						<div className="numberBtn">
							인증번호
						</div>
					</div>
					<input
						type="text"
						className="certif"
						placeholder="인증번호를 입력해주세요."
						disabled
					/>
					<div className="nameText">
						비밀번호
					</div>
					<input
						type="text"
						className="nameBox"
						placeholder="비밀번호를 입력해주세요."
					/>
					<div className="nameText">
						비밀번호
					</div>
					<input
						type="text"
						className="nameBox"
						placeholder="비밀번호를 다시 입력해주세요."
					/>
					<div className="checkpwd">
						영문 대소문자, 숫자,
						특수문자를 3가지
						이상으로 조합하여
						8자 이상
						입력해주세요.
					</div>
					<div className="check">
						<div
							id="bot"
							className="checkAll"
						>
							<input type="checkbox" />
							<div>
								전체
								동의
							</div>
						</div>
						<div className="checkAll">
							<input type="checkbox" />
							<div>
								개인정보
								수집
								및
								이용
								동의(필수)
							</div>
						</div>
						<div className="checkAll">
							<input type="checkbox" />
							<div>
								이벤트
								소식
								등
								알림
								정보
								받기
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default data;
