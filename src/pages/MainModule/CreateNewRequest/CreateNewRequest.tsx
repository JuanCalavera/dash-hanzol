import { IoAdd } from 'react-icons/io5';
import ButtonSubmit from '../../../components/ButtonSubmit/ButtonSubmit';
import DefaultInput from '../../../components/DefaultInput/DefaultInput';
import DefaultTextArea from '../../../components/DefaultTextArea/DefaultTextArea';
import Header from '../../../components/Header/Header';
import styles from './CreateNewRequest.module.scss';

const CreateNewRequest = () => {
    return (
        <div>
            <Header
                title='Solicite uma tarefa'
            />
            <div className={styles.container}>
                <h2>Solicite uma Peça Publicitária</h2>
                <hr />
                <DefaultInput
                    label='Título'
                    type='text'
                    autoComplete='on'
                    value={undefined}
                    onChange={() => { }}
                />

                <DefaultInput
                    label='Prazo de Entrega'
                    type='date'
                    autoComplete='on'
                    value={undefined}
                    onChange={() => { }}
                />

                <DefaultInput
                    label='Tamanho máximo das peças'
                    type='text'
                    autoComplete='on'
                    value={undefined}
                    onChange={() => { }}
                />

                <DefaultTextArea
                    label='Descrição'
                    value={undefined}
                    onChange={() => { }}
                />

                <ButtonSubmit disabled={false}>
                    <IoAdd /> Criar
                </ButtonSubmit>
            </div>
        </div>
    );
}

export default CreateNewRequest;