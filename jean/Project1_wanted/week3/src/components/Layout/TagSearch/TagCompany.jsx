import React from 'react';
import styles from './TagSearch.module.css';

const TagCompany = props => {
    const company = props.company;
    function tagReturn(e) {
        let str = '';
        for (let t of e) {
            str = str + '  ' + t;
        }
        return str;
    }

    return (
        <div className={styles.listContainer}>
            <div className={styles.list}>
                {company.map((A, index) => (
                    <div className={styles.company} key={index + 500}>
                        <div className={styles.title}>
                            <img className={styles.logo} src={A.url} alt="" />
                            <h3>{A.name}</h3>
                            <button> 팔로우 </button>
                        </div>
                        <div className={styles.tags} key={index + 600}>
                            {tagReturn(A.tags)}
                            {/* {A.tags.map(B => (
                                <>{B}</>
                            ))} */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TagCompany;
