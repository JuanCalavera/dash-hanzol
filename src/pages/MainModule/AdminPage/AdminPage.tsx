import axios from "axios";
import { useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import FilterList from "../../../components/FilterList/FilterList";
import Header from "../../../components/Header/Header";
import { baseUrl, headers, userType } from "../../../utils/auth";

import styles from './AdminPage.module.scss';

const AdminPage = () => {

    const navigate = useNavigate();
    const [result, setResult] = useState([]);
    const [searchInput, setSearchInput] = useState<string>('');

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

        axios.get(`${baseUrl}agency/all-users`, headers(localStorage['token_dash']))
            .then((res) => {
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

    const search = () => {
        axios.get(`${baseUrl}search`, {

        })
    }



    return (
        <div>
            <Header
                title='Página Admin'
            />
            <FilterList
                orderTitle={""}
                onClick={() => { }}
                textValueSearch={searchInput}
                onChange={(e: any) => { setSearchInput(e.target.value); }}
                onClickSearch={undefined} />
            {result &&
                result.map((e: any, key: number) => {
                    return <div className={styles.cards} id={"client" + e.id}>
                        <div className={styles.d_flex}>
                            <p>Nome: {e.name}</p>
                            <div className={styles.flex}>
                                <p style={{ marginRight: 10 }}>COD.{e.id}</p>
                                <div className={styles.button} onClick={() => { if (window.confirm('Deseja mesmo excluir este usuário?')) { deleteUser(e.id) } }}>
                                    <BiTrash />
                                </div>
                            </div>
                        </div>
                        <p>Email: {e.email}</p>
                        <p>Requisições: {e.pub_requests}</p>
                        <p>Tipo de usuário: {e.type === 'agency' ? 'agência' : 'cliente'}</p>
                    </div>
                })}
        </div>
    );
}

export default AdminPage;