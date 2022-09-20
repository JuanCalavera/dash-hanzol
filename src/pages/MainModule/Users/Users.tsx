import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Users.module.scss';
import Header from '../../../components/Header/Header';
import { baseUrl, headers, userType } from '../../../utils/auth';
import { BiTrash } from 'react-icons/bi';
import { resourceLimits } from 'worker_threads';

const Users = () => {
    const navigate = useNavigate();
    const [result, setResult] = useState([]);

    useEffect(() => {
        const user = userType(localStorage['token_dash']);
        user.then((e) => {
            if (e === 'client') {
                alert("Usuário não é agente!");
                navigate('choose');
            }
        })
            .catch(() => {
                navigate('choose');
            });

        axios.get("http://127.0.0.1:8000/api/agency/", headers(localStorage['token_dash']))
            .then((res) => {
                console.log(res.data);

                setResult(res.data);
            });
    }, []);

    const deleteUser = (id: number) => {
        if (window.confirm('Deseja mesmo excluir este cliente?')) {
            axios.get(baseUrl + 'client/delete/' + id, headers(localStorage['token_dash']))
                .then((response) => {
                    let clientId = `client${id}`;
                    let element = document.getElementById(clientId);
                    if (element !== null) {
                        element.style.display = 'none';
                    }
                });
        }

    }


    return (
        <div>
            <Header
                title='Usuários'
            />
            {result.length !== 0 ?
                result?.map((e: any, key: number) => {
                    return <div className={styles.cards} id={"client" + e.client.id}>
                        <div className={styles.d_flex}>
                            <p>Nome: {e.client.name}</p>
                            <div className={styles.flex}>
                                <p style={{ marginRight: 10 }}>COD.{e.client.id}</p>
                                <div className={styles.button} onClick={() => { deleteUser(e.client.id) }}>
                                    <BiTrash />
                                </div>
                            </div>
                        </div>
                        <p>Email: {e.client.email}</p>
                        <p>Requisições: {e.pub_requests}</p>
                    </div>
                }) : <div><h2 style={{color: 'white', textAlign: 'center'}}>Sem nenhum cliente :( </h2></div>}
        </div>
    );
}

export default Users;