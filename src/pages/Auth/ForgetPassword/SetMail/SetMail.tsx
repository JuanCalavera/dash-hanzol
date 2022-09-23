import axios from 'axios';
import { useState } from 'react';
import { BiRightArrow } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import { baseUrl } from '../../../../utils/auth';
import styles from './SetMail.module.scss';

const SetMail = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const [button, setButton] = useState<string>('Enviar');

    function verifyCode() {
        setButton('Verificando');

        axios.post(baseUrl + 'client/forgot-password', {
            'email': email
        }, {
            'headers': {
                'Accept': 'Application/json'
            }
        }).then(() => {
            setButton('Lá Vamos Nós');
            setTimeout(() => {navigate('/esqueci-a-senha-codigo')}, 2000);
        }).catch(() => {
            setError(true);
        })
    }

    return <div>
        <Header
            title='Criar Nova Senha'
        />
        <div className={styles.content}>
            <div>
                <p className={styles.title}>Digite seu email cadastrado</p>
                <input value={email} onChange={(e) => { setEmail(e.target.value) }} className={styles.input_text} type="email" />
                {error && <p className={styles.danger_text}><small>e-mail não encontrado</small></p>}
                <p className={styles.warning}>Para sua segurança, enviaremos um código de verificação via email</p>
            </div>
        </div>
        <div onClick={verifyCode} className={styles.next}>
            <p>{button}</p>
            <BiRightArrow size={40} />
        </div>
    </div>;
}

export default SetMail;