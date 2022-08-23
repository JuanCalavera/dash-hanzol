import Header from "../../../components/Header/Header";
import FilterList from "../../../components/FilterList/FilterList";
import ListRequest from "../../../components/ListRequest/ListRequest";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Requests = () => {

    const navigate = useNavigate();
    const [listsItem, setLists] = useState<any>();
    const [title, setTitle] = useState<string>("Mais Recentes");

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/pub-pieces/' + localStorage['agency'], {
            headers: {
                'Authorization': localStorage['token']
            }
        })
            .then((res) => {
                setLists(res.data);

            })
            .catch(() => {
                navigate('/login');
            });
    }, []);

    function filterList(){
        setLists(listsItem.reverse());
        let titleChange = title === "Mais Recentes" ? "Mais Antigos" : "Mais Recentes";
        setTitle(titleChange)
    }

    return <div>
        <Header title="Minhas Solicitações" />
        <FilterList
         onClick={filterList}
         orderTitle={title}
         />

        {listsItem?.map((list: any, key: number) => {
            let image = "";
            if(list.reference_link != undefined){
                image = list.reference_link;
            }
            if(list.reference_file != undefined){
                image = list.reference_file;
            }
            return (
                <ListRequest
                    dateAndHour={list.pubRequest.deliver_date}
                    cod={'COD.' + list.pubRequest.id}
                    title={list.pubRequest.description}
                    subtitle={list.pubRequest.size}
                    description={list.pubRequest.exhibition_description}
                    status="18h depois"
                    image={image}
                    alt="artist"
                />
            );
        })}
    </div>
}

export default Requests;