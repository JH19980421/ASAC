import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CompanyList from './CompanyList';
import Hiring from './Hiring';
const Job = props => {
    // const [ style, setStyle ] = useState({display: 'none'})

    // setStyle({display: 'block'})
    // /setStyle({display: 'none'})
    return (
        <div>
            <div className="category">
                <div className="joblist">
                    <p>전체</p>
                    <button>
                        <img src={require('../../../images/downarrow.png')} alt="" />
                    </button>
                    <div className="dropdown_joblist">
                        <Link to="../Jobdetail">직군전체</Link> <Link to="../Jobdetail">개발</Link> <Link to="../Jobdetail">경영</Link>
                        <Link to="../Jobdetail">디자인</Link> <Link to="../Jobdetail">영업</Link> <Link to="../Jobdetail">게임제작</Link>
                        <Link to="../Jobdetail">미디어</Link> <Link to="../Jobdetail">금융</Link> <Link to="../Jobdetail">개발</Link>
                        <Link to="../Jobdetail">경영</Link> <Link to="../Jobdetail">디자인</Link> <Link to="../Jobdetail">영업</Link>
                        <Link to="../Jobdetail">게임제작</Link> <Link to="../Jobdetail">미디어</Link> <Link to="../Jobdetail">금융</Link>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="message">
                    <h2>직군을 선택 해주세요</h2>
                </div>
                <div className="joblist" style={{ display: 'none' }}>
                    <p id="sub_joblist">개발전체</p>
                    <button>
                        <img src={require('../../../images/downarrow.png')} alt="" />
                    </button>
                </div>
            </div>
            <div className="filter">
                <div className="filterlist">
                    <div className="left">
                        <button>
                            <p>지역</p>
                            <p>부산</p>
                        </button>
                        <button>
                            <p>경력</p>
                            <p>
                                전체
                                <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="https://www.w3.org/2000/svg">
                                    <path
                                        d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z"
                                        fillRule="#333333"
                                    ></path>
                                </svg>
                            </p>
                        </button>
                        <button>
                            <p>
                                기술스택
                                <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="https://www.w3.org/2000/svg">
                                    <path
                                        d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z"
                                        fillRule="#333333"
                                    ></path>
                                </svg>
                            </p>
                        </button>
                    </div>

                    <div className="right">
                        <button>
                            <p>
                                응답률순
                                <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="https://www.w3.org/2000/svg">
                                    <path
                                        d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z"
                                        fillRule="#333333"
                                    ></path>
                                </svg>
                            </p>
                        </button>
                    </div>
                </div>
                <div className="keywords">
                    <ul className="keywordslides">
                        <li> <button>연봉이 최고의 복지</button> </li> <li> <button>재택 근무</button> </li> <li> <button>퇴사율 10%이하</button> </li> <li> <button>급성장 중</button> </li> <li> <button> 벙역특례</button> </li> <li> <button>50인 이하</button> </li> <li> <button>50인 이상</button> </li> <li> <button>업력 5년 이상</button> </li> <li> <button>50인 이상</button> </li> <li> <button>업력 5년 이상</button> </li> <li> <button>급성장 중</button> </li> <li> <button> 벙역특례</button> </li> <li> <button>50인 이하</button> </li> <li> <button>50인 이상</button> </li> <li> <button>급성장 중</button> </li> <li> <button> 벙역특례</button> </li> </ul>
                    <p className="keywordsbutton">
                        <span className="prev">
                            <img src={require('../../../images/left-arrow.png')} alt="" />
                        </span>
                        <span className="next">
                            <img src={require('../../../images/right-arrow.png')} alt="" />
                        </span>
                    </p>
                </div>
            </div>

            <div className="job_main">
                <div className="bookmark">
                    <Link to="/#">
                        <p>
                            <svg width="13" height="17" viewBox="0 0 13 17" style={{ color: '#36f' }}>
                                <defs>
                                    <path
                                        id="bookmarkIconFill"
                                        d="M6.25 13.21L.905 16.22c-.403.228-.905-.06-.905-.517V.596C0 .267.27 0 .605 0h11.29c.334 0 .605.267.605.596v15.107c0 .458-.502.745-.905.518L6.25 13.209z"
                                    ></path>
                                </defs>
                                <g fillRule="none" fillRule="evenodd" transform="translate(.188)">
                                    <use fillRule="currentColor" href="#bookmarkIconFill"></use>
                                </g>
                            </svg>
                            북마크모아보기
                            <svg width="12" height="12" viewBox="0 0 12 12">
                                <path
                                    fillRule="currentColor"
                                    d="M4.22 9.72a.75.75 0 001.06 1.06l4.25-4.25a.75.75 0 000-1.06L5.28 1.22a.75.75 0 00-1.06 1.06L7.94 6 4.22 9.72z"
                                ></path>
                            </svg>
                        </p>
                    </Link>
                </div>
                <Hiring />
                <CompanyList />
            </div>
        </div>
    );
};

export default Job;
