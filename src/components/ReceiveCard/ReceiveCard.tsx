import { produceWithPatches } from 'immer';
import { ReactChild, ReactChildren } from 'react';
import styles from './ReceiveCard.module.scss';

export interface ReceiveCardProps{
    children: ReactChildren | ReactChild | ReactChildren[] | ReactChild[],
    type: string
}

const ReceiveCard = ({children, type}:ReceiveCardProps) => {
    let snaps = type === 'default' ? styles.snaps_default : styles.snaps_square;
    return <div className={styles.horizontal_scroll + ' ' + styles.snaps_inline + ' ' + snaps}>
        {children}
    </div>
}

export default ReceiveCard;