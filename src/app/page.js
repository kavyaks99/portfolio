"use client";
import Image from "next/image";
import Navbar from "../components/navbar/navbar";
import {
  circOut,
  cubicBezier,
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import styles from "./page.module.scss";
import profile from "../assets/images/profile2.jpg";
import avatar from "../assets/images/3d1.png";
import profileAvatar from "../assets/images/3d3.png";
import workplace from "../assets/images/workplace.png";
import { useEffect, useRef } from "react";
import { MdContentCopy } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { Toaster, toast } from "sonner";
import Lenis from "../components/scroll";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

  const textOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 0.3, 0]);
  const textScale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.5],
    [1, 0.9, 0.6, 0.2]
  );

  const imageScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  const imageY = useTransform(scrollYProgress, [0, 0.2], [60, 0]);

  const variants = {
    offscreen: {
      y: "100%",
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      y: "0%",
      transition: {
        type: "spring",
        duration: 2,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 3 } },
  };

  const subHeading = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  };

  const descriptionOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.22, 0.28],
    [0, 0.6, 1, 0],
    { ease: circOut }
  );

  const descriptionTwoOpacity = useTransform(
    scrollYProgress,
    [0.25, 0.3],
    [0, 1],
    { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) }
  );

  const descriptionVariants = {
    hidden: { y: 0 },
    visible: {
      y: -30,
      transition: {
        duration: 1,
      },
    },
  };

  const workImageScale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 0.4],
    [0.5, 0.7, 0.9, 1]
  );
  const workTitle = {
    hidden: { y: 0, opacity: 0 },
    visible: {
      y: -15,
      opacity: 1,
      transition: {
        duration: 3,
      },
    },
  };

  const cardData = [
    {
      id: 1,
      number: "(01)",
      title: "Modern React Development",
      description:
        "Expert in React hooks and custom hooks for efficient state management and component logic.",
    },
    {
      id: 2,
      number: "(02)",
      title: "Performance Optimization",
      description:
        "Skilled in code splitting, lazy loading, and implementing best practices for optimal application performance.",
    },
    {
      id: 3,
      number: "(03)",
      title: "Responsive Design",
      description:
        "Creating fluid, adaptive interfaces that deliver exceptional user experiences across all devices.",
    },
    {
      id: 4,
      number: "(04)",
      title: "State Management",
      description:
        "Proficient in Redux and modern state management solutions for complex applications.",
    },
    {
      id: 5,
      number: "(05)",
      title: "Code Architecture",
      description:
        "Designing scalable component structures and implementing clean code practices for maintainable applications.",
    },
    {
      id: 6,
      number: "(06)",
      title: "Modern Tools & Practices",
      description:
        "Utilizing Next.js, TypeScript, and modern build tools to create scalable, maintainable applications.",
    },
  ];

  const experienceList = [
    {
      position: "Senior Developer",
      company: "QBurst",
      duration: "2021 – Present",
      description: [
        "Led the design and development of user-friendly, responsive interfaces, focusing on secure integration. Specialized in building fast, scalable web applications. Used modern tools like React and Next.js, along with Redux, to create smooth and efficient user experiences.",
      ],
    },
  ];

  const handleNavigate = () => {
    window.open(
      "https://drive.google.com/file/d/1ZLWcUgwmuflqysnFIp1rWBkNSyqiWs_N/view",
      "_blank"
    );
  };
  const handleCopy = () => {
    navigator.clipboard.writeText("kskavya3661@gmail.com");
    toast.success("Email copied");
  };

  const handleLinkedInNavigate = () => {
    window.open("https://www.linkedin.com/in/kavya-k-s-74865a296/", "_blank");
  };
  const handleGitHubNavigate = () => {
    window.open("https://github.com/kavyaks99");
  };
  return (
    <Lenis>
      <div className={styles.main_container}>
        <Navbar />
        <div className={styles.parent}>
          <motion.div
            className={styles.header}
            style={{ opacity: textOpacity, scale: textScale }}
          >
            <div className={styles.heading_container}>
              <motion.h1
                className={styles.heading}
                initial="offscreen"
                animate="onscreen"
                variants={variants}
              >
                SENIOR
              </motion.h1>
            </div>
            <div className={styles.heading_container}>
              <motion.h1
                className={styles.heading}
                initial="offscreen"
                animate="onscreen"
                variants={variants}
              >
                FRONTEND
              </motion.h1>
            </div>
            <div className={styles.heading_container}>
              <motion.h1
                className={styles.heading}
                initial="offscreen"
                animate="onscreen"
                variants={variants}
              >
                DEVELOPER
              </motion.h1>
            </div>
            <div className={styles.sub_heading}>
              <div>
                <motion.p
                  variants={subHeading}
                  initial="hidden"
                  animate="visible"
                  className={styles.subHeading}
                >
                  CURRENTLY DEVELOPING ENGAGING
                </motion.p>
                <motion.p
                  variants={subHeading}
                  initial="hidden"
                  animate="visible"
                  className={styles.subHeading}
                >
                  INTERFACES AT QBurst
                </motion.p>
              </div>
              <motion.p
                variants={subHeading}
                initial="hidden"
                animate="visible"
              >
                (2021 – PRESENT)
              </motion.p>
            </div>
          </motion.div>
          <motion.div
            className={styles.profile_container}
            style={{ y: imageY, scale: imageScale }}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <Image
              src={profile}
              className={styles.profile}
              width={500}
              height={500}
              alt="Picture of the profile"
            />
          </motion.div>
          <div className={styles.des_container}>
            <motion.p
              className={styles.description}
              style={{ opacity: descriptionOpacity }}
              initial="hidden"
              whileInView="visible"
              variants={descriptionVariants}
            >
              I build modern web applications that are fast, responsive, and
              easy to use.
            </motion.p>
            <motion.p
              className={styles.description}
              style={{ opacity: descriptionTwoOpacity }}
            >
              Focused on creating clean code and great user experiences.
            </motion.p>
          </div>
          <motion.div
            className={styles.work_img_container}
            style={{ scale: workImageScale }}
          >
            <Image
              src={workplace}
              className={styles.work_img}
              width={500}
              height={500}
              alt="Picture of the workplace"
            />
          </motion.div>
        </div>
        <div className={styles.work_container}>
          <div className={styles.work_heading}>
            <motion.p
              className={styles.work}
              initial="hidden"
              variants={workTitle}
              whileInView="visible"
            >
              What I Bring to the Table
            </motion.p>
          </div>
          <motion.div
            className={styles.card_container}
            initial="hidden"
            viewport={{ once: true }}
            variants={workTitle}
            whileInView="visible"
          >
            {cardData.map((work) => (
              <div className={styles.card}>
                <p className={styles.slno}>{work.number}</p>
                <p className={styles.title}> {work.title}</p>
                <p className={styles.work_description}>{work.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
        <div className={styles.exp}>
          <div className={styles.exp_header}>
            <div className={styles.experience_container}>
              <motion.h1
                className={styles.experience}
                initial="offscreen"
                whileInView="onscreen"
                variants={variants}
              >
                RELEVANT
              </motion.h1>
            </div>
            <div className={styles.experience_container}>
              <motion.h1
                className={styles.experience}
                initial="offscreen"
                whileInView="onscreen"
                variants={variants}
              >
                EXPERIENCE
              </motion.h1>
            </div>
          </div>
          <div className={styles.exp_list}>
            {experienceList.map((experience) => (
              <motion.div
                className={styles.exp_card}
                initial="hidden"
                variants={workTitle}
                whileInView="visible"
              >
                <p className={styles.title}>{experience.company}</p>
                <div className={styles.details}>
                  <p className={styles.position}>{experience.position}</p>
                  <p className={styles.position}>({experience.duration})</p>
                </div>

                <p className={styles.description_exp}>
                  {experience.description}
                </p>
              </motion.div>
            ))}
          </div>
          <div className={styles.button_container}>
            <motion.button
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={styles.resume_btn}
              onClick={() => handleNavigate()}
            >
              VIEW RESUME
            </motion.button>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footer_div}>
            <div className={styles.footer_first}>
              <p className={styles.name}>KAVYA K S</p>
              <p className={styles.designation}>
                Senior Developer, currently crafting experiences at QBurst.
              </p>
              <Image
                src={avatar}
                height={350}
                width={350}
                className={styles.avatar}
              />
            </div>
            <div className={styles.footer_second}>
              <p className={styles.footer_note}>
                Think I'd be a good fit for your team or project?
              </p>
              <p className={styles.footer_note}>Let's connect.</p>
              <Toaster position="bottom-right" />
              <motion.div
                className={styles.email_div}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={() => handleCopy()}
              >
                <div className={styles.email}>
                  kskavya3661@gmail.com
                  <MdContentCopy className={styles.copy_icon} />
                </div>
              </motion.div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p className={styles.selected_projects}>SOCIALS</p>
                <div className={styles.projects}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "12px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleLinkedInNavigate()}
                  >
                    <AiFillLinkedin />
                    <p>Linkedin</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "12px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleGitHubNavigate()}
                  >
                    <FaGithub />
                    <p>GitHub</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Lenis>
  );
}
