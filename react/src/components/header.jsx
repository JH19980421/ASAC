import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import "../css/normalize.css";
import "../css/common.css";
import "../css/header.css";

import LoginModal from "./modals/login-modal";
import SearchBar from "./search-bar";

const expandMenus = require("../expand-menu.json");
const menuDetails = require("../menu-details.json");
let menuDetailLength = Math.ceil(menuDetails.length / 15);

function Header() {
  const [expandMenu, setExpandMenu] = useState(false);
  const [expandExtraMenu, setExpandExtraMenu] = useState(false);
  const [menuName, setMenuName] = useState("");
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    // console.log(window.localStorage.getItem('id'));
  }, []);

  const onClickJoinLogin = () => {
    setOpenLoginModal(!openLoginModal);
  };

  const onClickSearchButton = () => {
    setShowSearchBar(!showSearchBar);
  };

  const onClickLogout = () => {
    setIsLogin(false);
    window.localStorage.clear();
  };

  const onMouseEnterMenu = () => {
    setExpandMenu(true);
  };

  const onMouseLeaveExpandedMenu = () => {
    setExpandMenu(false);
  };

  const onMouseEnterExpandedMenu = (name) => {
    setExpandExtraMenu(true);

    setMenuName(name);
  };

  return (
    <HeaderContainer>
      {openLoginModal ? (
        <LoginModal openModal={setOpenLoginModal} isLogin={setIsLogin} />
      ) : null}
      {showSearchBar ? <SearchBar showSearchBar={setShowSearchBar} /> : null}
      <MenuImage
        expandMenu={expandMenu}
        setExpandMenu={setExpandMenu}
        onMouseEnter={onMouseEnterMenu}
        src={require("../assets/images/menu.png")}
        alt="menu"
      />
      {expandMenu ? (
        <ExpandedMenu onMouseLeave={onMouseLeaveExpandedMenu}>
          <ul>
            <li>직군 전체</li>
            {expandMenus.map((menu) => (
              <li
                key={menu.id}
                onMouseOver={() => onMouseEnterExpandedMenu(menu.content)}
                onMouseLeave={() => setExpandExtraMenu(false)}
              >
                {menu.content}
              </li>
            ))}
            <Freelancer>프리랜서</Freelancer>
          </ul>
        </ExpandedMenu>
      ) : null}
      {expandExtraMenu ? (
        <ExtraMenuContainer
          onMouseOver={() => {
            setExpandExtraMenu(true);
            setExpandMenu(true);
          }}
          onMouseLeave={() => setExpandExtraMenu(false)}
        >
          {menuDetails.map((it) => (
            <p key={it.id}>
              {menuName}
              {it.id}
            </p>
          ))}
        </ExtraMenuContainer>
      ) : null}

      <Link to="..">
        <img
          className="logo"
          src="https://www.wantedlab.com/img/logo.png"
          alt="wanted"
        />
      </Link>

      <Category>
        <li>
          <Link to="/recruting">채용</Link>
        </li>
        <li>
          <Link to="/loading">로딩창</Link>
        </li>
        <li>
          <Link to="/">직군별 연봉</Link>
        </li>
        <li>
          <Link to="/resume">이력서</Link>
        </li>
        <li>
          <Link to="/">커뮤니티</Link>
          <BadgeNew>New</BadgeNew>
        </li>
        <li>
          <Link to="/">프리랜서</Link>
        </li>
        <li>
          <Link to="/">AI 합격예측</Link>
          <BadgeNew>Beta</BadgeNew>
        </li>
      </Category>

      <HeaderRight>
        <img
          className="search"
          src={require("../assets/images/search.png")}
          alt="search"
          onClick={onClickSearchButton}
        />
        {isLogin ? (
          <div>
            <img
              className="notification"
              src={require("../assets/images/notification.png")}
              alt="notification"
            />
            <img
              className="profile"
              src={require("../assets/images/user-profile.png")}
              alt="profile"
            />
          </div>
        ) : (
          <div className="login" onClick={onClickJoinLogin}>
            회원가입/로그인
          </div>
        )}
        <p className="divider__vertical"></p>

        {/* <div className="header__organization">기업 서비스</div>*/}
        <HeaderOrganization onClick={onClickLogout}>
          로그아웃
        </HeaderOrganization>
      </HeaderRight>
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

  font-size: 0.875rem;

  padding: 0 14.0625rem;

  height: 50px;
`;

const HeaderRight = styled.div`
  display: contents;
  text-align: right;
`;

const MenuImage = styled.img`
  width: 18px;
  height: 19px;

  cursor: pointer;
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
`;

const HeaderOrganization = styled.div`
  border: 1px solid lightgray;
  border-radius: 20px;

  padding: 5px 10px;

  color: gray;

  cursor: pointer;
`;

const ExpandedMenu = styled.div`
  width: 210px;
  height: 93.4%;

  overflow: scroll;

  position: fixed;
  left: 14.2%;
  top: 6.6%;
  z-index: 2;

  background-color: white;

  border-radius: 2px;

  text-align: left;

  ul {
    list-style: none;

    margin: 0;
    line-height: 270%;

    font-size: 14px;
    font-weight: bold;

    padding: 0;

    li {
      padding: 0 17px;

      cursor: pointer;

      &:hover {
        color: blue;
        background-color: #f2f2f2;
      }
    }
  }
`;

const Freelancer = styled.div`
  width: inherit;

  margin: 8px 17px;
  padding: 9px 0;

  background-color: lightblue;

  text-align: center;

  border-radius: 7px;
`;

const ExtraMenuContainer = styled.div`
  position: fixed;
  left: 28%;
  top: 6.6%;
  z-index: 2;

  width: max-content;
  height: 93.4%;

  display: grid;
  grid-template-columns: repeat(${menuDetailLength}, 180px);
  grid-template-rows: repeat(17, 40px);
  grid-auto-flow: column;

  align-items: center;

  background-color: #eff2f4;

  /* row-gap: 30px; */

  p {
    width: fit-content;
    height: fit-content;

    margin: 5px 10px;

    cursor: pointer;
  }

  p:hover {
    color: blue;
  }
`;

export default Header;
