import styles from "./menu.module.css";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

export default function Menu() {
  return (
    <>
      <div className={styles.container}>
        {/* TOP */}
        <h5 className={styles.subtitle}>What's hot</h5>
        <h3 className={styles.title}>Most Popular</h3>
        <MenuPosts styles={styles} />

        {/* MIDDLE */}
        <h5 className={styles.subtitle}>Discover by topic</h5>
        <h3 className={styles.title}>Categories</h3>
        <MenuCategories styles={styles} />
      </div>
    </>
  );
}
