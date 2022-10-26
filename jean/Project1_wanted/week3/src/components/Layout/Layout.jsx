import React from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header/Header';
import Job from './Job/Job';
import Mainpage from './Main/Main';
import Jobdetail from './Jobdetail/Jobdetail';
import Modal from './Header/Modal';
import TagSearch from './TagSearch/TagSearch';
const Layout = props => {
    const [modalOpen, setmodalOpen] = useState(false);

    return (
        <>
            <Header setmodalOpen={setmodalOpen} />
            {modalOpen && <Modal setmodalOpen={setmodalOpen} />}

            <Routes>
                <Route path="TagSearch" element={<TagSearch />} />
                <Route path="Job" element={<Job />} />
                <Route path="Jobdetail" element={<Jobdetail />} />
                <Route path="/" element={<Mainpage />} />
            </Routes>
        </>
    );
};

export default Layout;
