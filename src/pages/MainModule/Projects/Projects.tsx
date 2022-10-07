import FilterList from "../../../components/FilterList/FilterList"
import FloatingButton from "../../../components/FloatingButton/FloatingButton";
import Header from "../../../components/Header/Header"
import ProjectList from "../../../components/ProjectList/ProjectList";

const Projects = () => {
    return <div>
        <Header title="Meus Projetos" />
        <FilterList
            onClick={() => { }}
            orderTitle="Valores Maiores"
            textValueSearch={""}
            onChange={undefined}
            onClickSearch={undefined}
        />
        <ProjectList
            dateTime="05/05/22 - 18:00h"
            title="Redes Sociais"
            subtitle="Card Animado"
            total="R$3000,00"
            widthConceitual={'100%'}
            widthImplementação={'100%'}
            widthRevisão={'100%'}
            widthEntrega={'10%'}
            finalDelivery="28/06/22"
            status="Atrasado"
        />
        <ProjectList
            dateTime="01/04/22 - 13:58h"
            title="Papelaria"
            subtitle="Envelope"
            total="R$3000,00"
            widthConceitual={'100%'}
            widthImplementação={'10%'}
            widthRevisão={'0%'}
            widthEntrega={'0%'}
            finalDelivery="28/06/22"
            status="Em Andamento"
        />
        <FloatingButton />
    </div>
}

export default Projects;