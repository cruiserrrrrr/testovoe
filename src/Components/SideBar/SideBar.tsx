import React, { useState } from "react";
import styles from './index.module.scss';
import {NavLink} from "react-router-dom";
import Icon from "../Icon";
import DropDown from "../DropDown/DropDown";


interface ISidebar {
    
}

const SideBar = (props: ISidebar) => {

    const { } = props;
    
    const [onExpand, setOnExpand] = useState(true);
    const expand = () => setOnExpand(!onExpand);

    return (
        <div className={styles.sidebar__wrapper}>
            <div className={styles.sidebar__logo}>
                <h2 className={styles.logo}>Меню</h2>
            </div>
            <nav className={styles.sidebar_nav}>
                <NavLink end className={({ isActive }) => isActive ? styles.active_link : styles.link} to="/" onClick={expand}>
                    <Icon name="main" className={`${styles.deep_icon}`} />
                    Главная
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.active_link : styles.link} to="/adress" onClick={expand}>
                    <Icon name="search" className={`${styles.deep_icon}`} />
                    Поиск адресов
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.active_link : styles.link} to="/table" onClick={expand}>
                    <Icon name="table" className={`${styles.deep_icon}`} />
                    Таблицы
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.active_link : styles.link} to="/calendar" onClick={expand}>
                    <Icon name="calendar" className={`${styles.deep_icon}`} />
                    Календарь
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.active_link : styles.link} to="/maps" onClick={expand}>
                    <Icon name="maps" className={`${styles.deep_icon}`} />
                    Карты
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.active_link : styles.link} to="/widgets" onClick={expand}>
                    <Icon name="widget" className={`${styles.deep_icon}`} />
                    Виджеты
                </NavLink>
                <DropDown/>
                <NavLink className={({ isActive }) => isActive ? styles.active_link : styles.link} to="/exit" onClick={expand}>
                    <Icon name="exit" className={`${styles.deep_icon}`} />
                    Выход
                </NavLink>
            </nav>
        </div>
    )
}

export default SideBar;