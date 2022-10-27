import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Icon from "../Icon";
import styles from './index.module.scss';

interface IDropDown {

}

const DropDown = (props: IDropDown) => {

    const { } = props;

    const [dropDowmActive, setDropDowmActive] = useState(true);
    const onActive = () => setDropDowmActive(!dropDowmActive);

    const [onExpand, setOnExpand] = useState(true);
    const expand = () => setOnExpand(!onExpand);

    return (
        <div className={styles.dropdown}>
            <div className={styles.content} onClick={onActive}>
                <Icon name="sett"/>
                Настройки
                <div className={`${dropDowmActive ? styles.drop_status__off : styles.drop_status__on}`}>
                    <Icon name="triangle" className={styles.icon_size }/>
                </div>
            </div>
            <div onChange={onActive} className={`${dropDowmActive ? styles.dropdown_items : styles.dropdown_active}`}>
                <NavLink end className={({ isActive }) => isActive ? styles.active_link : styles.link} to="/profile-settings" onClick={expand}>
                    <Icon name="profileic" className={styles.deep_icon} />
                    Настройки профиля
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.active_link : styles.link} to="/finance" onClick={expand}>
                    <Icon name="finance" className={styles.deep_icon} />
                    Управление финансами
                </NavLink>
            </div>
        </div>
    )
}

export default DropDown;