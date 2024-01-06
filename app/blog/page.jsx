import CardList from "@/components/cardList/CardList";
import styles from "./blogpage.module.css";
import Menu from "@/components/menu/Menu";

const Page = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <>
      <div className={styles.container}>
        <h1>
          Category:{" "}
          <span className={`${styles.title} ${styles[cat]}`}>{cat}</span>
        </h1>
        <div className={styles.content}>
          <CardList page={page} cat={cat} />
          <Menu />
        </div>
      </div>
    </>
  );
};

export default Page;
