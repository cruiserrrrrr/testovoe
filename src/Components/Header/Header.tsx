import React, { useState } from 'react';
import styles from './index.module.scss';
import { Link, NavLink } from "react-router-dom";
import Icon from '../Icon';
import Button from '../Button/Button';
import DropDown from '../DropDown/DropDown';

interface IHeader {

}

const Header = (props: IHeader) => {

    const {} = props;

    const [onExpand, setOnExpand] = useState(true);
    const expand = () => setOnExpand(!onExpand);

    return (
        <div className={styles.header}>
            <div className={styles.header_wrapper}>
                <div className={`${styles.header_item}`}>
                    <Link to="/">
                        <Icon className={`${styles.item_icon}`} name='wrench' />
                        Wrench CRM
                    </Link>
                </div>
                <div className={`${styles.header_item}`}>
                    <Link to="/">
                        <Icon className={`${styles.item_icon}`} name='icperson' />
                        Данила Нуждов
                    </Link>
                </div>
            </div>

            <div className={styles.header_burger__btn}>
                <Button name='burger' handler={expand} />
            </div>

            <div className={`${onExpand ? styles.header_menu : styles.haeder_menu__active}`}>
                <div className={styles.menu_wrapper}>
                    <div className={styles.menu_header}>
                        <div className={`${styles.header_item}`}>
                            <Link to="/">
                                <Icon className={`${styles.item_icon}`} name='icperson' />
                                Данила Нуждов
                            </Link>
                        </div>
                        <div className={`${styles.header_item}`}>
                            <Button name='burger' handler={expand} />
                        </div>
                    </div>
                    <div className={styles.nav_wrapper}>
                        <nav className={styles.header_nav}>
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
                            <DropDown />
                            <NavLink className={({ isActive }) => isActive ? styles.active_link : styles.link} to="/exit" onClick={expand}>
                                <Icon name="exit" className={`${styles.deep_icon}`} />
                                Выход
                            </NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;