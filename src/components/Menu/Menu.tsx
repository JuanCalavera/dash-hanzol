import { AiFillCamera, AiFillLike, AiFillPlusCircle, AiOutlineBarcode, AiOutlineFundProjectionScreen, AiOutlineQuestionCircle } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import { IoAddCircleSharp, IoInformationCircle, IoNotifications } from "react-icons/io5";
import { RiMoneyDollarBoxFill, RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

import styles from './Menu.module.scss';

export interface MenuProps{
    imgUrl: string,
    alt: string,
    title: string,
    cnpj: string,
    appear: boolean
}

const Menu = ({imgUrl, alt, title, cnpj, appear}:MenuProps) => {
    let toggle;

    if(appear){
        toggle = styles.menu + ' ' + styles.display + ' ' + styles.initial_animate;
    } else if (!appear){
        toggle = styles.menu + ' ' + styles.final_animate;
    }

    return <div className={toggle}>
        <div className={styles.profile_content}>
            <div className={styles.menu_content}>
                <div className={styles.d_flex}>
                    <img className={styles.img} src={imgUrl} alt={alt} />
                    <p><b>{title}</b><br />
                        <small className={styles.cnpj}>CNPJ: {cnpj}</small>
                    </p>
                </div>
            </div>
        </div>
        <div className={styles.menu_content_list}>
            <p><b>Criativo</b></p>
            <p><IoAddCircleSharp size={15} /> Minhas solicitações</p>
            <p><RiMoneyDollarBoxFill size={15} /> Minhas solicitações</p>
            <p><AiOutlineFundProjectionScreen size={15} /> Meus Projetos</p>
            <p><AiFillCamera size={15} /> Conteúdo recebido</p>
            <p><AiFillLike size={15} /> Avaliações/Comentários</p>

            <br />

            <p><b>Cadastro/finaceiro</b></p>
            <p><IoInformationCircle size={15} /> Meu cadastro</p>
            <p><AiOutlineBarcode size={15} /> Minhas solicitações</p>

            <hr />

            <p><AiOutlineQuestionCircle size={15} /> Sobre o Dash</p>
            <p><BiExit size={15} /> Sair/Log off</p>
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