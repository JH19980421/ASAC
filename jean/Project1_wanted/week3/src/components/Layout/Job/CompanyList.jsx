import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';

const CompanyList = ({ page, loading }) => {
    const toString = e => {
        return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    function List_UI() {
        var arr = [];

        for (var i = 0; i < 4 * page; i++) {
            arr.push(
                <>
                    <div className="item">
                        <Link to={`../Jobdetail/${i + 10000}`}>
                            <img
                                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F21749%2Fymimve1pltmzbgpg__400_400.jpg&w=400&q=75"
                                alt=""
                            />
                            <div className="detail">
                                <h1>ML 엔지니어</h1> <h2>올빅뎃</h2> <button>응답률 매우 높음</button> <h3>서울・한국</h3>
                                <p>채용보상금 {toString(1000000)}원</p>
                            </div>
                        </Link>
                    </div>
                    <div className="item">
                        <Link to={`../Jobdetail/${i + 20000}`}>
                            <img
                                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F23530%2F87vxxhkryzsrpt1x__400_400.jpg&w=400&q=75"
                                alt=""
                            />
                            <div className="detail">
                                <h1>ML 엔지니어</h1> <h2>올빅뎃</h2> <button>응답률 매우 높음</button> <h3>서울・한국</h3>
                                <p>채용보상금 {toString(1000000)}</p>
                            </div>
                        </Link>
                    </div>
                </>
            );
        }
        return arr;
    }

    return (
        <div className="company_list">
            {List_UI()}

            {loading ? (
                <div className="loading">
                    <img src={require('../../../images/loading.gif')} alt="" />
                </div>
            ) : (
                ''
            )}
        </div>
    );
};

export default CompanyList;
