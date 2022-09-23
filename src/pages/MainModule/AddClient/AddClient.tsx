import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import { baseUrl, currentUser, headers } from '../../../utils/auth';
import styles from './AddClient.module.scss';

const AddClient = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<any>();
    const [inputName, setInputName] = useState<string>('');
    const [inputNameWarning, setInputNameWarning] = useState<boolean>(false);
    const [inputEmail, setInputEmail] = useState<string>('');
    const [inputEmailWarning, setInputEmailWarning] = useState<boolean>(false);
    const [inputEmailFormat, setInputEmailFormat] = useState<boolean>(false);
    const [successNotification, setsuccessNotification] = useState<boolean>(false);
    const currentUrl = window.location.href;

    useEffect(() => {
        (async () => {
            const res = await currentUser(localStorage['token_dash']);
            setUser(res.data);
        })();

    }, []);

    const send = () => {
        inputName === '' ? setInputNameWarning(true) : setInputNameWarning(false);
        inputEmail === '' ? setInputEmailWarning(true) : setInputEmailWarning(false);
        setInputEmailFormat(inputEmail.search('@') === -1);
        

        if (user === undefined) return;
        if (inputNameWarning || inputEmailWarning || inputEmail.search('@') < 0) return;

        axios.post(baseUrl + 'agency/create-link',
            {
                name: inputName,
                email: inputEmail,
                current_url: currentUrl + `/${user.cnpj}`
            },
            headers(localStorage['token_dash']))
            .then((resPost) => {
                setsuccessNotification(true);
                setTimeout(() => {
                    navigate('/minhas-solicitacoes');
                }, 5000);
            })
    }


    return <div>
        <Header
            title='Adicionar Cliente'
        />
        <div className={styles.container}>
            <div>
                <label htmlFor="name">Nome do Cliente</label>
                <input type="text" id='name' value={inputName} onChange={(e) => { setInputName(e.target.value) }} />
                {inputNameWarning && <p style={{ color: 'red' }} ><small>Nome do cliente é obrigatório</small></p>}
            </div>
            <div>
                <label htmlFor="email">Email do Cliente</label>
                <input type="text" id='email' value={inputEmail} onChange={(e) => { setInputEmail(e.target.value) }} />
                {inputEmailWarning && <p style={{ color: 'red' }} ><small>Email do cliente é obrigatório</small></p>}
                {inputEmailFormat && <p style={{ color: 'red' }} ><small>O email precisa ser válido</small></p>}
            </div>

            <button onClick={send}>Enviar</button>

            {successNotification && <p style={{ color: 'green' }}>Enviado o email para o cliente</p>}
        </div>
    </div>;
}

export default AddClient;