import FilterList from "../../../components/FilterList/FilterList";
import FloatingButton from "../../../components/FloatingButton/FloatingButton";
import Header from "../../../components/Header/Header";
import ListBudgets from "../../../components/ListBudgets/ListBudgets";

const Budgets = () => {
    return <div>
        <Header title="Orçamentos recebidos" />
        <FilterList
        onClick={() => {}}
        orderTitle="Mais Recentes" />
        <ListBudgets
            buttonText="Aprovar"
            receiveText="03/04/22 - 20:58h"
            titleText="Anuncio em Jornal"
            subtitleText="1/3 da página"
            content="Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis..."
            total="R$3.450,10"
        />
        <ListBudgets
            buttonText="Aprovado"
            receiveText="03/04/22 - 20:58h"
            titleText="Anuncio em Jornal"
            subtitleText="1/3 da página"
            content="Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis..."
            total="R$3.450,10"
        />
        <ListBudgets
            buttonText="Cancelado"
            receiveText="03/04/22 - 20:58h"
            titleText="Anuncio em Jornal"
            subtitleText="1/3 da página"
            content="Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis..."
            total="R$3.450,10"
        />
        <FloatingButton/>
    </div>
}

export default Budgets;