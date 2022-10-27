import React, {useState } from 'react';
import SideBar from '../../Components/SideBar/SideBar';
import styles from './index.module.scss'
import { Routes, Route } from "react-router";
import Header from '../../Components/Header/Header';
import NewsPage from '../NewsPage/NewsPage';
import SearchPage from '../SearchPage/SearchPage';


const App = () => {

    return (
        <div className={styles.app}>
            <Header />
            <div className={styles.content_wrapper}>
                <SideBar />
                <Routes>
                    <Route path='/' element={<NewsPage />} />
                    <Route path='/adress' element={<SearchPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
