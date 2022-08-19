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
            return (
                <ListRequest
                    dateAndHour={list.deliver_date}
                    cod={'COD.' + list.id}
                    title={list.description}
                    subtitle={list.size}
                    description={list.exhibition_description}
                    status="18h depois"
                    image=""
                    alt="artist"
                />
            );
        })}

        {/* <ListRequest
            dateAndHour="05/05/22 - 23:58h"
            cod="COD: 4400GB"
            title="Anúncio em Jornal"
            subtitle="1/3 da página"
            description="Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis..."
            status="18h depois"
            image="https://akns-images.eonline.com/eol_images/Entire_Site/2020111/rs_1200x1200-201201123725-1200-Elliot-Page-Ellen-Page-LT-120120-.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top"
            alt="artist"
        /> */}
    </div>
}

export default Requests;