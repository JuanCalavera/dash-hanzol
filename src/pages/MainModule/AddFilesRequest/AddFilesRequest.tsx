import DefaultInput from '../../../components/DefaultInput/DefaultInput';
import Header from '../../../components/Header/Header';
import styles from './AddFilesRequest.module.scss'
import { useParams } from 'react-router-dom';
import { useRef, useState } from 'react';

const AddFilesRequest = () => {
    const id = useParams().id;
    const formData = new FormData();

    const onFileChange = (e: any) => {
        
        formData.append('uploads', e.target.files);
        console.log(formData.keys);

    }

    const onSubmit = async (data: any) => {
    }

    return (
        <div>
            <Header
                title='Adicionar Arquivos'
            />
            <div className={styles.container}>
                <form onSubmit={onSubmit} method="post" encType='multipart/form-data'>
                    <label htmlFor="add">Adicionar Arquivos</label>
                    <input type="file" name='file_upload' id="add" onChange={onFileChange} multiple />
                    <button>Testar</button>
                </form>
            </div>

        </div>
    );
}

export default AddFilesRequest;
