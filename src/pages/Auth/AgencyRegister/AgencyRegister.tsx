import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from './AgencyRegister.module.scss';
import Header from '../../../components/Header/Header';
import { baseUrl, headers } from '../../../utils/auth';
import axios from 'axios';

const AgencyRegister = () => {
    const token = useParams().token;
    const navigate = useNavigate();
    const [inputName, setInputName] = useState<string>('');
    const [inputNameWarning, setInputNameWarning] = useState<boolean>(false);
    const [inputEmail, setInputEmail] = useState<string>('');
    const [inputEmailWarning, setInputEmailWarning] = useState<boolean>(false);
    const [inputCnpj, setInputCnpj] = useState<string>('');
    const [inputCnpjWarning, setInputCnpjWarning] = useState<boolean>(false);
    const [inputPassword, setInputPassword] = useState<string>('');
    const [inputPasswordWarning, setInputPasswordWarning] = useState<boolean>(false);
    const [inputEmailFormat, setInputEmailFormat] = useState<boolean>(false);
    const [successNotification, setsuccessNotification] = useState<boolean>(false);

    useEffect(() => {
        if (token !== 'hdnra') {
            navigate('/choose');
        }
    }, [])

    const send = () => {
        inputName === '' ? setInputNameWarning(true) : setInputNameWarning(false);
        inputEmail === '' ? setInputEmailWarning(true) : setInputEmailWarning(false);
        inputCnpj.length !== 11 ? setInputCnpjWarning(true) : setInputCnpjWarning(false);
        inputPassword === '' ? setInputPasswordWarning(true) : setInputPasswordWarning(false);
        setInputEmailFormat(inputEmail.search('@') === -1);

        alert('vim pra cá');
        if (inputNameWarning || inputEmailWarning || inputEmail.search('@') < 0 || inputCnpjWarning || inputPasswordWarning) return;


        axios.post(baseUrl + 'agency/register',
            {
                name: inputName,
                email: inputEmail,
                cnpj: inputCnpj,
                password: inputPassword,
            },
            { 'headers': { 'Accept': 'Application/json' } })
            .then((resPost) => {
                console.log(resPost);
                setsuccessNotification(true);
            })
    }


    return <div>
        <Header
            title='Adicionar Agência'
        />
        <div className={styles.container}>
            {successNotification &&
                <div className={styles.card}>
                    <p>Criada a Agência</p>
                    <p>Nome: {inputName}</p>
                    <p>Email: {inputEmail}</p>
                    <p>CNPJ: {inputCnpj}</p>
                    <p>Senha: {inputPassword}</p>
                </div>
            }
            <div>
                <label htmlFor="name">Nome</label>
                <input autoComplete="off" type="text" id='name' value={inputName} onChange={(e) => { setInputName(e.target.value) }} />
                {inputNameWarning && <p style={{ color: 'red' }} ><small>Nome obrigatório</small></p>}
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input autoComplete="off" type="email" id='email' value={inputEmail} onChange={(e) => { setInputEmail(e.target.value) }} />
                {inputEmailWarning && <p style={{ color: 'red' }} ><small>Email obrigatório</small></p>}
                {inputEmailFormat && <p style={{ color: 'red' }} ><small>O email precisa ser válido</small></p>}
            </div>
            <div>
                <label htmlFor="cnpj">CNPJ(Só os números)</label>
                <input autoComplete="off" type="number" id='cnpj' value={inputCnpj} onChange={(e) => { setInputCnpj(e.target.value) }} />
                {inputCnpjWarning && <p style={{ color: 'red' }} ><small>Cnpj inválido</small></p>}
            </div>
            <div>
                <label htmlFor="password">Senha</label>
                <input autoComplete="off" type="password" id='password' value={inputPassword} onChange={(e) => { setInputPassword(e.target.value) }} />
                {inputPasswordWarning && <p style={{ color: 'red' }} ><small>Cnpj obrigatório</small></p>}
            </div>

            <button onClick={send}>Enviar</button>
        </div>
    </div>;
}

export default AgencyRegister;