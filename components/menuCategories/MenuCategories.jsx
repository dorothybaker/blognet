import Link from "next/link";
import styles from "./menuCategories.module.css";

const getData = async () => {
  const res = await fetch("https://blognet-ten.vercel.app/api/categories", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const MenuCategories = async () => {
  const data = await getData();

  return (
    <div className={styles.categoryList}>
      {data.map((item) => (
        <Link
          href={`/blog?cat=${item?.slug}`}
          className={`${styles.categoryItem} ${styles[item?.slug]}`}
          key={item?._id}
        >
          {item?.title}
        </Link>
      ))}
    </div>
  );
};

export default MenuCategories;
