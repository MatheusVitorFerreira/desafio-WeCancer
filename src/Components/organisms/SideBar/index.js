import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import Container from '../../Atoms/Container';
import { IoHomeOutline } from "react-icons/io5";
import { PiUsersThin } from "react-icons/pi";
import { IoWarningOutline } from "react-icons/io5";
import logo from '../../../assets/logo.png';
import { FiNavigation2 } from "react-icons/fi";
import { IoCalendarOutline } from "react-icons/io5";
import { CiChat1 } from "react-icons/ci";
import { TbVolume } from "react-icons/tb";
import { TbMessage2Filled } from "react-icons/tb";

function SideBar() {
    return (
        <nav className={styles.sideBar}>
            <Container customClass="colum">
            <div className={styles.logoContainer}>
                <img src={logo} className={styles.logo} alt="Logo" />
                <div>
                    <h1 className={styles.header}>wecancer</h1>
                    <p className={styles.subHeader}>times de saúde</p>
                </div>
            </div>
                <ul className={styles.list}>
                    <li>
                        <Link to="/inicio">
                            <IoHomeOutline className={styles.navIcon} />Inicio
                        </Link>
                    </li>

                    <li>
                        <Link to="/pessoas">
                            <PiUsersThin className={styles.navIcon} />Pessoas
                        </Link>
                    </li>
                    <li>
                        <Link to="/sintomas">
                            <IoWarningOutline className={styles.navIcon} />Sintomas
                        </Link>
                    </li>
                    <li>
                        <Link to="/navegacao">
                            <FiNavigation2 className={styles.navIcon} />Navegação
                        </Link>
                    </li>
                    <li>
                        <Link to="/agendamento">
                            <IoCalendarOutline className={styles.navIcon} />Agendamento
                        </Link>
                    </li>
                    <li>
                        <Link to="/chat">
                            <CiChat1 className={styles.navIcon} />Chat
                        </Link>
                    </li>
                    <li>
                        <Link to="/campanhas">
                            <TbVolume className={styles.navIcon} />Campanhas
                        </Link>
                    </li>
                    <li>
                        <Link to="/duvidas">
                            <TbMessage2Filled className={styles.navIcon} />Duvidas
                        </Link>
                    </li>
                </ul>
            </Container>
        </nav>
    );
}

export default SideBar;
