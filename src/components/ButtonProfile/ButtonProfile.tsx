import styles from './ButtonProfile.module.scss';

export interface ButtonProfileProps {
    svg: object,
    title: string,
    subtitle: string
}

const ButtonProfile = ({ svg, title, subtitle }: ButtonProfileProps) => {
    return <div className={styles.d_flex}>
        <div className={styles.mt_2}>
            {svg}
        </div>
        <div className={styles.margin_left}>
            <p><b className={styles.title_size}>{title}</b><br />
                <small>{subtitle}</small>
            </p>
        </div>

    </div>
}

export default ButtonProfile;