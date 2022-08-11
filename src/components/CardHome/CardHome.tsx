import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import { BsThreeDots, BsThreeDotsVertical } from 'react-icons/bs';
import styles from './CardHome.module.scss';

export interface CardHomeProps {
    imgUrl: string,
    alt: string,
    title: string,
    subtitle: string,
    content: string,
    status: string,
    data: string
}

const CardHome = ({ imgUrl, alt, title, subtitle, status, content, data }: CardHomeProps) => {
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
                <div>
                    <p className={styles.title}><b>{title}</b></p>
                    <p className={styles.subtitle}>{subtitle}</p>
                </div>
                <div className={styles.d_flex}>
                    {icon}
                    <BsThreeDotsVertical size={10} className={styles.icon_menu} />
                </div>
            </div>
            <p className={styles.content}>{content}</p>
            <p className={styles.data}>{data}</p>
        </div>
    </div>
}

export default CardHome;