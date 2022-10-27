import React from "react";
import styles from './index.module.scss';

interface IInput {
    handler: (e: string) => void;
    type: string;
    value: string;
    placeholder: string;
    enterPress: () => void;
}

const Input = (props: IInput) => {
    const { type, value, handler, placeholder, enterPress } = props;

    const onEnter = (e) => {
        if(e.key === "Enter")enterPress();
    }

    return (
        <input placeholder={placeholder} className={styles.input} type={type} defaultValue={value} onKeyDown={onEnter} onChange={(e) => handler(e.target.value)} />
    )
}

export default Input;