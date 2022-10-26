import React from 'react';
import ListPrint from './ListPrint';

const ListCareer = props => {
    return (
        <>
            <div className="divider"></div>

            <div className="subsection">
                <div className="titleline">
                    <button></button>
                    <div className="title">
                        <h2>3분만에 읽는 Wanted+ 아티클</h2>
                        <a href="/#">
                            <p>아티클 전체보기 {'>'}</p>
                        </a>
                    </div>
                    <button>
                        <img src={require('../../../images/right-arrow.png')} alt="" />
                    </button>
                </div>
                <ListPrint data={props.data} />
            </div>
        </>
    );
};

export default ListCareer;
// {props.data.map(List => (
//     // <li key={data.id}>
//     //     <Link to={'/'}>
//     //         <img src={data.src} alt="" />
//     //         <h1>{data.title}</h1>

//     //         <p>data.content</p>
//     <p>
//         {List.content.map(tagData => (
//             <>{tagData.tag}</>
//         ))}
//     </p>

//     //         <div className="writer">
//     //             <p>
//     //                 {data.logo !== '' && <img src={data.logo} alt="" />}

//     //                 {data.writer}
//     //             </p>
//     //         </div>
//     //     </Link>
//     // </li>
// ))}
