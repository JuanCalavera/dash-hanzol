import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import { currentUser, userType } from '../../../utils/auth';
import styles from './ClientRegister.module.scss';

const ClientRegister = () => {

    const cnpj = useParams().cnpj;
    const navigate = useNavigate();
    const [actualUser, setActualUser] = useState<any>();
    const [registerWarning, setRegisterWarning] = useState<boolean>(false);

    const [userName, setUserName] = useState<string>('');
    const [userEmail, setUserEmail] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');
    const [registerButton, setRegisterButton] = useState<string>('Registrar');
    const [warning, setWarning] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/user/${cnpj}`, {
            'headers': {
                'Accept': 'Application/json'
            }
        }).then((user) => {
            setActualUser(user.data);
        }).catch(() => {
            setRegisterWarning(true);
        });
    }, []);

    const registerUser = () => {
        setRegisterButton('Carregando...');
        axios.post(`http://127.0.0.1:8000/api/client/${actualUser.cnpj}/register-client`, {
            "name": userName,
            "email": userEmail,
            "password": userPassword
        }, {
            'headers': {
                'Accept': 'Application/json'
            }
        }).then((res) => {
            setWarning(true);
            setTimeout(() => {
                navigate('/choose');
            }, 3000)
            setRegisterButton('Registrar');
        }).catch(() => {
            setRegisterButton('Registrar');
            setError(true);
        })
    }


    return <div>
        {actualUser !== undefined ?
            <>
                <Header
                    title={`Registre-se na empresa ${actualUser.name}`} />
                <div className={styles.container}>
                    <div className={styles.input_form}>
                        <label htmlFor="name">Nome</label>
                        <input id='name' value={userName} onChange={(e) => {setUserName(e.target.value)}} type="text" />
                    </div>
                    <div className={styles.input_form}>
                        <label htmlFor="email">Email</label>
                        <input id='email' value={userEmail} onChange={(e) => {setUserEmail(e.target.value)}} type="email" />
                    </div>
                    <div className={styles.input_form}>
                        <label htmlFor="password">Senha</label>
                        <input id='password' autoComplete='false' value={userPassword} onChange={(e) => {setUserPassword(e.target.value)}} type="password" />
                    </div>

                    <button onClick={registerUser} >{registerButton}</button>

                    {warning && <p style={{color: 'green'}}>Usuário cadastrado com sucesso</p>}
                    {error && <p style={{color: 'red'}}>Erro ao cadastrar usuário</p>}
                </div>
            </> :  <div>
                <Header title='Erro'/>
                <h2 style={{ color: '#fff', textAlign: 'center', margin: '30px' }}>Agência não encontrada :(</h2>
            </div> }
    </div>
}

export default ClientRegister;