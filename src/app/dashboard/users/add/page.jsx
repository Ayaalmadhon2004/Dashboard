import { addUser } from "../../../lib/actions";
import style from "../../../ui/dashboard/users/addusers/addusers.module.css";


export default function add() {
  return (
    <div className={style.container}>
      <form action={addUser} className={style.form}>
        <input type="text" placeholder="username" name="username" required/>
        <input type="email" placeholder="email" name="email" required/>
        <input type="password" placeholder="password" name="password" required/>
        <input type="phone" placeholder="phone" name="phone" required/>

        <select name="isAdmin" id="isAdmin">
          <option value={false} >is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <select name="isAdmin" id="isAdmin">
          <option value={true} >is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <textarea
        name="address"
        id="address"
        rows="16"
        placeholder="address"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
