import styles from "./ListRequest.module.scss";

export interface ListRequestProps {
    dateAndHour: string;
    cod: string;
    title: string;
    subtitle: string;
    description: string;
    status: string;
    image: string;
    alt: string;
}

const ListRequest = ({ dateAndHour, cod, title, subtitle, description, status, image, alt }: ListRequestProps) => {
    let withoutImage = <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
    </svg>;
    let withImage = <img className={styles.image_border_size} src={image} alt={alt} />;
    return <div className={styles.list_background}>
        <div className={styles.container_content}>
            <div className={styles.column_content}>
                <div className={styles.first_content}>
                    <p className={styles.gray_color}><small>{dateAndHour}</small></p>
                    <h2>{title}</h2>
                    <p className={styles.gray_color}>Detalhes do projeto</p>
                    <p>{subtitle}</p>
                    <hr />
                    <p>{description}</p>
                    <a className={styles.green_color} href="#">Ver mais</a>
                    <p className={styles.gray_color}>Respondido: <b>{status}</b></p>
                </div>
                <div className={styles.second_content}>
                    <p className={styles.top_cod}><small>{cod}</small></p>
                    {image === "" ? withoutImage : withImage}
                    <a className={styles.see_answer} href="#">
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                            </svg> Ver Resposta
                        </p>
                    </a>
                </div>
            </div>
        </div>
    </div>
}

export default ListRequest;