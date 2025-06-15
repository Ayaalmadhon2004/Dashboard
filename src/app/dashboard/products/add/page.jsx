import { addProduct } from "../../../lib/actions";
import style from "../../../ui/dashboard/products/addProducts/addproduct.module.css";


export default function add() {
  return (
    <div className={style.container}>
      <form action={addProduct} className={style.form}>
        <input type="text" placeholder="title" name="title" required/>
        <select name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option vlaue="computer">Computer</option>
        </select>
        <input type="number" placeholder="price" name="price"/>
        <input type="number" placeholder="stock" name="stock"/>
        <input type="text" placeholder="color" name="color"/>
        <input type="text" placeholder="size" name="size"/>
        <textarea
        name="desc"
        id="desc"
        rows="16"
        placeholder="Description"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
