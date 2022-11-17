import { Link } from "react-router-dom";
import styled from 'styled-components';

import '../css/normalize.css';
import '../css/common.css';
import '../css/header.css';

import LoginModal from "./modals/login-modal";
import { useEffect, useMemo, useState } from "react";
import SearchBar from "./search-bar";

function Header() {
    const [openLoginModal, setOpenLoginModal] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        console.log(window.localStorage.getItem('id'));
    }, [])

    const onClickJoinLogin = () => {
        openLoginModal = setOpenLoginModal(!openLoginModal);
    }

    const onClickSearchButton = () => {
        setShowSearchBar(!showSearchBar);
    }

    const onClickLogout = () => {
        setIsLogin(false);
        window.localStorage.clear();
    }

    return (
        <HeaderContainer>
            {
                openLoginModal? <LoginModal openModal={setOpenLoginModal} isLogin={setIsLogin}/>: null
            }
            {
                showSearchBar? <SearchBar showSearchBar={setShowSearchBar}/>: null
            }
            <img className="menu" src={ require('../assets/images/menu.png') } alt="menu"/>
            <Link to="..">
                <img className="logo" src="https://www.wantedlab.com/img/logo.png" alt="wanted"/>
            </Link>

            <Category>
                <li><Link to="/recruting">채용</Link></li>
                <li><Link to="/loading">로딩창</Link></li>
                <li><Link to="/">직군별 연봉</Link></li>
                <li><Link to="/">이력서</Link></li>
                <li>
                    <Link to="/">커뮤니티</Link>
                    <BadgeNew>New</BadgeNew>
                </li>
                <li><Link to="/">프리랜서</Link></li>
                <li>
                    <Link to="/">AI 합격예측</Link>
                    <BadgeNew>Beta</BadgeNew>
                </li>
            </Category>

            <div className="header__right">
                <img 
                    className="search" 
                    src={ require('../assets/images/search.png') } 
                    alt="search"
                    onClick={onClickSearchButton}
                />
                {
                    isLogin?
                    <div>
                        <img
                            className="notification"
                            src={ require("../assets/images/notification.png") } 
                            alt="notification"
                        />
                        <img
                            className="profile"
                            src={ require("../assets/images/user-profile.png") } 
                            alt="profile"
                        />
                    </div>
                    :
                    <div 
                        className="login"
                        onClick={onClickJoinLogin}
                    >
                        회원가입/로그인
                    </div>
                }
                <p className="divider__vertical"></p>
        
                {/* <div className="header__organization">기업 서비스</div>*/}
                <div 
                    className="header__organization"
                    onClick={onClickLogout}
                >로그아웃</div>
            </div>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;

    position: sticky;
    top: 0;

    background-color: white;
    border-bottom: 1px solid lightgray;

    z-index: 3;

    flex-grow: 1;

    font-size: 14px;

    padding: 0 225px;

    height: 50px;
`;

const Category = styled.ul`
    display: flex;
    flex-grow: 1;
    list-style-type: none;

    text-align: center;
    align-items: center;

    margin: 0;
    margin-left: 10px;

    height: 100%;

    li {
        display: flex;
        align-items: center;
        justify-content: center;

        position: relative;

        /* float: left; */
        width: max-content;
        height: 100%;

        margin-left: 10px;
        padding-left: 15px;
        padding-right: 15px;

        cursor: pointer;

        &:hover {
            border-bottom: 3px solid lightgray;
        }
    }
`;

const BadgeNew = styled.em`
    position: absolute;
    top: 12px;
    right: 0;

    font-style: normal;
    color: blue;

    transform: translateX(10px) scale(0.6);
`

export default Header;