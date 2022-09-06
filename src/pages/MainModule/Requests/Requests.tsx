import Header from "../../../components/Header/Header";
import FilterList from "../../../components/FilterList/FilterList";
import ListRequest from "../../../components/ListRequest/ListRequest";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl, subtractTime, userType } from "../../../utils/auth";

const Requests = () => {

    const navigate = useNavigate();
    const [listsItem, setLists] = useState<any>();
    const [title, setTitle] = useState<string>("Mais Recentes");
    const [headText, setHeadText] = useState<string>("Mais Recentes");
    const [useNavigation, setUseNavigation] = useState<boolean>(false);

    useEffect(() => {

        console.log(subtractTime('2022-09-02T03:22:18.000000Z'));

        const type = userType(localStorage['token_dash']);

        type.then((res) => {
            console.log(res);

            if (res === 'agency') {
                setHeadText("Solicitações enviadas para você");
                setUseNavigation(true);
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
    

    const addFiles = (id:number) => {
        if(useNavigation){
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
        />

        {listsItem?.map((list: any, key: number) => {
            let image = "";
            if (list.reference_file != undefined) {
                image = list.reference_file;
            }
            return (
                <ListRequest
                    dateAndHour={list.deliver_date}
                    cod={list.id}
                    title={list.title}
                    size={list.size}
                    description={list.description}
                    status={subtractTime(list.created_at)}
                    image={''}
                    onClick={() => {addFiles(list.id)}}
                    alt={`${list.id}`}
                />
            );
        })}
    </div>
}

export default Requests;