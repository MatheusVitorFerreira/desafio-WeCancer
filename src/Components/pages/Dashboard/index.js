import SideBar from "../../organisms/SideBar";
import styles from './styles.module.css';
function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <SideBar/>
    </div>
  );
}

export default Dashboard;
