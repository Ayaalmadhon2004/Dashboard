import style from "./footer.module.css"

export default function footer() {
  return (
    <div>
      <div className={style.container}>
        <div className={style.logo}>Aya Dev</div>
        <div className={style.text}>All rights reserved...</div>
      </div>
    </div>
  )
}
