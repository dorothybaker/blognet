import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>BlogNet</h1>
        <h3>A social network home of blogs</h3>
      </div>

      <div className={styles.desc}>
        Welcome to BlogNet, the premier social network and community for
        bloggers! At BlogNet, we are dedicated to providing a vibrant and
        inclusive platform where bloggers of all backgrounds can connect, share,
        and discover a wide array of captivating and thought-provoking content.
        Whether you're an established blogger, an aspiring writer, or simply a
        passionate reader, BlogNet offers a dynamic space to explore diverse
        perspectives, engage in meaningful discussions, and cultivate a thriving
        network of like-minded individuals. Join us in celebrating the art of
        blogging, unleashing creativity, and fostering connections that
        transcend boundaries. Together, let's embark on a journey of
        inspiration, knowledge, and limitless storytelling. BlogNet – where
        blogs find a home and communities thrive.
      </div>

      <div>
        Have fun while exploring BlogNet. For any inquiries feel free to contact
        us.
      </div>
    </div>
  );
}
