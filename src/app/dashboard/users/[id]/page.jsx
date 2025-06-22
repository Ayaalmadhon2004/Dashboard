import Image from "next/image";
import style from "../../../ui/dashboard/users/singleUser/singleuser.module.css";
import { fetchUser } from "../../../lib/data";
import { updateUser } from "../../../lib/actions";

export default async function SingleUserPage({params}) { // params come from dynamic section , so when i wrote ${user.id} he knows that he will go to [id] section by default
    //const users = await fetchUser();
    //console.log(users);

    const {id} =params;
    const user=await fetchUser(id);
    
  return (
    <div className={style.container}>
        <div className={style.infoContainer}>
            {user.username}
        </div>
        <div className={style.formContainer}>
        <form action={updateUser} className={style.form}>
            <input type="hidden" name="id" value={user.id}/>
            <label>Username</label>
            <input type="text" name="username" placeholder={user.username}/>
            <label>Email</label>
            <input type="email" name="email" placeholder={user.email}/>
            <label>Password</label>
            <input type="password" name="password" placeholder="John Doe"/>
            <label>phone</label>
            <input type="phone" name="phone" placeholder={user.phone}/>
            <label>Address</label>
            <input type="text" name="address" placeholder={user.address}/>

            <label>Is Admin?</label>
            <select name="isAdmin" id="isAdmin">
                <option value={true} selected={user.isAdmin}>Yes</option>
                <option value={false} selected={!user.isAdmin}>No</option>
            </select>


            <label>Is Active?</label>
            <select name="isActive" id="isActive">
                <option value={true} selected={user.isAdmin}>Yes</option>
                <option value={false} selected={!user.isAdmin}>No</option>
            </select>

            <button>Update</button>
            </form>
         </div>
    </div>
  )
}
