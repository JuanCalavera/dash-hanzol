import Header from "../../../components/Header/Header";
import FilterList from "../../../components/FilterList/FilterList";
import ListRequest from "../../../components/ListRequest/ListRequest";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseStorageUrl, baseUrl, subtractTime, userType } from "../../../utils/auth";
import FloatingButtonPlus from "../../../components/FloatingButtonPlus/FloatingButtonPlus";
import { RiUserSettingsFill } from "react-icons/ri";
import styles from "./Requests.module.scss";

const Requests = () => {

    const navigate = useNavigate();
    const [listsItem, setLists] = useState<any>();
    const [title, setTitle] = useState<string>("Mais Recentes");
    const [headText, setHeadText] = useState<string>("Mais Recentes");
    const [useNavigation, setUseNavigation] = useState<boolean>(false);
    const [buttonAdmin, setButtonAdmin] = useState<boolean>(false);

    useEffect(() => {

        const type = userType(localStorage['token_dash']);

        type.then((res) => {

            if (res === 'agency') {
                setHeadText("Solicitações enviadas para você");
                setUseNavigation(true);
                setButtonAdmin(true);
            } else if (res === 'client') {
                setHeadText("Minhas Solicitações");
            }
        })
            .catch(() => {
                navigate('/choose');
            });


        axios.get(baseUrl + 'pub-piece/', {
            headers: {
                'Authorization': localStorage['token_dash'],
                'Accept': 'Application/json'
            }
        })
            .then((res) => {
                setLists(res.data.pubs);
            })
            .catch(() => {
                // navigate('/choose');
            });
    }, []);


    const addFiles = (id: number) => {
        if (useNavigation) {
            navigate(`/criar-solicitacoes/${id}`);
        }
    }

    function filterList() {
        setLists(listsItem.reverse());
        let titleChange = title === "Mais Recentes" ? "Mais Antigos" : "Mais Recentes";
        setTitle(titleChange)
    }

    return <div>
        <Header title={headText} />
        <FilterList
            onClick={filterList}
            orderTitle={title}
            textValueSearch={""}
            onChange={undefined}
            onClickSearch={undefined}
        />

        {buttonAdmin &&
            <div className={styles.admin_button} onClick={() => { navigate('/usuarios') }}>
                <RiUserSettingsFill /> Administrar Usuários
            </div>
        }

        {listsItem?.map((list: any, key: number) => {
            let image = "";
            if (list.files_path !== undefined && list.files_path !== null) {
                image = `${baseStorageUrl}${JSON.parse(list.files_path)[0]}`;
            }
            console.log(image);

            return (
                <ListRequest
                    dateAndHour={list.deliver_date}
                    cod={list.id}
                    title={list.title}
                    size={list.size}
                    description={list.description}
                    time={subtractTime(list.created_at)}
                    status={list.status}
                    image={image}
                    onClick={() => { addFiles(list.id) }}
                    alt={`${list.id}`}
                />
            );
        })}
        {!useNavigation && <FloatingButtonPlus
            onClick={() => navigate('/criar-solicitacoes')}
        />}
    </div>
}

export default Requests;