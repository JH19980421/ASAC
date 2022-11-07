import React from 'react';
import { useState, useEffect } from 'react';
import styles from './Redux.module.css';
import { useSelector, useDispatch } from 'react-redux';

function Counter() {}
const Redux = () => {
    const [number, setNumber] = useState();

    return (
        <div className={styles.root}>
            root
            <Left1 />
            <div className={styles.box}>b</div>
        </div>
    );
};

function Left1() {
    return (
        <div className={styles.box}>
            left1 <Left2 />
        </div>
    );
}
function Left2() {
    return (
        <div className={styles.box}>
            left2 <Left3 />
        </div>
    );
}
function Left3() {
    const number = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return <div className={styles.box}>left3</div>;
}

export default Redux;
