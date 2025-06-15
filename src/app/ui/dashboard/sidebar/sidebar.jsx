import style from "../sidebar/sidebar.module.css";
import MenuLink from "./menuLink/MenuLink";
import Image from "next/image";


import {
  MdDashboard,
  MdSupervisorAccount,
  MdShoppingBag,
  MdAttachMoney,
  MdHelpCenter,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdViewQuilt
} from "react-icons/md";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisorAccount />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

export default function Sidebar() {
  return(
  <div className={style.container}>
    <div className={style.user}>
      <Image src="/assets/personalImg.jpg" alt="personal img" width={40} height={40}/>
      <div className={style.userDetail}>
        <span className={style.username}>Joe jamy</span>
        <span className={style.userTitle}>Administrator</span>
      </div>
    </div>
    <ul>
      {menuItems.map((cat)=>(
        <li key={cat.title}>
          <span className={style.cat}>{cat.title}</span>
          {cat.list.map((item)=>(
            <MenuLink item={item} key={item.title}/> // cleaner and to reuse the component .
          ))}
        </li>
      ))}
    </ul>
    <button className={style.layout}>
      <MdViewQuilt/>
      Layout
    </button>
  </div>
  )
}
