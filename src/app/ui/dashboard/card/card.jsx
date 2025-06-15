import style from "./card.module.css";
import { MdSupervisorAccount } from "react-icons/md";

export default function Card() {
  return (
    <div className={style.container}>
      <MdSupervisorAccount size={24} />
      <div className={style.texts}>
        <span className={style.title}>Total Users</span>
        <span className={style.number}>10.23</span>
        <span className={style.detail}>
          <span className={style.positive}>12%</span> more than previous week
        </span>
      </div>
    </div>
  );
}
