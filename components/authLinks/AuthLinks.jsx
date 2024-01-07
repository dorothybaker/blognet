"use client";

import Link from "next/link";
import styles from "./authLinks.module.css";
import { useContext, useState } from "react";

import { MdClose, MdOutlineMenu } from "react-icons/md";
import { ThemeContext } from "@/context/ThemeContext";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";

export default function AuthLinks() {
  // temporary
  const { status } = useSession();

  const { theme } = useContext(ThemeContext);

  const [open, setOpen] = useState(false);

  const Icon = open ? MdClose : MdOutlineMenu;

  return (
    <>
      {status === "unauthenticated" || status === "loading" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link} onClick={signOut}>
            Log Out!
          </span>
        </>
      )}
      <Icon
        size={25}
        style={theme === "dark" ? { color: "white" } : { color: "black" }}
        onClick={() => setOpen(!open)}
        className={styles.toggler}
      />
      {open && (
        <div className={styles.menu}>
          <Link href="/">HomePage</Link>
          <Link href="/about">About</Link>
          {status === "unauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span onClick={signOut}>Log Out!</span>
            </>
          )}
          <div className={styles.social}>
            <FaFacebook style={{ color: "#1877F2" }} size={22} />
            <FaTwitter size={22} style={{ color: "#08a0e9" }} />
            <FaGithub size={22} />
            <FaLinkedin size={22} style={{ color: "#0077b5" }} />
          </div>
        </div>
      )}
    </>
  );
}
