import Image from "next/image";
import styles from "./featured.module.css";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/random", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

export default async function Featured() {
  const data = await getData();

  return (
    <>
      <div className={styles.container}>
        <span className={styles.title}>
          <b>Welcome to BlogNet!</b> A social network home of blogs.
        </span>
        {data.map((item) => (
          <div className={styles.post} key={item?._id}>
            {item?.img && (
              <div className={styles.imgContainer}>
                <Image src={item?.img} alt="" fill className={styles.image} />
              </div>
            )}
            <div className={styles.textContainer}>
              <h2 className={styles.postTitle}>{item?.title}</h2>
              <p className={styles.postDesc}>
                {item?.desc?.substring(0, 200) + "..."}
              </p>
              <Link className={styles.button} href={`/posts/${item?.slug}`}>
                <span>Read More</span>
                <FaChevronRight size={13} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
