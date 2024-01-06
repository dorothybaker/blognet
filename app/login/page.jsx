"use client";

import styles from "./login.module.css";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const { data, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "authenticated") {
    return router.push("/");
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          <FcGoogle size={25} />
          <span>Sign in with Google</span>
        </div>
        <div className={styles.socialButton} onClick={() => signIn("github")}>
          <FaGithub size={25} color="white" />
          <span>Sign in with Github</span>
        </div>
      </div>
    </div>
  );
};

export default Page;
