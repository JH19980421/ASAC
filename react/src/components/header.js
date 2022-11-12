import { Link } from "react-router-dom";

import '../css/normalize.css';
import '../css/common.css';
import '../css/header.css';

import LoginModal from "../components/modals/login-modal";
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
        // <div className="header__container">
            <header>
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

                <ul className="category">
                    <li><Link to="/recruting">채용</Link></li>
                    <li><Link to="/loading">로딩창</Link></li>
                    <li><Link to="/">직군별 연봉</Link></li>
                    <li><Link to="/">이력서</Link></li>
                    <li>
                        <Link to="/">커뮤니티</Link>
                        <em className="badge--new">New</em>
                    </li>
                    <li><Link to="/">프리랜서</Link></li>
                    <li>
                        <Link to="/">AI 합격예측</Link>
                        <em className="badge--new">Beta</em>
                    </li>
                </ul>

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
            </header>
        // </div>
    );
}

export default Header;