import { ChangeEvent, ChangeEventHandler } from 'react';
import styles from './DefaultInput.module.scss';

export interface DefaultInputProps {
    label: string,
    type: string,
    autoComplete: string,
    value: any | undefined,
    onChange: ChangeEventHandler
}

const DefaultInput = ({label, type, autoComplete, value, onChange}: DefaultInputProps) => {
    return (
        <div>
            <label htmlFor={label} className={styles.default_label}>{label}</label>
            <input
                id={label}
                type={type}
                autoComplete={autoComplete}
                className={styles.default_input}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}


export default DefaultInput;