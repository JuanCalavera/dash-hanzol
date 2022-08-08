import ContentComments from "../../../components/ContentComments/ContentComments";
import FilterList from "../../../components/FilterList/FilterList";
import Header from "../../../components/Header/Header";
import styles from "./Comments.module.scss";

const Comments = () => {
    return <div>
        <Header title='Avaliações/comentários' />
        <FilterList orderTitle="Mais recentes" />
        <ContentComments
            title="Mascote para Criação"
            subtitle="15/07/2022 Recuperação"
            photoUrl="https://pm1.narvii.com/6870/cf3d4ece850343f23b0c8dde897bb0003a112019r1-480-629v2_hq.jpg"
            status="success"
            content="Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.Aenean aliquam molestie leo, vitae iaculis nisl.Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus."
        />
        <ContentComments
            title="Mascote para Verificação"
            subtitle="15/07/2022 Recuperação"
            photoUrl="https://pm1.narvii.com/6870/cf3d4ece850343f23b0c8dde897bb0003a112019r1-480-629v2_hq.jpg"
            status="fail"
            content="Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.Aenean aliquam molestie leo, vitae iaculis nisl.Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus."
        />
    </div>;
}

export default Comments;