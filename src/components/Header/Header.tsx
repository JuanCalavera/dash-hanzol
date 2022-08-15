import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

export interface HeaderProps {
    title: string;
}

const Header = ({ title }: HeaderProps) => {

    const navigate = useNavigate();

    function handleBackClick(){
        navigate('/home');
    }

    document.body.style.background = "black";
    return <div>
        <div className={styles.header_with_title}>
            <div onClick={() => handleBackClick()} className={styles.back_button}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-arrow-left-square" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                </svg>
            </div>
            <h1 className={styles.title_header}>{title}</h1>
        </div>
        <hr />
    </div>
}

export default Header;