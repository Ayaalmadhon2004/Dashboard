import style from "../ui/login/login.module.css";

export default function login() {
  return (
    <div className={style.container}>
      <form action="" className={style.form}>
        <h1>Login</h1>
        <input type="text" placeholder="username"/>
        <input type="password" placeholder="password"/>
        <button>Login</button>
      </form>
    </div>
  )
}
