"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import style from "./search.module.css";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ placeholder }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);
    const query = e.target.value;

    params.set("page",1);

    if (query.length >= 2) {
      params.set("q", query);
    } else {
      params.delete("q");
    }

    router.replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className={style.container}>
      <input
        type="text"
        placeholder={placeholder}
        className={style.input}
        onChange={handleSearch}
      />
    </div>
  );
}
