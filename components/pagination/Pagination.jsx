"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";

export default function Pagination({ page, hasPrev, hasNext }) {
  const router = useRouter();

  return (
    <>
      <div className={styles.container}>
        <button
          className={`${styles.button} ${styles.prev}`}
          onClick={() => router.push(`?page=${page - 1}`)}
          disabled={!hasPrev}
        >
          <FaChevronLeft size={10} />
          <span>Previous</span>
        </button>
        <button
          className={`${styles.button} ${styles.next}`}
          onClick={() => router.push(`?page=${page + 1}`)}
          disabled={!hasNext}
        >
          <span>Next</span>
          <FaChevronRight size={10} />
        </button>
      </div>
    </>
  );
}
