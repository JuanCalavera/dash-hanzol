import axios from 'axios';
import { useState } from 'react';
import { MdAddComment } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import { baseUrl, headers } from '../../../utils/auth';
import styles from './CommentRegister.module.scss';

const CommentRegister = () => {

    const pub = useParams().pub;

    const [content, setContent] = useState<string>('');
    const navigate = useNavigate();

    const sendComment = () => {
        axios.post(`${baseUrl}pub-piece/${pub}/comment/`, {
            content: content
        }, headers(localStorage['token_dash']))
        .then((res) => {
            alert('Commentário adicionado com sucesso!!!');
            navigate(`/comentarios/${pub}`);
        }).catch(() => {
            alert('Infelizmente ocorreu um erro ao adicionar o comentário, tente novamente mais tarde');
        });
        
        
    }

    return <div>
        <Header
            title='Adicionar Comentário'
        />
        <div className={styles.container}>
            <div>
                <p>Escreva um comentário</p>
                <textarea id="content" value={content} onChange={(e) => {setContent(e.target.value)}} cols={40} rows={10}></textarea>
            </div>
            <button onClick={sendComment}><MdAddComment size={15}/> Adicionar</button>
        </div>
    </div>
}

export default CommentRegister;