import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import { BsThreeDots, BsThreeDotsVertical } from 'react-icons/bs';
import styles from './CardHome.module.scss';

export interface CardHomeProps {
    imgUrl: string,
    alt: string,
    title: string,
    subtitle: string,
    content: string,
    status: string
}

const CardHome = ({ imgUrl, alt, title, subtitle, status, content }: CardHomeProps) => {
    let icon;

    if (status === 'like') {
        icon = <div className={styles.icon_like}>
            <AiFillLike size={10} style={{ marginBottom: 2 }} />
        </div>
    } else if (status === 'unlike') {
        icon = <div className={styles.icon_unlike}>
            <AiFillDislike size={10} style={{ marginBottom: 2 }} />
        </div>
    }
    return <div className={styles.d_flex + ' ' + styles.mb_3}>
        <img src={imgUrl} alt={alt} />
        <div className={styles.card}>
            <div className={styles.d_flex_between}>
                <p><b>{title}</b><br />
                    <small>{subtitle}</small>
                </p>
                <div className={styles.d_flex}>
                    {icon}
                    <BsThreeDotsVertical size={10} className={styles.icon_menu} />
                </div>
            </div>
            <p><small>{content}</small></p>
        </div>
    </div>
}

export default CardHome;