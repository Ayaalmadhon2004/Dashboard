import Image from "next/image";
import style from "../../../ui/dashboard/products/singleProduct/singleproduct.module.css";
import { fetchProduct } from "../../../lib/data";
import { updateProduct } from "../../../lib/actions";

export default async function SingleUserPage({ params }) {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className={style.container}>
      <div className={style.infoContainer}>
        <p>{product.username}</p>
      </div>

      <div className={style.formContainer}>
        <form action={updateProduct} className={style.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder={product.username} />

          <label>Email</label>
          <input type="email" name="email" placeholder={product.email} />

          <label>Password</label>
          <input type="password" name="password" placeholder="Password" />

          <label>Phone</label>
          <input type="tel" name="phone" placeholder={product.phone} />

          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder={`New ${product.address}`}
          />

          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin" defaultValue={product.isAdmin}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <label>Is Active?</label>
          <select name="isActive" id="isActive" defaultValue={product.isActive}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}
