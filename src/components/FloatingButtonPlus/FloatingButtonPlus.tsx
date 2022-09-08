import { MouseEventHandler } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import styles from './FloatingButtonPlus.module.scss';

export interface FloatingButtonPLusInterface{
    onClick: MouseEventHandler,
}

const FloatingButtonPlus = ({onClick}: FloatingButtonPLusInterface) => {
    return (
        <div
            className={styles.plus_btn_container}
            onClick={onClick}
        >
            <div className={styles.plus_btn_background}></div>
            <AiFillPlusCircle className={styles.plus_btn} />
        </div>
    );
}

export default FloatingButtonPlus;