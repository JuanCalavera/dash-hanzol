import { BiRightArrow } from 'react-icons/bi';
import Header from '../../../../components/Header/Header';
import styles from './SetMail.module.scss';

const SetMail = () => {
    return <div>
        <Header
            title="Criar nova senha"
        />
        <div className={styles.content}>
            <div>
                <p className={styles.title}>Digite seu email cadastrado</p>
                <input className={styles.input_text} type="text" />
                <p className={styles.danger_text}><small>e-mail não encontrado</small></p>
                <p className={styles.warning}>Para sua segurança, enviaremos um código de verificação</p>
            </div>
        </div>
        <div className={styles.next}>
            <p>Enviar</p>
            <BiRightArrow size={40} />
        </div>
    </div>;
}

export default SetMail;