import { MouseEventHandler, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ListRequest.module.scss";

export interface ListRequestProps {
    dateAndHour: string;
    cod: number;
    title: string;
    description: string;
    time: string;
    status: string;
    image: string;
    alt: string;
    size: string;
    onClick: MouseEventHandler;
}

const ListRequest = ({ dateAndHour, cod, title, size, description, time, status, image, alt, onClick }: ListRequestProps) => {

    let statusDom;

    if(status === 'pending'){
        statusDom = <p>Status do Projeto: <span style={{color: 'yellow'}}>Pendente</span></p>;
    } else if(status === 'like'){
        statusDom = <p>Status do Projeto: <span style={{color: 'green'}}>Finalizado</span></p>;
    } else if(status === 'unlike'){
        statusDom = <p>Status do Projeto: <span style={{color: 'red'}}>Não Satisfatório</span></p>;
    }

    let withoutImage = <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
    </svg>;
    let withImage = <img className={styles.image_border_size} src={image} alt={alt} />;
    return <div className={styles.list_background}>
        <div className={styles.container_content}>
            <div className={styles.column_content}>
                <div className={styles.first_content}>
                    <p className={styles.gray_color}><small>Prazo de entrega: {dateAndHour}</small></p>
                    <h2>{title}</h2>
                    <p className={styles.gray_color}>Detalhes do projeto</p>
                    <p>{size}</p>
                    <hr />
                    <p>{description.slice(0, 50) + '...'}</p>
                    {statusDom}
                    <p className={styles.gray_color}>Criado: <b>{time}</b></p>
                </div>
                <div className={styles.second_content}>
                    <p className={styles.top_cod}><small>COD.{cod}</small></p>
                    <div onClick={onClick}>
                        {image === "" ? withoutImage : withImage}
                    </div>
                    <div className={styles.see_answer}>
                        <Link className={styles.green_color} to={`/minhas-solicitacoes/${cod}`}>Ver mais</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ListRequest;