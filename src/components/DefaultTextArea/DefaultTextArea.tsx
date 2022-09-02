import { ChangeEventHandler } from 'react';
import styles from './DefaultTextArea.module.scss';

export interface DefaultTextAreaProps{
    label: string,
    value:string | number | undefined,
    onChange: Function
}

const DefaultTextArea = ({label, value, onChange}: DefaultTextAreaProps) => {
    return (
        <div>
            <label className={styles.default_label} htmlFor={label} >{label}</label>
            <textarea
            className={styles.default_text_area}
            id={label}
            cols={30}
            rows={10}
            value={value}
            onChange={(e) => {onChange(e.target.value)}}/>
        </div>
    );
}

export default DefaultTextArea;