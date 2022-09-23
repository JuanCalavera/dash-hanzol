import axios from 'axios';
import { useEffect, useState } from 'react';
import { AiOutlineFileGif, AiOutlineFilePdf, AiOutlineFileWord, AiOutlineUser, AiOutlineVideoCamera } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import ReceiveCard from '../../../components/ReceiveCard/ReceiveCard';
import WarningCard from '../../../components/WarningCard/WarningCard';
import { baseUrl } from '../../../utils/auth';
import styles from './SingleRequest.module.scss';

const SingleRequest = () => {

    const id = useParams().id;
    const [single, setSingle] = useState<any>();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${baseUrl}pub-piece/${id}`, {
            headers: {
                'Authorization': localStorage['token_dash'],
                'Accept': 'Application/json'
            }
        })
            .then((res) => {
                console.log(res);
                setSingle(res.data);
            }).catch(() => {
                alert('Não foi encontrada uma publicação neste endereço')
                navigate('/minhas-solicitacoes');
            });
    }, []);


    return (
        <div>
            <Header
                title='Publicação Solicitada'
            />
            {single && <div>
                <div className={styles.container}>
                    <h1>{single.pub_piece.title}</h1>
                    <p><b>Mídias:</b></p>
                </div>
                <div className={styles.force_white}>
                    <ReceiveCard type='non-default'>
                        <WarningCard
                            status=''
                            imgUrl='https://cdn-europe1.lanmedia.fr/var/europe1/storage/images/europe1/culture/l-arsene-lupin-georges-descrieres-est-mort-595818/12040310-1-fre-FR/L-Arsene-Lupin-Georges-Descrieres-est-mort.jpg'
                        />
                        <div className={styles.card} onClick={() => { }}>
                            <AiOutlineFilePdf size={50} />
                            <p>PDF</p>
                        </div>
                        <div className={styles.card} onClick={() => { }}>
                            <AiOutlineFileGif size={50} />
                            <p>GIF</p>
                        </div>
                        <div className={styles.card} onClick={() => { }}>
                            <AiOutlineVideoCamera size={50} />
                            <p>Vídeo</p>
                        </div>
                    </ReceiveCard>
                </div>
                <div className={styles.container}>
                    <h3>Detalhes do projeto</h3>
                    {single.pub_piece.status === "success" ? <h4 style={{ color: 'green' }}>Status: {single.pub_piece.status}</h4> : <h4>Status: {single.pub_piece.status}</h4>}
                    <p>Tamanho solicitado: {single.pub_piece.size}</p>
                    <p>{single.pub_piece.description}</p>
                    <p><small><b>Solicitado pelo cliente:</b> {single.user}</small></p>
                    <p><small><b>Criado em:</b> {single.pub_piece.created_at.slice(0, 10)}</small></p>
                </div>
            </div>}
        </div>
    );

}

export default SingleRequest;