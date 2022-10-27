import React from "react";
import Icon from "../Icon";
import styles from './index.module.scss';

interface IButton{
    value:string;
    handler: () => void;
    name: string;

}


const Button = (props: IButton) =>{
    const {value, handler, name } = props;

    return(
        <button onClick={handler} className={styles.button}>
            <Icon name={name} className={styles}/>
            {value}
        </button>
    )
}

export default Button;