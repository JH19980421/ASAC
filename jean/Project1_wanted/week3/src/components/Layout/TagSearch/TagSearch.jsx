import React from 'react';
import styles from './TagSearch.module.css';
import { useState, useEffect } from 'react';
import TagCategory from './TagCategory';
import TagCompany from './TagCompany';
import dum from './tagdata.json';

const TagSearch = () => {
    const [show, setShow] = useState(false);
    function onTag() {
        setShow(!show);
    }

    const [showColor, setShowColor] = useState([]);
    const [tagList, setTagList] = useState([]);
    const [DATA, setFilter] = useState();

    function onAddTag(e) {
        const innerText = e.target.innerText;
        const id = e.target.id;

        let res = false;
        let length = tagList.length;

        tagList.map(element => {
            if (element.id === id) {
                onRemove(e);
                length--;
                res = true;
                return 0;
            }
        });

        if (res) return;
        else if (length > 3) {
            alert('최대갯수초과');
            return;
        }

        const temp = { id: id, content: innerText };
        showColor[id] = true;
        setTagList(tagList => [...tagList, temp]);

        // DATA.filter(dum.list.map(L => L.tags.map(T => tagList.map(tag => tag === T))));
        console.log(dum.list);
        dum.list.filter(function (e) {
            return e.code === '1234' && e.addr === '부산시 동구 수영동';
        });

        // console.log(DATA);
    }
    function onRemove(e) {
        const value = e.target.id;
        showColor[e.target.id] = false;
        setTagList(tagList.filter(tagList => tagList.id !== value));
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.headerClass}>
                    {tagList.map(element => (
                        <h2 key={element.id}>
                            {element.content}
                            <img
                                className={styles.closeButton}
                                id={element.id}
                                alt={element.content}
                                onClick={onRemove}
                                src={require('../../../images/close.png')}
                            />
                        </h2>
                    ))}

                    <p className={`${styles.tagShow} ${show ? styles.turn : ''} `} onClick={onTag}>
                        {show ? '닫기' : '전체보기'}
                        <img src={require('../../../images/bluedownarrow.png')} alt="" />
                    </p>
                </div>
                <div className={styles.tagClass}>
                    <h1>추천</h1>
                    <button className={` ${styles.button} ${showColor[2] ? styles.color : ''}`} id="2" onClick={onAddTag}>
                        #연봉상위1%
                    </button>
                    <button className={` ${styles.button} ${showColor[11] ? styles.color : ''}`} id="11" onClick={onAddTag}>
                        #퇴사율5퍼이하
                    </button>
                    <button className={` ${styles.button} ${showColor[5] ? styles.color : ''}`} id="5" onClick={onAddTag}>
                        #연봉상위11~20%
                    </button>
                    <button className={` ${styles.button} ${showColor[12] ? styles.color : ''}`} id="12" onClick={onAddTag}>
                        #301~1,000명
                    </button>
                </div>
            </div>
            {show && (
                <div className={styles.tagWrapperContainer}>
                    <ul className={styles.tagWrapper}>
                        <TagCategory tags={dum.tags} showColor={showColor} onAddTag={onAddTag} />
                    </ul>
                </div>
            )}

            {/* <TagCompany company={filter.list} /> */}
        </>
    );
};

export default TagSearch;
