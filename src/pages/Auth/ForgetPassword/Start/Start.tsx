import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { RiArrowLeftSLine, RiLockUnlockFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import { navigate } from '../../../../redux/slices/navigationSlice/navigationSlice';
import styles from './Start.module.scss';

const Start = () => {
    const navigate = useNavigate();
    function navigatePages(){
        navigate('/esqueci-a-senha-email');
    }
    
    return <div>
        <Header
            title='Criar Nova Senha'
        />
        <div className={styles.container}>
            <div className={styles.base}>
                <BiLeftArrow size={30} />
                <RiLockUnlockFill size={40} />
                <BiRightArrow size={40} />
            </div>
            <div className={styles.information}>
                <h1 className={styles.title}>Esqueceu sua senha?</h1>
                <p className={styles.content}>Vamos te ajudar. <br />
                    Em poucos passos você poderá criar uma nova senha de forma simples e segura.
                </p>
            </div>
        </div>
        <div onClick={navigatePages} className={styles.next}>
            <p>Avançar</p>
            <BiRightArrow size={40} />
        </div>
    </div>;
}

export default Start;