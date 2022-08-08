import styles from './FinancialCards.module.scss';

export interface FinancialCardsProps {
    title: string,
    subtitle: string,
    svg: object
}

const FinancialCards = ({ title, subtitle, svg }: FinancialCardsProps) => {
    return <div className={styles.background_card}>
        <div className={styles.column_flex}>
            <div className={styles.column}>
                <p><b>{title}</b><br />
                    <small className={styles.size_font_subtitle}>{subtitle}</small>
                </p>
                <button className={styles.button}>Visualizar</button>
            </div>
            <div className={styles.column_2}>
                {svg}
            </div>
        </div>
    </div>
}

export default FinancialCards;