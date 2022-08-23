import { ReactChild, ReactChildren } from 'react';
import { JsxElement } from 'typescript';
import styles from './ButtonSubmit.module.scss';

export interface ButtonSubmitProps {
    children: ReactChildren | ReactChild | ReactChildren[] | ReactChild[],
    disabled: boolean
}

const ButtonSubmit = ({ children, disabled }: ButtonSubmitProps) => {
    return (
        <button onClick={() => { }} className={styles.submit_btn} disabled={disabled}>
            {children}
        </button>
    );
}

export default ButtonSubmit;