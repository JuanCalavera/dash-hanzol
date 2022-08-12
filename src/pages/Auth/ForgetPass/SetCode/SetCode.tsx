import React from 'react';
import { useRef, useState } from 'react';
import { BiRightArrow } from 'react-icons/bi';
import Header from '../../../../components/Header/Header';
import styles from './SetCode.module.scss';

const SetCode = () => {
    let [text, setText] = useState('');
    const input1 = useRef<HTMLInputElement>(null);
    const input3 = useRef<HTMLInputElement>(null);
    const input2 = useRef<HTMLInputElement>(null);
    const input4 = useRef<HTMLInputElement>(null);

    function nextFocus(length: number, n: React.RefObject<HTMLInputElement>) {
        if (length == 2) {
            n.current?.focus();
        }
    }

    function onChange(e: any, n: React.RefObject<HTMLInputElement>) {
        const { name, value } = e.target;
        text = value;
        nextFocus(text.length, n);
    }

    return <div>
        <Header
            title='Criar Nova Senha'
        />
        <div className={styles.content}>
            <p>Digite o código de verificação que enviamos para o seu e-mail</p>
            <label>Código</label>
            <div className={styles.inputs}>
                <input type="text" maxLength={2} name='input1' ref={input1} onChange={(e) => onChange(e, input2)} />
                <input type="text" maxLength={2} name='input2' ref={input2} onChange={(e) => onChange(e, input3)} />
                <input type="text" maxLength={2} name='input3' ref={input3} onChange={(e) => onChange(e, input4)} />
                <input type="text" maxLength={2} name='input4' ref={input4} />
            </div>
            <p className={styles.alert}>Crie uma nova senha contendo 8 digitos ou mais</p>
        </div>
        <div className={styles.pass}>
            <label htmlFor="pass">Nova Senha</label>
            <input type="password" name="pass" id="pass" />
            <label htmlFor="repass">Repita a senha</label>
            <input type="password" name="repass" id="repass" />
        </div>
        <div className={styles.next}>
            <p>Concluir</p>
            <BiRightArrow size={40} />
        </div>
    </div>;
}

export default SetCode;