import Link from "next/link";

const getData = async () => {
  const res = await fetch("https://blognet-ten.vercel.app/api/popular", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const MenuPosts = async ({ styles }) => {
  const data = await getData();

  return (
    <div className={styles.items}>
      {data.map((item) => (
        <Link
          href={`/posts/${item?.slug}`}
          className={styles.item}
          key={item?._id}
        >
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles[item?.catSlug]} `}>
              {item?.catSlug}
            </span>
            <h4 className={styles.postTitle}>{item?.title}</h4>
            <div className={styles.detail}>
              <span className={styles.username}>{item?.user?.name}</span>
              <span className={styles.date}>
                {item?.createdAt.substring(0, 10)}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;
