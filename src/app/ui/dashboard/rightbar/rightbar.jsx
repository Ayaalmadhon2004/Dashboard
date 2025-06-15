import style from "./rightbar.module.css";
import { MdPlayCircleFilled } from "react-icons/md";

export default function rightbar() {
  return (
    <div className={style.container}>
      <div className={style.item}>
        <div className={style.texts}>
          <span className={style.notification}>Available Now</span>
          <h3 className={style.title}>
            How to use the new Version of the dashboard ?
          </h3>
          <span className={style.subtitle}>Takes 4 minutes to learn </span>
          <p className={style.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta tempora reprehenderit inventore iste quam molestiae vero aspernatur, dolor minima dolores esse ut quidem fuga cupiditate voluptas. Voluptate perferendis qui itaque!
          </p>
          <button className={style.button}>
            <MdPlayCircleFilled/>
            Watch
          </button>
          //image ai 
        </div>
      </div>
    </div>
  )
}
