import Image from "next/image";
import styles from "./page.module.css";
import Comments from "@/components/comments/Comments";
import Menu from "@/components/menu/Menu";

const getData = async (slug) => {
  const res = await fetch(`https://blognet-ten.vercel.app/api/posts/${slug}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  return res.json();
};

const Page = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>{data?.title}</h1>
            <div className={styles.user}>
              {data?.user?.image && (
                <div className={styles.userImgContainer}>
                  <Image
                    src={data?.user?.image}
                    alt=""
                    fill
                    className={styles.avatar}
                  />
                </div>
              )}
              <div className={styles.userTextContainer}>
                <span className={styles.username}>{data?.user?.name}</span>
                <span className={styles.date}>
                  {data?.createdAt?.substring(0, 10)}
                </span>
              </div>
            </div>
          </div>
          {data?.img && (
            <div className={styles.imgContainer}>
              <Image
                src={data?.img}
                alt="post Image"
                fill
                className={styles.image}
              />
            </div>
          )}
        </div>
        <div className={styles.content}>
          <div className={styles.post}>
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: data?.desc }}
            />

            <div className={styles.comment}>
              <Comments postSlug={slug} />
            </div>
          </div>
          <Menu />
        </div>
      </div>
    </>
  );
};

export default Page;
