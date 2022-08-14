import axios from 'axios';
import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { BiRightArrow } from 'react-icons/bi';
import { BsCheck } from 'react-icons/bs';
import Header from '../../../../components/Header/Header';
import styles from './SetCode.module.scss';

const SetCode = () => {
    let [text, setText] = useState('');
    const input1 = useRef<HTMLInputElement>(null);
    const input3 = useRef<HTMLInputElement>(null);
    const input2 = useRef<HTMLInputElement>(null);
    const input4 = useRef<HTMLInputElement>(null);

    const [newPass, setNewPass] = useState('');
    const [rePass, setRePass] = useState('');

    const [hasNumber, setHasNumber] = useState(false);
    const [hasSpecial, sethasSpecial] = useState(false);
    const [hasMoreEigth, setHasMoreEigth] = useState(false);

    function nextFocus(length: number, n?: React.RefObject<HTMLInputElement> | null) {
        if (length == 2) {
            n?.current?.focus();
        }
    }

    function previousFocus(length: number, n?: React.RefObject<HTMLInputElement> | null) {
        if (length == 0) {
            n?.current?.focus();
        }
    }

    function confirmPass() {
        if (newPass !== rePass) {
            return;
        }

        if (newPass.length < 8 && rePass.length < 8) {
            return;
        }

        if (!hasNumber) {
            return
        }

        console.log('senha correta');
    }

    /* async function getTitle() {
        let response = await axios.get('http://app-api.synas.com.br/api/plan');
        console.log(response.data);

    } */

    /* async function postTest() {
        let post = await axios.post('', {
            name: "Juan",
            lastname: "Jurado"
        }, {
            headers: {
                'Authorization': 'Berier'
            }
        });
    } */

    function onChange(e: any, n?: React.RefObject<HTMLInputElement> | null, p?: React.RefObject<HTMLInputElement>) {
        const { name, value } = e.target;
        text = value;
        nextFocus(text.length, n);
        previousFocus(text.length, p);
    }

    function containsNumber(str: string) {
        return /\d/.test(str);
    }

    function containsSpecialCharacters(str: string) {
        return /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?@]/g.test(str);
    }


    useEffect(() => {
        console.log('first');
    }, []);

    useEffect(() => {
        let checkNumber = containsNumber(newPass);
        setHasNumber(checkNumber);
        let checkSpecialChars = containsSpecialCharacters(newPass);
        let countChars = newPass.length >= 8;
        setHasMoreEigth(countChars);
        sethasSpecial(checkSpecialChars);
    }, [newPass])

    return <div>
        <Header
            title='Criar Nova Senha'
        />
        <div className={styles.content}>
            <p>Digite o código de verificação que enviamos para o seu e-mail</p>
            <label>Código</label>
            <div className={styles.inputs}>
                <input type="text" maxLength={2} name='input1' ref={input1} onChange={(e) => onChange(e, input2)} />
                <input type="text" maxLength={2} name='input2' ref={input2} onChange={(e) => onChange(e, input3, input1)} />
                <input type="text" maxLength={2} name='input3' ref={input3} onChange={(e) => onChange(e, input4, input2)} />
                <input type="text" maxLength={2} name='input4' ref={input4} onChange={(e) => onChange(e, null, input3)} />
            </div>
            <p className={styles.alert}>Crie uma nova senha contendo 8 digitos ou mais</p>
        </div>
        <div className={styles.pass}>
            <label htmlFor="pass">Nova Senha</label>
            <input type="password" name="pass" id="pass" value={newPass} onChange={(e) => setNewPass(e.target.value)} />
            <label htmlFor="repass">Repita a senha</label>
            <input type="password" className={styles.repass} name="repass" id="repass" value={rePass} onChange={(e) => setRePass(e.target.value)} />
            <div className={styles.information}>
                {hasNumber && <p><small>Tem número</small><BsCheck size={20} /></p>}
                {hasSpecial && <p><small>Tem caractere especial</small><BsCheck size={20} /></p>}
                {hasMoreEigth && <p><small>Tem mais de 8 caracteres</small><BsCheck size={20} /></p>}
            </div>
        </div>
        <div onClick={() => {
        }} className={styles.next}>
            <p>Concluir</p>
            <BiRightArrow size={40} />
        </div>
    </div>;
}

export default SetCode;