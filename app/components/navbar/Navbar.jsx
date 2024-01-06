import Link from "next/link";
import styles from "./navbar.module.css";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

export default function Navbar() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.social}>
          <FaFacebook style={{ color: "#1877F2" }} size={22} />
          <FaTwitter size={22} style={{ color: "#08a0e9" }} />
          <FaGithub size={22} />
          <FaLinkedin size={22} style={{ color: "#0077b5" }} />
        </div>
        <div className={styles.logo}>
          <h2>BlogNet</h2>
        </div>
        <div className={styles.links}>
          <ThemeToggle />
          <Link className={styles.link} href="/">
            HomePage
          </Link>
          <Link className={styles.link} href="/">
            Contact Us
          </Link>
          <Link className={styles.link} href="/about">
            About
          </Link>
          <AuthLinks />
        </div>
      </div>
    </>
  );
}
