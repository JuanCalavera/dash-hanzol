import axios from 'axios';
import { useEffect, useState } from 'react';
import { AiOutlineFileGif, AiOutlineFilePdf, AiOutlineFileWord, AiOutlinePlus, AiOutlineUser, AiOutlineVideoCamera } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import ReceiveCard from '../../../components/ReceiveCard/ReceiveCard';
import WarningCard from '../../../components/WarningCard/WarningCard';
import { baseUrl, userType, headers, baseStorageUrl } from '../../../utils/auth';
import styles from './SingleRequest.module.scss';

const SingleRequest = () => {

    const id = useParams().id;
    const [single, setSingle] = useState<any>();
    const [commentsData, setCommentsData] = useState<any>();
    const [viewButton, setViewButton] = useState<boolean>(false);
    const [typeUser, setTypeUser] = useState<any>('');
    const [viewStatus, setViewStatus] = useState<boolean>(false);
    const [nameStatus, setNameStatus] = useState<string>('');
    const [selectStatus, setSelectStatus] = useState<string>('');
    const [filesSingle, setFilesSingle] = useState<any>();
    const navigate = useNavigate();

    useEffect(() => {

        setTypeUser(userType(localStorage['token_dash']));

        axios.get(`${baseUrl}pub-piece/${id}`, {
            headers: {
                'Authorization': localStorage['token_dash'],
                'Accept': 'Application/json'
            }
        })
            .then((res) => {
                setSingle(res.data);
                setCommentsData(res.data.comments);
                setViewButton(res.data.comments.length > 2 ? true : false);
                verifyStatus(res.data.pub_piece.status);
                setFilesSingle(JSON.parse(res.data.pub_piece.files_path));
            }).catch(() => {
                alert('Não foi encontrada uma publicação neste endereço')
                navigate('/minhas-solicitacoes');
            });
    }, []);

    const verifyStatus = (status: string) => {
        if (status === "like") {
            setNameStatus('Finalizado');
        } else if (status === "unlike") {
            setNameStatus('Não satisfatório');
        } else if (status === "pending") {
            setNameStatus('Pendente');
        }
    }

    const navigateComment = () => {
        navigate(`/comentarios/${id}`);

    }

    const changeStatus = () => {
        axios.post(`${baseUrl}pub-piece/update/${id}`, {
            status: selectStatus
        }, headers(localStorage['token_dash']))
            .then(() => {
                alert('Status alterado com sucesso');
                verifyStatus(selectStatus);
            }).catch(() => {
                alert('Não foi possível fazer esta ação, tente novamente mais tarde');
            })


        setViewStatus(false);
    }


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

                {filesSingle && <div className={styles.force_white}>
                    <ReceiveCard type='non-default'>
                        {filesSingle.map((file: any) => {
                            return <WarningCard
                                status=''
                                imgUrl={`${baseStorageUrl}${file}`} onClick={undefined}                            />
                        })
                        }
                    </ReceiveCard>
                </div>}

                <div className={styles.container}>
                    <h3>Detalhes do projeto</h3>
                    {nameStatus === "Finalizado" ? <h4 style={{ color: 'green' }}>Status: {nameStatus}</h4> : <h4>Status: {nameStatus}</h4>}
                    {typeUser === 'client' &&
                        <div className={styles.change_status} onClick={() => { setViewStatus(true) }}>
                            Alterar Status
                        </div>
                    }
                    <p>Tamanho solicitado: {single.pub_piece.size}</p>
                    <p>{single.pub_piece.description}</p>
                    <p><small><b>Solicitado pelo cliente:</b> {single.user}</small></p>
                    <p><small><b>Criado em:</b> {single.pub_piece.created_at.slice(0, 10)}</small></p>
                </div>
            </div>}


            {commentsData && <div className={styles.container}>
                <h3>Comentários: </h3>

                {commentsData.map((c: any) => {
                    return <div className={styles.card_comment}>
                        <div className={styles.header_comment}>
                            <p><b>{c.user_name}:</b></p>
                            <p><small>{c.created_at.slice(0, 10)}</small></p>
                        </div>
                        <p>{c.content}</p>
                    </div>
                })}

                {viewButton && <div onClick={navigateComment} className={styles.card} style={{ backgroundColor: '#ffbf00', color: '#000' }}>
                    <p><AiOutlinePlus size={15} /> Comentários</p>
                </div>}
            </div>}
            {typeUser === 'client' && viewStatus &&
                <div className={styles.popup_status}>
                    <div>
                        <h3>Mude o Status desta publicação</h3>
                        <select value={selectStatus} onChange={(e) => { setSelectStatus(e.target.value) }} id="select-status">
                            <option>Selecione o Status</option>
                            <option value="pending">Pendente</option>
                            <option value="unlike">Não Satisfatório</option>
                            <option value="like">Finalizado</option>
                        </select>
                        <div className={styles.d_flex}>
                            <button onClick={changeStatus} className={styles.change_button}>Mudar Status</button>
                            <button className={styles.close} onClick={() => { setViewStatus(false) }}>Fechar</button>
                        </div>
                    </div>
                </div>
            }
        </div >
    );

}

export default SingleRequest;