"use client";

import { usePathname } from "next/navigation";
import style from "./navbar.module.css";

import {
  MdSearch,
  MdOutlineChat,
  MdNotificationsNone as MdNotification, // Optional alias if needed
  MdPublic,
} from "react-icons/md";

export default function Navbar() {
  const pathname = usePathname();
  const pageTitle = pathname.split("/").pop() || "Home";

  return (
    <div className={style.container}>
      <div className={style.title}>{pageTitle}</div>
      <div className={style.menu}>
        <div className={style.search}>
          <MdSearch />
          <input type="text" placeholder="Search..." className={style.input} />
        </div>
        <div className={style.icons}>
          <MdOutlineChat size={20} />
          <MdNotification size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
}
