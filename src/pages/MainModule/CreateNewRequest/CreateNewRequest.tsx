import axios from 'axios';
import { useEffect, useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { IoAdd } from 'react-icons/io5';
import { TailSpin } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import ButtonSubmit from '../../../components/ButtonSubmit/ButtonSubmit';
import DefaultInput from '../../../components/DefaultInput/DefaultInput';
import DefaultTextArea from '../../../components/DefaultTextArea/DefaultTextArea';
import Header from '../../../components/Header/Header';
import { currentTime, userType } from '../../../utils/auth';
import styles from './CreateNewRequest.module.scss';

const CreateNewRequest = () => {

    const [user, setUser] = useState("");
    const [title, setTitle] = useState("");
    const [deliverDate, setdeliverDate] = useState("");
    const [description, setDescription] = useState("");
    const [size, setSize] = useState("");
    const navigate = useNavigate();
    const current = currentTime();
    const [isLoading, setIsLoading] = useState(false);

    const titleChange = (newtitle: string) => {
        setTitle(newtitle);
    }

    const deliverChange = (newdeliver: string) => {
        setdeliverDate(newdeliver);
    }

    const descriptionChange = (newdes: string) => {
        setDescription(newdes);
    }

    const sizeChange = (newsize: string) => {
        setSize(newsize);
    }

    useEffect(() => {

        const type = userType(localStorage['token_dash']);
        type.then(
            (data) => {
                if (data !== 'client') {
                    navigate('/choose');
                }
            }
        ).catch(() => {
            navigate('/choose');
        });

    }, []);

    function createPub() {

        setIsLoading(true);

        let data = {
            title: title,
            description: description,
            size: size,
            deliver_date: deliverDate
        };

        if (
            data.title === "" ||
            data.description === "" ||
            data.size === ""
        ) {
            alert('Preencha todos os campos');
            setIsLoading(false);
            return
        }

        axios.post('http://127.0.0.1:8000/api/pub-piece/', data, {
            'headers': {
                'Accept': 'Application/json',
                'Authorization': localStorage['token_dash']
            }
        }).then((res) => {
            alert(`Solicitação de ${res.data.title} criada com sucesso :)`)
            navigate('/minhas-solicitacoes')

        }).catch(() => {
            navigate('/choose');
        });
    }

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
                    min={undefined}
                    autoComplete='on'
                    value={title}
                    onChange={titleChange}
                />

                <DefaultInput
                    label='Prazo de Entrega'
                    type='date'
                    min={current}
                    autoComplete='on'
                    value={deliverDate}
                    onChange={deliverChange}
                />

                <DefaultInput
                    label='Tamanho das peças (Ex.: 1080 x 1920 px)'
                    type='text'
                    min=''
                    autoComplete='on'
                    value={size}
                    onChange={sizeChange}
                />

                <DefaultTextArea
                    label='Descrição'
                    value={description}
                    onChange={descriptionChange}
                />

                <div onClick={createPub}>
                    <ButtonSubmit disabled={false}>
                        {isLoading ? (
                            <TailSpin color="black" height={18} width={28} />
                        ) : (
                            <div>
                                <IoAdd /> Criar
                            </div>
                        )}
                    </ButtonSubmit>
                </div>
            </div>
        </div>
    );
}

export default CreateNewRequest;