import { AiFillCamera, AiFillLike, AiFillPlusCircle, AiOutlineBarcode, AiOutlineFundProjectionScreen, AiOutlineQuestionCircle } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import { IoAddCircleSharp, IoInformationCircle, IoNotifications } from "react-icons/io5";
import { RiMoneyDollarBoxFill, RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

import styles from './Menu.module.scss';
import { Link, useNavigate } from "react-router-dom";

export interface MenuProps {
    imgUrl: string | null,
    alt: string,
    title: string,
    cnpj: string | null,
    appear: boolean
}

const Menu = ({ imgUrl, alt, title, cnpj, appear }: MenuProps) => {
    let toggle;

    const navigate = useNavigate();

    if (appear) {
        toggle = styles.menu + ' ' + styles.display + ' ' + styles.initial_animate;
    } else if (!appear) {
        toggle = styles.menu + ' ' + styles.final_animate;
    }

    const logOut = () => {
        localStorage['token_dash'] = null;
        navigate('/choose');
    }

    return <div className={toggle}>
        <div className={styles.profile_content}>
            <div className={styles.menu_content}>
                <div className={styles.d_flex}>
                    {imgUrl !== null || imgUrl === "" &&
                        <img className={styles.img} src={imgUrl} alt={alt} />
                    }
                    <p><b>{title}</b><br />
                        {cnpj !== null || cnpj === "" &&
                            <small className={styles.cnpj}>CNPJ: {cnpj}</small>
                        }
                    </p>
                </div>
            </div>
        </div>
        <div className={styles.menu_content_list}>
            <p><b>Criativo</b></p>
            <Link to={'/minhas-solicitacoes'}>
                <p><IoAddCircleSharp size={15} /> Minhas solicitações</p>
            </Link>
            <Link to={'/orcamentos-recebidos'}>
                <p><RiMoneyDollarBoxFill size={15} /> Orçamentos recebidos</p>
            </Link>
            <Link to={'/meus-projetos'}>
                <p><AiOutlineFundProjectionScreen size={15} /> Meus Projetos</p>
            </Link>
            <Link to={'/conteudo-recebido'}>
                <p><AiFillCamera size={15} /> Conteúdo recebido</p>
            </Link>
            <Link to={'/comentarios'}>
                <p><AiFillLike size={15} /> Avaliações/Comentários</p>
            </Link>

            <br />

            <p><b>Cadastro/finaceiro</b></p>
            <Link to={'/perfil'}>
                <p><IoInformationCircle size={15} /> Meu cadastro</p>
            </Link>
            <Link to={'/financeiro'}>
                <p><AiOutlineBarcode size={15} /> Financeiro</p>
            </Link>

            <hr />

            <Link to={'/sobre'}>
                <p><AiOutlineQuestionCircle size={15} /> Sobre o Dash</p>
            </Link>
            <p onClick={logOut}><BiExit size={15} /> Sair/Log off</p>
            <div className={styles.d_flex + ' ' + styles.social}>
                <BsInstagram size={30} />
                <BsFacebook size={30} />
                <BsLinkedin size={30} />
            </div>
        </div>
    </div>
        ;
}

export default Menu;