import Header from "../../../components/Header/Header";
import FilterList from "../../../components/FilterList/FilterList";
import ListRequest from "../../../components/ListRequest/ListRequest";

const Requests = () => {    
    return <div>
        <Header title="Minhas Solicitações"/>
        <FilterList orderTitle="Mais Recentes"/>
        <ListRequest
        dateAndHour="05/05/22 - 23:58h"
        cod="COD: 4400GB"
        title="Anúncio em Jornal"
        subtitle="1/3 da página"
        description="Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis..."
        status="18h depois"
        image=""
        alt="artist"
        />
        <ListRequest
        dateAndHour="05/05/22 - 23:58h"
        cod="COD: 4400GB"
        title="Anúncio em Jornal"
        subtitle="1/3 da página"
        description="Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis..."
        status="18h depois"
        image="https://akns-images.eonline.com/eol_images/Entire_Site/2020111/rs_1200x1200-201201123725-1200-Elliot-Page-Ellen-Page-LT-120120-.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top"
        alt="artist"
        />
    </div>
}

export default Requests;