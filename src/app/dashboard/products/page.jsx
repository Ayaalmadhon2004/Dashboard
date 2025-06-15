import style from "../../ui/dashboard/products/products.module.css";
import Search from "../../ui/dashboard/search/search";
import Image from "next/image";
import Link from "next/link";
import Pagination from "../../ui/dashboard/pagination/pagination";
import { fetchUsers } from "../../lib/data"; // افترضنا أن لديك دالة fetchUsers
import { deleteProduct } from "../../lib/actions";

export default async function products({ searchParams }) {
  const q = searchParams?.q || ""; // كلمة البحث من الـ URL
  const page = searchParams?.page || 1; // رقم الصفحة من الـ URL
  const { count, users } = await fetchUsers(q, page); 

  return (
    <div className={style.container}>
      <div className={style.top}>
        <Search placeholder="Search for a user" />
        <Link href="/dashboard/users/add">
          <button className={style.addButton}>Add New User</button>
        </Link>
      </div>

      <table className={style.product}>
        <thead>
          <tr>
            <td>Username</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Address</td>
            <td>Active</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((product) => (
            <tr key={product._id}>
              <td>
                <div className={style.user}>
                  <Image
                    src={product.img || "/user-placeholder.jpg"}
                    alt={product.username}
                    width={40}
                    height={40}
                  />
                  {product.username}
                </div>
              </td>
              <td>{product.email}</td>
              <td>{product.phone || "N/A"}</td>
              <td>{product.address || "N/A"}</td>
              <td>{product.isActive ? "Active" : "Inactive"}</td>
              <td>
                <Link href={`/dashboard/users/${product._id}`}>
                  <button className={`${style.button} ${style.view}`}>View</button>
                </Link>
                <form action={deleteProduct}>
                   <input type="hidden" name="id" value={product._id.toString()} />
                  <button className={`${style.button} ${style.delete}`}>Delete</button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination count={count} />
    </div>
  );
}
