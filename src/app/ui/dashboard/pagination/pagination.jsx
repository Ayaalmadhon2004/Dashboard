"use client"; // Tells Next.js this is a client-side component

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import style from "./pagination.module.css";

export default function Pagination({ count }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const params = new URLSearchParams(searchParams);

  const ITEM_PER_PAGE = 2;
  const hasPrev = page > 1;

  const hasNext = ITEM_PER_PAGE * page < count;

  const handleChangePage = (type) => {
    const newPage = type === "prev" ? page - 1 : page + 1;
    params.set("page", newPage.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={style.container}>
      <button
        className={style.button}
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>

      <button
        className={style.button}
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
}
