import DefaultInput from '../../../components/DefaultInput/DefaultInput';
import Header from '../../../components/Header/Header';
import styles from './AddFilesRequest.module.scss'
import { useParams } from 'react-router-dom';
import { useRef, useState } from 'react';
import { baseUrl, headers } from '../../../utils/auth';
import axios from 'axios';

const AddFilesRequest = () => {
    const id = useParams().id;

    const files = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<any>(null);

    const fileUploadHandler = () => {
        setSelectedFile(files.current?.files);
        
    }

    const submit = () => {
        axios.post(`${baseUrl}pub-piece/${id}/insert-midia`, {
            files: ''
        }, {
            headers: {
                'Content-Type': 'multipart/form-data',
                "Authorization": `Bearer ${localStorage['token_dash']}`,
                "Accept": 'Application/json'
            }
        })
            .then(() => {
                alert('Imagens inseridas com sucesso!!!');
            })
            .catch(() => {
                alert('Ocorreu um erro, tente novamente mais tarde :(');
            })
    }


    return (
        <div>
            <Header
                title='Adicionar Arquivos'
            />
            <div className={styles.container}>
                <label htmlFor="add">Adicionar Arquivos</label>
                <input type="file" ref={files} id="add" multiple accept='image/*' />
                <button onClick={fileUploadHandler}>Testar</button>
            </div>

        </div>
    );
}

export default AddFilesRequest;
