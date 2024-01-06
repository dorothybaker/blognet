import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import styles from "./cardList.module.css";

const getData = async (page, cat) => {
  const res = await fetch(
    `https://blognet-ten.vercel.app/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-cache",
    }
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

export default async function CardList({ page, cat }) {
  const { posts, count } = await getData(page, cat);

  const POSTS_PER_PAGE = 5;
  const hasPrev = POSTS_PER_PAGE * (page - 1) > 0;
  const hasNext = POSTS_PER_PAGE * (page - 1) + POSTS_PER_PAGE < count;

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Recent Posts</h2>
        <div className={styles.posts}>
          <div className={styles.post}>
            {posts?.map((item) => (
              <Card key={item?._id} item={item} />
            ))}
          </div>
        </div>
        <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
      </div>
    </>
  );
}
