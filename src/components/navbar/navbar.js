import React, { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import styles from "./navbar.module.scss";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";

function Navbar() {
  const [selected, setSelected] = useState("ABOUT");
  const handleCopy = () => {
    navigator.clipboard.writeText("kskavya3661@gmail.com");
  };

  const handleNavigate = () => {
    window.open(
      "https://drive.google.com/file/d/1yM8TkjnOez_YGBFrs60XdTqgKIXR8AT_/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <>
      <div className={styles.navbar}>
        <ul className={styles.navbar_left_container}>
          <li className={styles.name}>KAVYA K S</li>
          <li
            className={`${styles.item} ${
              selected === "ABOUT" ? styles.selected : ""
            }`}
            onClick={() => setSelected("ABOUT")}
          >
            ABOUT
          </li>
          <li
            className={`${styles.item} ${
              selected === "WORK" ? styles.selected : ""
            }`}
            onClick={() => setSelected("WORK")}
          >
            WORK
          </li>
        </ul>
        <ul className={styles.navbar_right_container}>
          <motion.button
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={styles.resume_btn}
            onClick={() => handleNavigate()}
          >
            VIEW RESUME
          </motion.button>
          <motion.li
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={styles.email}
            onClick={() => handleCopy()}
          >
            kskavya3661@gmail.com <MdContentCopy className={styles.copy_icon} />
          </motion.li>
        </ul>
      </div>
      <ToastContainer />
    </>
  );
}

export default Navbar;
