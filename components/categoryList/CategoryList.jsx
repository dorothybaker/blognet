import Link from "next/link";
import styles from "./categoryList.module.css";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("https://blognet-ten.vercel.app/api/categories", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

export default async function CategoryList() {
  const data = await getData();

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Popular Categories</h2>
        <div className={styles.categories}>
          {data?.map((item) => (
            <Link
              href={`/blog?cat=${item?.slug}`}
              className={`${styles.category} ${styles[item?.slug]} `}
              key={item?._id}
            >
              {item?.img && (
                <Image
                  src={item?.img}
                  alt=""
                  width={32}
                  height={32}
                  className={styles.image}
                />
              )}
              <span>{item?.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
