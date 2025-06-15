import Image from "next/image";
import style from "../../../ui/dashboard/products/singleProduct/singleproduct.module.css";

export default function SingleUserPage() {
  return (
    <div className={style.container}>
        <div className={style.infoContainer}>
            <div className={style.imgContainer}>
                <Image src="/assets/personal.jpg" alt="" fill/>
            </div>
            John Doe
        </div>
        <div className={style.formContainer}>
        < div className={style.form}>
            <label>Username</label>
            <input type="text" name="username" placeholder="John Doe"/>
            <label>Email</label>
            <input type="email" name="email" placeholder="John.123@gmail.com"/>
            <label>Password</label>
            <input type="password" name="password" placeholder="John Doe"/>
            <label>phone</label>
            <input type="phone" name="phone" placeholder="1232312354"/>
            <label>Address</label>
            <input type="text" name="address" placeholder="New York City"/>

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
