import React from 'react';
import styles from './TagSearch.module.css';
import { useState, useEffect } from 'react';
import TagCategory from './TagCategory';
import TagCompany from './TagCompany';
import dum from './tagdata.json';

import SubTitle from './tagdata.json';

const TagSearch = () => {
    const [show, setShow] = useState(false);
    function onTag() {
        setShow(!show);
    }

    const [data, setData] = useState(dum.list);
    const [showColor] = useState([]);
    const [tagList, setTagList] = useState([]);

    useEffect(() => {
        tagList.length == 0
            ? setData(dum.list)
            : setData(
                  data.filter(function (list) {
                      var res = false;
                      list.tags.filter(function (tag) {
                          tagList.map(T => {
                              if (tag === T.content) {
                                  res = true;
                                  return res;
                              }
                              if (res) return res;
                          });
                      });
                      return res;
                  })
              );
        console.log(data);
    }, [tagList]);

    // const findByTags = T => {
    //     var res = false;
    //     tagList.map(tag => {
    //         for (let e of T) {
    //             if (e == tag.content) {
    //                 res = true;
    //                 return;
    //             }
    //         }
    //     });
    //     return res;
    // };
    // const findByList = L => {
    //     var array = [];

    //     for (let e of L) {
    //         if (findByTags(e.tags)) {
    //             array = [...array, e];
    //         }
    //     }
    //     return array;
    // };

    function onAddTag(e) {
        const innerText = e.target.innerText;
        const id = e.target.id;

        let res = false;
        tagList.map(element => {
            if (element.id === id) {
                showColor[e.target.id] = false;
                setTagList(tagList.filter(tagList => tagList.id !== id));
                res = true;
                return 0;
            }
        });

        if (res) return;
        else if (tagList.length > 3) {
            alert('최대갯수초과');
            return;
        }

        const temp = { id: id, content: innerText };
        showColor[id] = true;
        setTagList(tagList => [...tagList, temp]);
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
                                onClick={onAddTag}
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

            <TagCompany company={data} />
        </>
    );
};

export default TagSearch;
