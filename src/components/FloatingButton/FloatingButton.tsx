import { MdAddComment } from "react-icons/md";
import styles from "./FloatingButton.module.scss";

const FloatingButton = () => {
    return <div className={styles.floating_container}>
        <div className={styles.floating_button}>
            <MdAddComment size={50}/>
        </div>
    </div>
}

export default FloatingButton;