import React, { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import styles from "./navbar.module.scss";
import { motion } from "framer-motion";
import { Toaster, toast } from "sonner";

function Navbar() {
  const [selected, setSelected] = useState("ABOUT");
  const handleCopy = () => {
    navigator.clipboard.writeText("kskavya3661@gmail.com");
    toast.success("Email copied");
  };

  const handleNavigate = () => {
    window.open(
      "https://drive.google.com/file/d/1ZLWcUgwmuflqysnFIp1rWBkNSyqiWs_N/view",
      "_blank"
    );
  };
  return (
    <>
      <div className={styles.navbar}>
        <ul className={styles.navbar_left_container}>
          <li>KAVYA K S</li>
          <li
            className={`${styles.item} ${
              selected === "ABOUT" ? styles.selected : ""
            }`}
            onClick={() => setSelected("ABOUT")}
          >
            ABOUT
          </li>
          {/* <li
            className={`${styles.item} ${
              selected === "WORK" ? styles.selected : ""
            }`}
            onClick={() => setSelected("WORK")}
          >
            WORK
          </li> */}
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
          <Toaster position="bottom-right" />
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
    </>
  );
}

export default Navbar;
