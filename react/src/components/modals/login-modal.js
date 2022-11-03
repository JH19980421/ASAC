import { useEffect, useMemo, useRef, useState } from "react";
import "../../css/modals/login-modal.css";

import * as Validation from "../../utils/validation";

const agreementItems = require("../../agreement-item.json");

function LoginModal(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [activateButton, setActivateButton] = useState(false);
    const [completeJoinButton, setCompleteJoinButton] = useState(false);

    const hider = useRef();
    const loginModal = useRef();
    const joinModal = useRef();

    useEffect(() => {
        initLoginModal();
        setIsEmailValid(true);
        setIsPasswordValid(true);
        // console.log('temp', agreementItems.find((item) => item.id == 1));
    }, []);

    useMemo(() => {
        if(!Validation.emailValidation(email)) {
            setIsEmailValid(false);
            setActivateButton(false);
        } else {
            setIsEmailValid(true);
            setActivateButton(true);
        }

        return isEmailValid;
    }, [email]);

    useMemo(() => {
        if(!Validation.passwordValidation(password)) {
            setIsPasswordValid(false);
            setCompleteJoinButton(false);
        } else {
            setIsPasswordValid(true);
            setCompleteJoinButton(true);
        }

        return isPasswordValid;
    }, [password]);


    
    const initLoginModal = () => {
        hider.current.style.display = "block";
        hider.current.style.zIndex = 4;

        loginModal.current.style.zIndex = 5;
    }


    const closeModals = () => {
        props.openModal(false);
    }

    const gotoJoinModal = (email) => {
        if(!Validation.emailValidation(email)) {
            alert('이메일을 입력해주세요.');
            return;
        }

        joinModal.current.style.display = "block";
        joinModal.current.style.zIndex = 6;
    }

    const completeJoin = () => {
        console.log('clvkjslkc');
        alert('회원가입 완료');
        closeModals();
    }


    const [checkedItems, setCheckedItems] = useState([]);
    const [isAllChecked, setIsAllChecked] = useState(0);

    const checkedItemHandlder = (id, checked) => {
        if(checked) {
            setCheckedItems(prev => [...prev, id]);
        } else if(!checked && checkedItems.includes(id)) {
            setCheckedItems(checkedItems.filter((el) => el !== id));
        }
        // setCheckedItems(checkedItems);
    }

    const onClickAllCheck = (checked) => {
        setIsAllChecked(!isAllChecked);

        if(checked) {
            agreementItems.forEach((item) => {
                checkedItems.push(item.id);
                setCheckedItems(checkedItems);
            });
        } else {
            setCheckedItems([]);
        }
    }

    return (
        <>
            <div 
                className="hider" 
                ref={hider}
                onClick={closeModals}
            ></div>

            <div className="login-modal" ref={loginModal}>
                <div className="login-modal-header">
                    <img id="modal-logo" className="logo" src="https://www.wantedlab.com/img/logo.png" alt="wanted"/>
                </div>
                <img 
                    className="login-modal-close" 
                    src={ require('../../assets/images/close.png') } 
                    alt="close"
                    onClick={closeModals}
                />

                <div className="empty-space__medium"></div>
                <div className="login-modal-title">
                    <h1>직장인을 위한<br/>커리어 플랫폼, 원티드!</h1>
                    <p>커리어 성장과 행복을 위한 여정<br/>지금 원티드에서 시작하세요.</p>
                </div>

                <p className="email-label">이메일</p>
                <input 
                    className={isEmailValid? 'email-input': 'email-input-alert'}
                    type="text" 
                    placeholder="이메일을 입력해주세요"
                    onChange={(e) => setEmail(e.target.value)}
                />
                {
                    !isEmailValid
                    ? <p className="email-alert">올바른 이메일을 입력해주세요</p>
                    : null
                }

                <button 
                    className="email-continue"
                    onClick={() => gotoJoinModal(email)}
                    disabled={!activateButton}
                >이메일로 계속하기</button>
                <p>or</p>
                <p>다음 계정으로 계속하기</p>
                <div className="sns-login-container">
                    <div className="sns-login">
                        <img src={ require('../../assets/images/kakao-logo.png') } alt="kakao"/>
                        <p>Kakao</p>
                    </div>
                    <div className="sns-login">
                        <img src={ require('../../assets/images/kakao-logo.png') } alt="kakao"/>
                        <p>Kakao</p>
                    </div>
                    <div className="sns-login">
                        <img src={ require('../../assets/images/kakao-logo.png') } alt="kakao"/>
                        <p>Kakao</p>
                    </div>
                    <div className="sns-login">
                        <img src={ require('../../assets/images/kakao-logo.png') } alt="kakao"/>
                        <p>Kakao</p>
                    </div>
                </div>

                <p className="login-modal-bottom">
                    걱정마세요! 여러분의 지원 활동은 SNS에 노출되지 않습니다.<br/>
                    회원가입 시 개인정보 처리방침과 이용약관을 확인하였으며, 동의합니다.
                </p>
            </div>

            <div className="login-modal-join" ref={joinModal}>
                <div className="login-modal-header">
                    <p>회원가입</p>
                </div>
                <img 
                    className="login-modal-close" 
                    src={ require('../../assets/images/close.png') } 
                    alt="close"
                    onClick={closeModals}
                />

                <div>
                    <p className="email-label">이름</p>
                    <input className="email-input" type="text" placeholder="이름을 입력해 주세요."/>
                </div>
                <div>
                    <p className="email-label">휴대폰 번호</p>
                    <select className="region-select">
                        <option value="+82">대한민국 +82</option>
                        <option value="+81">일본 +81</option>
                        <option value="+886">태국 +886</option>
                        <option value="+82">대한민국 +82</option>
                        <option value="+81">일본 +81</option>
                        <option value="+886">태국 +886</option>
                        <option value="+82">대한민국 +82</option>
                        <option value="+81">일본 +81</option>
                        <option value="+886">태국 +886</option>
                    </select>
                    <div className="phone-auth">
                        <input type="text" placeholder="(예시) 01034567890"/>
                        <button disabled>인증번호 받기</button>
                    </div>
                    <input id="check-auth" type="text" placeholder="인증번호를 입력해 주세요" disabled/>
                </div>
                <div>
                    <p className="email-label">비밀번호</p>
                    <input 
                        className={isPasswordValid? 'email-input': 'email-input-alert'} 
                        type="password" 
                        placeholder="비밀번호를 입력해 주세요."
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    {
                        !isPasswordValid
                        ? <p className="email-alert">올바르지 않은 비밀번호입니다.</p>
                        : null
                    }
                    <p className="check-password">영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합하여 8자 이상 입력해 주세요.</p>
                </div>
                <div>
                    <p className="email-label">비밀번호 확인</p>
                    <input className="email-input" type="text" placeholder="비밀번호를 다시 한번 입력해 주세요."/>
                </div>

                <div className="agreement">
                    <input 
                        type="checkbox"
                        onChange={(e) => onClickAllCheck(e.target.checked)}
                        checked={checkedItems.length === agreementItems.length ? true : false}
                    />
                    <p>전체 동의</p>
                </div>

                <div 
                    id="agreement-divider" 
                    className="divider-horizontal"
                ></div>

                {
                    agreementItems.map((item) => (
                        <div className="agreement-item" key={item.id}>
                            <div className="agreement-item-check">
                                <input 
                                    type="checkbox"
                                    onChange={(e) => checkedItemHandlder(item.id, e.target.checked)}
                                    checked={checkedItems.includes(item.id) ? true : false}
                                />
                                <p>{item.content}</p>
                            </div>
                            <p>자세히</p>
                        </div>
                    ))
                }

                <div className="empty-space__medium"></div>

                <div className="join-submit-container">
                    <button 
                        className="join-submit" 
                        onClick={completeJoin}
                        disabled={!completeJoinButton}
                    >회원가입하기</button>
                </div>
            </div>
        </>
    )
}

export default LoginModal;