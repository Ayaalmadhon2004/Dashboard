import Sidebar from "../ui/dashboard/sidebar/sidebar"
import Navbar from "../ui/dashboard/navbar/navbar"
import styles from "../ui/dashboard/dashboard.module.css"
import Footer from "../ui/dashboard/footer/footer";


export default function layout({children}) {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar/>
      </div>
      <div className={styles.menu2}>
        <Navbar/>
        {children}
        <Footer/>
      </div>
    </div>
  )
}
