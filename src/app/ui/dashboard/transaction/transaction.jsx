import Image from "next/image";
import style from "./transaction.module.css";

export default function Transaction() {
  const data = [
    {
      name: "John Doe",
      status: "Pending",
      date: "14.02.2024",
      amount: "$3.3334",
    },
    {
      name: "Alice Smith",
      status: "done",
      date: "13.02.2024",
      amount: "$2.5000",
    },
    {
      name: "Michael Brown",
      status: "cancelled",
      date: "12.02.2024",
      amount: "$1.2000",
    },
    {
      name: "Jane Taylor",
      status: "Pending",
      date: "11.02.2024",
      amount: "$5.4000",
    },
  ];

  return (
    <div className={style.container}>
      <h2 className={style.title}>Latest Transactions</h2>
      <table className={style.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className={style.tdImg}>
                 <Image
                  src="/assets/personalImg.jpg"
                  alt={item.name}
                  width={40}
                  height={40}
                  className={style.userImage}
                />
                <span>
                   {item.name}
                </span>
              </td>
              <td>
                <span
                  className={`${style.status} ${
                    style[item.status.toLowerCase()] || ""
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td>{item.date}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
