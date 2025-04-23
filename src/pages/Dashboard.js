import SideBar from "../layout/SideBar";
import styles from './Dashboard.module.css';
function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <SideBar/>
    </div>
  );
}

export default Dashboard;
