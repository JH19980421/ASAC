import React from 'react';
import Data from '../Job/JobData.json';
import { useState, useEffect, useCallback } from 'react';
import { Provider, useSelector, useDispatch, connect } from 'react-redux';
import CompanyList from '../Job/CompanyList';
import { Routes, Route, Link } from 'react-router-dom';
const BookMark = () => {
    const state = useSelector(state => state);
    const [data, setData] = useState(Data.CompanyList);

    useEffect(() => {
        console.log(state);
        if (state.length !== 0)
            setData(
                Data.CompanyList.filter(e => {
                    return state.includes('' + e.id);
                })
            );

        console.log(data);
    }, [state]);

    const toString = e => {
        return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    return (
        <div className="job_main">
            <div className="company_list">
                {data.map(e => (
                    <div className="item">
                        <Link to={`../Jobdetail/${e.id}`}>
                            <img src={e.src} alt="" />
                            <div className="detail">
                                <h1>{e.h1}</h1> <h2>{e.h2}</h2>
                                {e.응답률 === 100 ? (
                                    <button>응답률 매우 높음</button>
                                ) : e.응답률 > 50 ? (
                                    <button id="normal">응답률 보통</button>
                                ) : (
                                    <button id="low">응답률 낮음</button>
                                )}
                                <h3>{e.h3}</h3>
                                <p>채용보상금 {toString(`${e.채용보상금}`)} 원</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookMark;
