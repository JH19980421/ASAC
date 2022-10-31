import React from 'react';

const CompanyList = () => {
    const toString = e => {
        return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    return (
        <div className="company_list">
            <div className="item">
                <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F21749%2Fymimve1pltmzbgpg__400_400.jpg&w=400&q=75"
                    alt=""
                />
                <div className="detail">
                    <h1>ML 엔지니어</h1> <h2>올빅뎃</h2> <button>응답률 매우 높음</button> <h3>서울・한국</h3>{' '}
                    <p>
                        채용보상금
                        {toString(1000000)}원
                    </p>
                </div>
            </div>
            <div className="item">
                <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F23530%2F87vxxhkryzsrpt1x__400_400.jpg&w=400&q=75"
                    alt=""
                />
                <div className="detail">
                    <h1>ML 엔지니어</h1> <h2>올빅뎃</h2> <button>응답률 매우 높음</button> <h3>서울・한국</h3> <p>채용보상금 {toString(1000000)}원</p>
                </div>
            </div>
            <div className="item">
                <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F30060%2F2kv1lzaldpg8usv1__400_400.jpg&w=400&q=75"
                    alt=""
                />
                <div className="detail">
                    <h1>[전문연구요원 가능] 의료영상 분석을 위한 인공지능 연구원</h1> <h2>메디인테크</h2> <button>응답률 매우 높음</button>
                    <h3>서울・한국</h3> <p>채용보상금 {toString(1000000)}원</p>
                </div>
            </div>
            <div className="item">
                <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F21749%2Fymimve1pltmzbgpg__400_400.jpg&w=400&q=75"
                    alt=""
                />
                <div className="detail">
                    <h1>ML 엔지니어</h1> <h2>올빅뎃</h2> <button>응답률 매우 높음</button> <h3>서울・한국</h3> <p>채용보상금 {toString(1000000)}원</p>
                </div>
            </div>
            <div className="item">
                <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F23530%2F87vxxhkryzsrpt1x__400_400.jpg&w=400&q=75"
                    alt=""
                />
                <div className="detail">
                    <h1>ML 엔지니어</h1> <h2>올빅뎃</h2> <button>응답률 매우 높음</button> <h3>서울・한국</h3> <p>채용보상금 {toString(1000000)}원</p>
                </div>
            </div>
            <div className="item">
                <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F30060%2F2kv1lzaldpg8usv1__400_400.jpg&w=400&q=75"
                    alt=""
                />
                <div className="detail">
                    <h1>[전문연구요원 가능] 의료영상 분석을 위한 인공지능 연구원</h1> <h2>메디인테크</h2> <button>응답률 매우 높음</button>
                    <h3>서울・한국</h3> <p>채용보상금 {toString(1000000)}원</p>
                </div>
            </div>
            <div className="item">
                <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F21749%2Fymimve1pltmzbgpg__400_400.jpg&w=400&q=75"
                    alt=""
                />
                <div className="detail">
                    <h1>ML 엔지니어</h1> <h2>올빅뎃</h2> <button>응답률 매우 높음</button> <h3>서울・한국</h3> <p>채용보상금 {toString(1000000)}원</p>
                </div>
            </div>
            <div className="item">
                <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F23530%2F87vxxhkryzsrpt1x__400_400.jpg&w=400&q=75"
                    alt=""
                />
                <div className="detail">
                    <h1>ML 엔지니어</h1> <h2>올빅뎃</h2> <button>응답률 매우 높음</button> <h3>서울・한국</h3> <p>채용보상금 {toString(1000000)}원</p>
                </div>
            </div>
            <div className="item">
                <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F30060%2F2kv1lzaldpg8usv1__400_400.jpg&w=400&q=75"
                    alt=""
                />
                <div className="detail">
                    <h1>[전문연구요원 가능] 의료영상 분석을 위한 인공지능 연구원</h1> <h2>메디인테크</h2> <button>응답률 매우 높음</button>
                    <h3>서울・한국</h3> <p>채용보상금 {toString(1000000)}원</p>
                </div>
            </div>
            <div className="item">
                <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F21749%2Fymimve1pltmzbgpg__400_400.jpg&w=400&q=75"
                    alt=""
                />
                <div className="detail">
                    <h1>ML 엔지니어</h1> <h2>올빅뎃</h2> <button>응답률 매우 높음</button> <h3>서울・한국</h3> <p>채용보상금 {toString(1000000)}원</p>
                </div>
            </div>
            <div className="item">
                <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F23530%2F87vxxhkryzsrpt1x__400_400.jpg&w=400&q=75"
                    alt=""
                />
                <div className="detail">
                    <h1>ML 엔지니어</h1> <h2>올빅뎃</h2> <button>응답률 매우 높음</button> <h3>서울・한국</h3> <p>채용보상금 {toString(1000000)}원</p>
                </div>
            </div>
            <div className="item">
                <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F30060%2F2kv1lzaldpg8usv1__400_400.jpg&w=400&q=75"
                    alt=""
                />
                <div className="detail">
                    <h1>[전문연구요원 가능] 의료영상 분석을 위한 인공지능 연구원</h1> <h2>메디인테크</h2> <button>응답률 매우 높음</button>
                    <h3>서울・한국</h3> <p>채용보상금 {toString(1000000)}원</p>
                </div>
            </div>
            <div className="item">
                <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F21749%2Fymimve1pltmzbgpg__400_400.jpg&w=400&q=75"
                    alt=""
                />
                <div className="detail">
                    <h1>ML 엔지니어</h1> <h2>올빅뎃</h2> <button>응답률 매우 높음</button> <h3>서울・한국</h3> <p>채용보상금 {toString(1000000)}원</p>
                </div>
            </div>
            <div className="item">
                <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F23530%2F87vxxhkryzsrpt1x__400_400.jpg&w=400&q=75"
                    alt=""
                />
                <div className="detail">
                    <h1>ML 엔지니어</h1> <h2>올빅뎃</h2> <button>응답률 매우 높음</button> <h3>서울・한국</h3> <p>채용보상금 {toString(1000000)}원</p>
                </div>
            </div>
            <div className="item">
                <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F30060%2F2kv1lzaldpg8usv1__400_400.jpg&w=400&q=75"
                    alt=""
                />
                <div className="detail">
                    <h1>[전문연구요원 가능] 의료영상 분석을 위한 인공지능 연구원</h1> <h2>메디인테크</h2> <button>응답률 매우 높음</button>
                    <h3>서울・한국</h3> <p>채용보상금 {toString(1000000)}원</p>
                </div>
            </div>
            <div className="item">
                <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F21749%2Fymimve1pltmzbgpg__400_400.jpg&w=400&q=75"
                    alt=""
                />
                <div className="detail">
                    <h1>ML 엔지니어</h1> <h2>올빅뎃</h2> <button>응답률 매우 높음</button> <h3>서울・한국</h3> <p>채용보상금 {toString(1000000)}원</p>
                </div>
            </div>
            <div className="item">
                <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F23530%2F87vxxhkryzsrpt1x__400_400.jpg&w=400&q=75"
                    alt=""
                />
                <div className="detail">
                    <h1>ML 엔지니어</h1> <h2>올빅뎃</h2> <button>응답률 매우 높음</button> <h3>서울・한국</h3> <p>채용보상금 {toString(1000000)}원</p>
                </div>
            </div>
            <div className="item">
                <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F30060%2F2kv1lzaldpg8usv1__400_400.jpg&w=400&q=75"
                    alt=""
                />
                <div className="detail">
                    <h1>[전문연구요원 가능] 의료영상 분석을 위한 인공지능 연구원</h1> <h2>메디인테크</h2> <button>응답률 매우 높음</button>
                    <h3>서울・한국</h3> <p>채용보상금 {toString(1000000)}원</p>
                </div>
            </div>
            <div className="item">
                <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F21749%2Fymimve1pltmzbgpg__400_400.jpg&w=400&q=75"
                    alt=""
                />
                <div className="detail">
                    <h1>ML 엔지니어</h1> <h2>올빅뎃</h2> <button>응답률 매우 높음</button> <h3>서울・한국</h3> <p>채용보상금 {toString(1000000)}원</p>
                </div>
            </div>
            <div className="item">
                <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F23530%2F87vxxhkryzsrpt1x__400_400.jpg&w=400&q=75"
                    alt=""
                />
                <div className="detail">
                    <h1>ML 엔지니어</h1> <h2>올빅뎃</h2> <button>응답률 매우 높음</button> <h3>서울・한국</h3> <p>채용보상금 {toString(1000000)}원</p>
                </div>
            </div>
            <div className="item">
                <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F30060%2F2kv1lzaldpg8usv1__400_400.jpg&w=400&q=75"
                    alt=""
                />
                <div className="detail">
                    <h1>[전문연구요원 가능] 의료영상 분석을 위한 인공지능 연구원</h1> <h2>메디인테크</h2> <button>응답률 매우 높음</button>
                    <h3>서울・한국</h3> <p>채용보상금 {toString(1000000)}원</p>
                </div>
            </div>
        </div>
    );
};

export default CompanyList;
