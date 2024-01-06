"use client";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useCallback, useEffect, useState } from "react";
import styles from "./page.module.css";

import { IoMdAdd, IoMdImages } from "react-icons/io";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { app } from "@/libs/firebase";

// const storage = getStorage(app);

export default function Page() {
  // const [open, setOpen] = useState(false);

  // const [value, setValue] = useState("");
  // const [media, setMedia] = useState("");
  // const [title, setTitle] = useState("");
  // const [category, setCategory] = useState("");
  // const [file, setFile] = useState(null);

  // const [progressStatus, setProgressStatus] = useState(0);
  // const [uploading, setUploading] = useState(false);

  // const toggleOpen = useCallback(() => {
  //   setOpen((current) => !current);
  // }, []);

  // const { status } = useSession();
  // const router = useRouter();

  // useEffect(() => {
  //   const upload = () => {
  //     const name = new Date().getTime() + file.name;
  //     const storageRef = ref(storage, name);

  //     const uploadTask = uploadBytesResumable(storageRef, file);

  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         const progress =
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         console.log("Upload is " + progress + "% done");
  //         setProgressStatus(progress);
  //         switch (snapshot.state) {
  //           case "paused":
  //             console.log("Upload is paused");
  //             break;
  //           case "running":
  //             console.log("Upload is running");
  //             break;
  //         }
  //       },
  //       (error) => {},
  //       () => {
  //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //           setMedia(downloadURL);
  //         });
  //       }
  //     );
  //   };

  //   file && upload();
  // }, [file]);

  // if (status === "loading") {
  //   return <div>Loading...</div>;
  // }

  // if (status === "unauthenticated") {
  //   return router.push("/login");
  // }

  // const slugify = (str) =>
  //   str
  //     .toLowerCase()
  //     .trim()
  //     .replace(/[^\w\s-]/g, "")
  //     .replace(/[\s_-]+/g, "-")
  //     .replace(/^-+|-+$/g, "");

  // const handleSubmit = async () => {
  //   setUploading(true);
  //   await fetch("/api/posts", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       title,
  //       desc: value,
  //       img: media,
  //       slug: slugify(title),
  //       catSlug: category,
  //     }),
  //   });

  //   setUploading(false);
  //   router.push("/");
  // };

  return (
    <>
      {/* <div className={styles.container}>
      <div className={styles.inpDetail}>
        <input
          type="text"
          placeholder="Your Title"
          className={styles.input}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value="" disabled selected hidden>
              Select a category
            </option>
            <option value="coding">Coding</option>
            <option value="style">Style</option>
            <option value="fashion">Fashion</option>
            <option value="food">Food</option>
            <option value="travel">Travel</option>
            <option value="culture">Culture</option>
          </select>
          <p style={{ fontSize: "14px" }}>
            Upload Progress:{" "}
            <span className={styles.progress}>{parseInt(progressStatus)}%</span>
          </p>
        </div>
      </div>

      <div className={styles.editor}>
        <div>
          <button className={styles.button} onClick={toggleOpen}>
            <IoMdAdd size={19} />
          </button>
        </div>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="fileResource"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
              <label htmlFor="fileResource">
                <IoMdImages size={16} />
              </label>
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button
        className={styles.publish}
        onClick={handleSubmit}
        disabled={uploading}
        style={uploading ? { cursor: "not-allowed" } : { cursor: "pointer" }}
      >
        Publish
      </button>
    </div> */}
      write
    </>
  );
}
