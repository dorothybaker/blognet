import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.logo}>
            <div className={styles.image}>
              <img
                src="https://www.svgrepo.com/show/448937/blog.svg"
                alt="blognet"
                width={24}
                height={24}
              />
            </div>
            <h3 className={styles.logoText}>BlogNet</h3>
          </div>
          <p className={styles.desc}>
            BlogNet, the premier social network and community for bloggers!Join
            us in celebrating the art of blogging, unleashing creativity, and
            fostering connections that transcend boundaries. Together, let's
            embark on a journey of inspiration, knowledge, and limitless
            storytelling. BlogNet – where blogs find a home and communities
            thrive.
          </p>
          <div className={styles.icons}>
            <FaFacebook style={{ color: "#1877F2" }} size={22} />
            <FaTwitter size={22} style={{ color: "#08a0e9" }} />
            <FaGithub size={22} />
            <FaLinkedin size={22} style={{ color: "#0077b5" }} />
          </div>
        </div>
        <div className={styles.links}>
          <div className={styles.list}>
            <span className={styles.listTitle}>Links</span>
            <Link href="/">HomePage</Link>
            <Link href="/">Blog</Link>
            <Link href="/about">About</Link>
            <Link href="/">Contact Us</Link>
          </div>
          <div className={styles.list}>
            <span className={styles.listTitle}>Tags</span>
            <Link href="/">Coding</Link>
            <Link href="/">Travel</Link>
            <Link href="/">Fashion</Link>
            <Link href="/">Style</Link>
          </div>
          <div className={styles.list}>
            <span className={styles.listTitle}>Social</span>
            <Link href="/">Facebook</Link>
            <Link href="/">Twitter</Link>
            <Link href="/">Github</Link>
            <Link href="/">Linkedin Us</Link>
          </div>
        </div>
      </div>
    </>
  );
}
