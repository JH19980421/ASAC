import SerachSVG from './SerachSVG';
import Search from './Search';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import bell from '../../../images/bell.png';
import user from '../../../images/user.png';

const Header = ({ setmodalOpen }) => {
    const [search, setSearch] = useState(false);
    const [profileMenu, setProfileMenu] = useState(false);
    const location = useLocation();

    useEffect(() => {
        console.log('Location changed');
        setProfileMenu(false);
    }, [location]);

    const clickSearch = () => {
        setSearch(true);
    };
    const handleClickButton = () => {
        setmodalOpen(0);
    };

    const dispatch = useDispatch();
    const Login = useSelector(state => state.Login);

    function Logout() {
        dispatch({ type: 'LOGOUT' });
    }
    function dropMenu() {
        setProfileMenu(!profileMenu);
    }
    return (
        <header>
            <div className="mainbar">
                <div className="left">
                    <div className="dropdown">
                        <span className="dropbtn">
                            <img className="bar" src={require('../../../images/bar.png')} alt="bar" />
                        </span>
                        <div className="dropdown-content">
                            <Link to="!#" alt="all">
                                직군전체
                            </Link>
                            <Link to="!#">개발</Link> <Link to="!#">경영</Link> <Link to="!#">디자인</Link> <Link to="!#">영업</Link>
                            <Link to="!#">게임제작</Link> <Link to="!#">미디어</Link> <Link to="!#">금융</Link> <Link to="!#">직군전체</Link>
                            <Link to="!#">개발</Link> <Link to="!#">경영</Link> <Link to="!#">디자인</Link> <Link to="!#">영업</Link>
                            <Link to="!#">게임제작</Link> <Link to="!#">미디어</Link> <Link to="!#">금융</Link>
                        </div>
                    </div>
                    {/* <img src={ require('./images/logo.png') } /> */}
                    <Link to="/">
                        <img className="logo" src={require('../../../images/logo.png')} alt="logo" />
                    </Link>
                </div>

                <div className="center">
                    <ul>
                        <li>
                            <Link to="/Job">채용</Link>
                        </li>
                        <li>
                            <Link to="/BookMark">이벤트</Link>
                        </li>
                        <li>
                            <Link to="/">직군별 연봉</Link>
                        </li>
                        <li>
                            <Link to="/">이력서</Link>
                        </li>
                        <li>
                            <Link to="/" className="" aria-label="">
                                커뮤니티
                                <em>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11">
                                        <g
                                            fill="none"
                                            fillRule="evenodd"
                                            fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                                            fontSize="9"
                                            fontWeight="500"
                                        >
                                            <g fill="#36F">
                                                <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                                                    <tspan x="0" y="8">
                                                        New
                                                    </tspan>
                                                </text>
                                            </g>
                                        </g>
                                    </svg>
                                </em>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">프리랜서</Link>
                        </li>
                        <li>
                            <Link to="/aiscore/resume" className="" aria-label="">
                                AI 합격예측
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11">
                                        <g
                                            fill="none"
                                            fillRule="evenodd"
                                            fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                                            fontSize="9"
                                            fontWeight="500"
                                        >
                                            <g fill="#36F">
                                                <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                                                    <tspan x="0" y="8">
                                                        Beta
                                                    </tspan>
                                                </text>
                                            </g>
                                        </g>
                                    </svg>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="right">
                    <div id="searchbutton" onClick={clickSearch}>
                        {SerachSVG()}
                    </div>
                    {Login ? (
                        <>
                            <div className="headerprofile">
                                <img src={bell} alt="bell" />
                                <img src={user} onClick={dropMenu} alt="user" />
                            </div>
                            {profileMenu ? (
                                <div id="profileMenu">
                                    <ul>
                                        <li>MY 윈티드</li>
                                        <li>프로필</li>
                                        <hr />
                                        <li>지원 현황</li>
                                        <li>제안받기 현황</li>
                                        <li>좋아요 </li>
                                        <li>
                                            <Link to="/BookMark"> 북마크</Link>
                                        </li>
                                        <hr />
                                        <li>추천</li>
                                        <li>포인트</li>
                                        <hr />
                                        <li onClick={Logout}>로그아웃</li>
                                    </ul>
                                </div>
                            ) : (
                                ''
                            )}
                        </>
                    ) : (
                        <div id="modalbutton" onClick={handleClickButton}>
                            회원가입/로그인
                        </div>
                    )}

                    <div id="vborder"></div>
                    <div className="dashboardButton">기업 서비스</div>
                </div>
            </div>
            {search ? <Search setSearch={setSearch} /> : ''}
        </header>
    );
};

export default Header;
