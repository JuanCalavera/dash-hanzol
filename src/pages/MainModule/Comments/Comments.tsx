import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ContentComments from "../../../components/ContentComments/ContentComments";
import FilterList from "../../../components/FilterList/FilterList";
import FloatingButton from "../../../components/FloatingButton/FloatingButton";
import Header from "../../../components/Header/Header";
import { baseUrl, headers } from "../../../utils/auth";
import styles from "./Comments.module.scss";

const Comments = () => {

    const pub = useParams().pub;

    const [comments, setComments] = useState<any>();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${baseUrl}pub-piece/${pub}/comment/`, headers(localStorage['token_dash']))
            .then((res) => {
                setComments(res.data);
            }).catch(() => {
                alert('Nada foi encontrado');
            });
    }, []);

    return <div>
        <Header title='Avaliações/comentários' />
        {comments && <div>
            <FilterList
                onClick={() => { }}
                orderTitle="Mais recentes" />

            {comments.map((comment: any) => {
                return <ContentComments
                    title={comment.user_name}
                    subtitle={comment.created_at.slice(0, 10)}
                    user_type={comment.user_type}
                    status=""
                    content={comment.content}
                />
            })}
            <div onClick={() => {navigate(`/criar-comentario/${pub}`)}}>
                <FloatingButton />
            </div>
        </div>
        }
    </div>;
}

export default Comments;