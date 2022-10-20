import React from 'react';
import { Routes,Route,Link} from 'react-router-dom';
import Header from './Header/Header'
import Job from './Job/Job'
import Mainpage from './Main/Main'
import Jobdetail from './Jobdetail/Jobdetail'
const Layout = (props) => {
    return (
        <>
            <Header/>
            <Routes>
              
                <Route path='Job' element={<Job />} />
                <Route path='Jobdetail' element={<Jobdetail />} />
                <Route path='/' element={<Mainpage />} />
            </Routes>
        </>
    )
}

export default Layout