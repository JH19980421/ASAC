import React from 'react';
import styles from './TagSearch.module.css';

const TagCompany = props => {
    const company = props.company;

    return (
        <div className={styles.listContainer}>
            <div className={styles.list}>
                {company.map(A => (
                    <div className={styles.company}>
                        <div className={styles.title}>
                            <img className={styles.logo} src={A.url} alt="" />
                            <h3>{A.name}</h3>
                            <button> 팔로우 </button>
                        </div>
                        <div className={styles.tags}>
                            {A.tags.map(B => (
                                <>{B} </>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TagCompany;
