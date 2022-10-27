import React from "react";
import styles from './index.module.scss';

interface ISearchItem {
    value:string;
}

const SearchItem = (props: ISearchItem) => {
    const {value } = props;
    return (
        <p className={styles.item}>{value}</p>
    )
}

export default SearchItem;