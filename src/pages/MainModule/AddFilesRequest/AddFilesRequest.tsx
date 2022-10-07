import DefaultInput from '../../../components/DefaultInput/DefaultInput';
import Header from '../../../components/Header/Header';
import styles from './AddFilesRequest.module.scss'
import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { baseUrl, headers } from '../../../utils/auth';
import axios from 'axios';

const AddFilesRequest = () => {
    const id = useParams().id;

    const files = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<any>(null);
    const [actualImage, setActualImage] = useState<any>();

    const fileUploadHandler = () => {
        if (files.current?.files !== null) {
            const currentImage : any = files.current?.files[0];
            setSelectedFile(files.current?.files[0]);
            setActualImage(URL.createObjectURL(currentImage));
        }
    }

    const submit = () => {
        const form = new FormData();
        form.append('foto', selectedFile);
        axios.post(`${baseUrl}pub-piece/${id}/insert-midia`, form, {
            headers: {
                'Content-Type': 'multipart/form-data',
                "Authorization": `Bearer ${localStorage['token_dash']}`
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
                <h3>Adicionar Arquivos</h3>
                <input type="file" ref={files} id="add" onChange={fileUploadHandler} multiple accept='image/*' />
                <button onClick={submit}>Testar</button>
                <h3>Preview da Imagem: </h3>
                <img src={actualImage} style={{width:'100%', height: 'auto'}} alt="" />
            </div>

        </div>
    );
}

export default AddFilesRequest;
