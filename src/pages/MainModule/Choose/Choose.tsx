import { AiOutlineUser } from 'react-icons/ai';
import { GiTie } from 'react-icons/gi';
import styles from './Choose.module.scss';
import logo from "../../../assets/logo-black.png";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { userType } from '../../../utils/auth';

const Choose = () => {

    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.background = "white";

        const user = userType(localStorage['token_dash']);

        user.then(() => {
            navigate('/home');
        });
    });

    return <div className={styles.container}>
        <img src={logo} alt="logo" />
        <h2>Escolha seu tipo de usuário</h2>
        <div className={styles.d_flex}>
            <div className={styles.card} onClick={() => { navigate('/login-user') }}>
                <AiOutlineUser size={50} />
                <p>Cliente</p>
            </div>
            <div className={styles.card} onClick={() => { navigate('/login') }}>
                <GiTie size={50} />
                <p>Agência</p>
            </div>
        </div>
    </div>
}

export default Choose;