import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { RiArrowLeftSLine, RiLockUnlockFill } from 'react-icons/ri';
import Header from '../../../../components/Header/Header';
import styles from './Start.module.scss';

const Start = () => {
    return <div>
        <Header
            title='Criar uma nova senha'
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
        <div className={styles.next}>
            <p>Avançar</p>
            <BiRightArrow size={40} />
        </div>
    </div>;
}

export default Start;