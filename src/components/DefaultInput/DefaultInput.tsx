import { ChangeEvent, ChangeEventHandler } from 'react';
import styles from './DefaultInput.module.scss';

export interface DefaultInputProps {
    label: string,
    type: string,
    autoComplete: string,
    value: any | undefined,
    onChange: Function
    min: string | undefined
}

const DefaultInput = ({label, type, autoComplete, value, onChange, min}: DefaultInputProps) => {
    return (
        <div>
            <label htmlFor={label} className={styles.default_label}>{label}</label>
            <input
                id={label}
                type={type}
                min={min}
                autoComplete={autoComplete}
                className={styles.default_input}
                value={value}
                onChange={(e) => {onChange(e.target.value)}}
            />
        </div>
    );
}


export default DefaultInput;