import axios from 'axios';
import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BiRightArrow } from 'react-icons/bi';
import { BsCheck } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import { baseUrl } from '../../../../utils/auth';
import styles from './SetCode.module.scss';

const SetCode = () => {
    let [text, setText] = useState('');
    const input1 = useRef<HTMLInputElement>(null);
    const input3 = useRef<HTMLInputElement>(null);
    const input2 = useRef<HTMLInputElement>(null);
    const input4 = useRef<HTMLInputElement>(null);

    const [newPass, setNewPass] = useState<string>('');
    const [rePass, setRePass] = useState<string>('');
    const [notEqual, setNotEqual] = useState<boolean>(false);
    const [passError, setPassError] = useState<boolean>(false);
    const [passSuccess, setPassSuccess] = useState<boolean>(false);

    const [hasNumber, setHasNumber] = useState(false);
    const [hasSpecial, sethasSpecial] = useState(false);
    const [hasMoreEigth, setHasMoreEigth] = useState(false);

    const navigate = useNavigate();

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
        let codePass = `${input1.current?.value}${input2.current?.value}${input3.current?.value}${input4.current?.value}`;

        if (newPass !== rePass) {
            setNotEqual(true);
            return;
        }

        if (newPass.length < 8) {
            setPassError(true);
            return;
        }

        if (!hasNumber) {
            setPassError(true);
            return
        }

        axios.post(baseUrl + 'client/put-password', {
            code: codePass,
            password: newPass,
            repass: rePass
        }).then(() => {
            setPassSuccess(true);
            setTimeout(() => {
                navigate('/choose');
            }, 3000)

        }).catch(() => {
            setPassError(true);
        });
    }

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
        let checkNumber = containsNumber(newPass);
        setHasNumber(checkNumber);
        let checkSpecialChars = containsSpecialCharacters(newPass);
        let countChars = newPass.length >= 8;
        setHasMoreEigth(countChars);
        sethasSpecial(checkSpecialChars);
    }, [newPass])

    return <div>

        {passSuccess && <div className={styles.notification}>
            <div>
                <AiFillCheckCircle size={100} />
                <h2>Sua senha foi alterada com sucesso :)</h2>
            </div>
        </div>}

        <Header
            title='Criar Nova Senha'
        />
        <div className={styles.content}>
            <p>Digite o código de verificação que enviamos para o seu e-mail</p>
            {passError && <p style={{color: 'red'}}>Algo deu errado tente novamente mais tarde :(</p>}
            <label>Código</label>
            <div className={styles.inputs}>
                <input type="text" maxLength={2} name='input1' ref={input1} onChange={(e) => onChange(e, input2)} />
                <input type="text" maxLength={2} name='input2' ref={input2} onChange={(e) => onChange(e, input3, input1)} />
                <input type="text" maxLength={2} name='input3' ref={input3} onChange={(e) => onChange(e, input4, input2)} />
                <input type="text" maxLength={2} name='input4' ref={input4} onChange={(e) => onChange(e, null, input3)} />
            </div>
            <p className={styles.alert}>Crie uma nova senha contendo 8 digitos ou mais, com caracteres especiais e com números</p>
        </div>
        <div className={styles.pass}>
            <label htmlFor="pass">Nova Senha</label>
            <input type="password" name="pass" id="pass" value={newPass} onChange={(e) => setNewPass(e.target.value)} />
            <label htmlFor="repass">Repita a senha</label>
            <input type="password" className={styles.repass} name="repass" id="repass" value={rePass} onChange={(e) => setRePass(e.target.value)} />
            <div className={styles.information}>
                {notEqual && <p><small style={{ color: 'red' }}>As senhas não se correspondem</small></p>}
                {hasNumber && <p><small>Tem número</small><BsCheck size={20} /></p>}
                {hasSpecial && <p><small>Tem caractere especial</small><BsCheck size={20} /></p>}
                {hasMoreEigth && <p><small>Tem mais de 8 caracteres</small><BsCheck size={20} /></p>}
            </div>
        </div>
        <div onClick={confirmPass} className={styles.next}>
            <p>Concluir</p>
            <BiRightArrow size={40} />
        </div>
    </div>;
}

export default SetCode;