import Header from '../../../components/Header/Header';
import styles from './About.module.scss';
import logo from '../../../assets/logo-black.png'
import {version} from '../../../../package.json';

const About = () => {
    const packageJson = require('../../../../package.json');
    return <div>
        <Header
            title="Sobre o Dash"
        />
        <div className={styles.background_about}>
            <h1 className={styles.title_about}>Dash</h1>
            <p className={styles.subtitle_about}>Versão {packageJson.version}</p>
            <div className={styles.logo}>
                <img src={logo} width='100%' alt="logo" />
            </div>
            <div className={styles.bottom}>
                <p>&copy; 2020 - 2021<br />
                    From <b>Hanzol</b>
                </p>
            </div>
        </div>
    </div>
}

export default About;