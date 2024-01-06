"use client";

import Image from "next/image";
import styles from "./themetoggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <>
      <div
        className={styles.container}
        onClick={toggle}
        style={
          theme === "dark" ? { background: "white" } : { background: "#111" }
        }
      >
        <Image src="/moon.png" alt="dark mode" width={15} height={15} />
        <div
          className={styles.ball}
          style={
            theme === "dark"
              ? { left: "3px", background: "#111" }
              : { right: "3px", background: "white" }
          }
        ></div>
        <Image src="/sun.png" alt="light mode" width={15} height={15} />
      </div>
    </>
  );
}
