"use client";

import style from "../ui/dashboard/dashboard.module.css"
import Card from "../ui/dashboard/card/card"
import Rightbar from "../ui/dashboard/rightbar/rightbar"
import Transaction from "../ui/dashboard/transaction/transaction"
import Chart from "../ui/dashboard/chart/chart"


import dynamic from "next/dynamic";

const chart = dynamic(() => import("@/app/ui/dashboard/chart/chart"), {
  ssr: false,
});

export default function dashboard() {
  return (
    <div className={style.wrapper}>
      <div className={style.main}>
        <div className={style.cards}>
          <Card/>
          <Card/>
          <Card/>        
        </div>
        <Transaction/>
        <Chart/>
      </div>
      <div className={style.side}>
        <Rightbar/>
      </div>
    </div>
  )
}
