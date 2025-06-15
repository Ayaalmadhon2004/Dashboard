import Image from "next/image";
import style from "../../../ui/dashboard/users/singleUser/singleuser.module.css";
import { fetchUser } from "../../../lib/data";

export default async function SingleUserPage({params}) {
    const users = await fetchUsers();
    console.log(users);

    const {id} =params;
    const user=await fetchUser(id);
    
  return (
    <div className={style.container}>
        <div className={style.infoContainer}>
            <div className={style.imgContainer}>
                <Image src="/assets/personal.jpg" alt="" fill/>
            </div>
            {user.username}
        </div>
        <div className={style.formContainer}>
        < div className={style.form}>
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
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>


            <label>Is Active?</label>
            <select name="isActive" id="isActive">
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>

            <button>Update</button>
         </div>
        </div>
    </div>
  )
}
