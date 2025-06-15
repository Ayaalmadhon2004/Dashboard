import style from "../../ui/dashboard/users/users.module.css";
import Search from "../../ui/dashboard/search/search";
import Image from "next/image";
import Link from "next/link";
import Pagination from "../../ui/dashboard/pagination/pagination";
import { fetchUsers } from "../../lib/data";
import { deleteUser } from "../../lib/actions";


export default async function Users({searchParams}) { // we have searchParams from the search bar , 
  const q = searchParams?.q || ""; // extract the q from search params
  const page = searchParams?.page || 1; // ? means optional chanining (save choose) 
  const {count,users} = await fetchUsers(q,page); // count from pagination ,, users from mongoose


  

  return (
    <div className={style.container}>
      <div className={style.top}>
        <Search placeholder="Search for a user" />
        <Link href="/dashboard/users/add">
          <button className={style.addButton}>Add New</button>
        </Link>
      </div>

      <table className={style.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
       <tbody>
  {users.map((user) => (
    <tr key={user._id}>
      <td>
        <div className={style.user}>
          <Image src="/personal.jpg" alt={user.username} width={40} height={40} />
          {user.username}
        </div>
      </td>
      <td>{user.phone}</td>
      <td>غير متوفر</td>
      <td>{user.isAdmin ? "Admin" : "User"}</td>
      <td>{user.isActive ? "Active" : "Inactive"}</td>
      <td>
        <Link href={`/dashboard/users/${user._id}`}>
          <button className={`${style.button} ${style.view}`}>View</button>
        </Link>
        <form action={deleteUser}>
          <input type="hidden" name="id" value={user._id.toString()} />
          <button className={`${style.button} ${style.delete}`}>Delete</button>
        </form>
      </td>
    </tr>
  ))}
</tbody>


      </table>
      <Pagination count={count}/>
    </div>
  );
}
