import DefaultInput from '../../../components/DefaultInput/DefaultInput';
import Header from '../../../components/Header/Header';
import styles from './AddFilesRequest.module.scss'
import { useParams } from 'react-router-dom';
import { useRef } from 'react';

const AddFilesRequest = () => {
    const id = useParams().id;
    const inputFiles = useRef(null);

    const onSubmit = async (data: any) => {
        data.preventDefault();
        console.log(data);
        
    }

    return (
        <div>
            <Header
                title='Adicionar Arquivos'
            />
            <div className={styles.container}>
                <form onSubmit={onSubmit} method="post" encType='multipart/form-data'>
                    <label htmlFor="add">Adicionar Arquivos</label>
                    <input type="file" name="files_pub" id="add" ref={inputFiles} multiple />
                    <button type='submit'>Testar</button>
                </form>
            </div>

        </div>
    );
}

export default AddFilesRequest;
