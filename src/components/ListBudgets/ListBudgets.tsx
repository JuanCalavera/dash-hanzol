import styles from "./ListBudgets.module.scss";

export interface ListBudgetsProps {
    buttonText: string;
    receiveText: string;
    titleText: string;
    subtitleText: string;
    content: string;
    total: string;
}

const ListBudgets = ({ buttonText, receiveText, titleText, subtitleText, content, total }: ListBudgetsProps) => {
    let button;
    if (buttonText === 'Aprovar') {
        button =
            <div>
                <button className={styles.button_border}>
                    {buttonText} <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                </button>
                <p className={styles.see_project}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg> Ver Projeto
                </p>
            </div>;
    } else if (buttonText === 'Aprovado') {
        button =
            <button className={styles.button_border_approved}>
                {buttonText}
            </button>;
    } else if (buttonText === 'Cancelado') {
        button =
            <button className={styles.button_border_canceled}>
                {buttonText}
            </button>;
    }

    return <div className={styles.list_background}>
        <div className={styles.container_content}>
            <div className={styles.column_content}>
                <div className={styles.first_content}>
                    <p className={styles.gray_color}><small>Recebido: {receiveText}</small></p>
                    <h2>{titleText}</h2>
                    <p>{subtitleText}</p>
                    <hr />
                    <p>{content}</p>
                    <p className={styles.total}><small>Total: {total}</small></p>
                </div>
                <div className={styles.second_content}>
                    <p className={styles.gray_color}><small>Ação</small></p>
                    {button}
                    <div className={styles.download_file_icon} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" fill="currentColor" className="bi bi-file-earmark-arrow-down-fill" viewBox="0 0 16 16">
                            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ListBudgets;