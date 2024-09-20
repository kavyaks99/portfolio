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
import profile from "../assets/images/profile_kavya.jpg";
import avatar from "../assets/images/3d1.png";

import workplace from "../assets/images/workplace.png";
import { useEffect, useRef } from "react";
import { MdContentCopy } from "react-icons/md";

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
      title: "Requirements Gathering",
      description:
        "The first step is understanding your project needs and technical requirements.",
    },
    {
      id: 2,
      number: "(02)",
      title: "Architecture Planning",
      description:
        "Next, I'll outline the system architecture to ensure scalability and performance.",
    },
    {
      id: 3,
      number: "(03)",
      title: "Prototyping",
      description:
        "I’ll create prototypes to visualize the user interface and gather feedback on functionality.",
    },
    {
      id: 4,
      number: "(04)",
      title: "Development",
      description:
        "I’ll start coding the frontend, focusing on responsive design and user experience.",
    },
    {
      id: 5,
      number: "(05)",
      title: "Testing",
      description:
        "Once development is complete, I’ll conduct thorough testing to ensure quality and performance.",
    },
    {
      id: 6,
      number: "(06)",
      title: "Deployment",
      description:
        "Finally, I’ll deploy the application and provide documentation and support for a smooth transition.",
    },
  ];

  const experienceList = [
    {
      position: "Senior UX Designer",
      company: "Crosby",
      duration: "2021 – Present",
      description: [
        "Spearheaded the design and strategy of Crosby's retail POS system, delivering an intuitive and efficient tool for both mobile and in-store platforms.",
      ],
    },
    {
      position: "Senior UX Designer",
      company: "Crosby",
      duration: "2021 – Present",
      description: [
        "Led the user research efforts to identify pain points in the existing retail POS, resulting in actionable insights that shaped the design decisions.",
      ],
    },
    {
      position: "Senior UX Designer",
      company: "Crosby",
      duration: "2021 – Present",
      description: [
        "Worked closely with retail partners to gather feedback, driving continuous improvements to the POS tool’s usability and performance.",
      ],
    },
    {
      position: "Senior UX Designer",
      company: "Crosby",
      duration: "2021 – Present",
      description: [
        "Introduced an adaptive design approach that ensures the POS interface works seamlessly across different screen sizes and resolutions.",
        "Streamlined the training experience for new users of the POS system by simplifying the onboarding process.",
      ],
    },
  ];

  return (
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
              EXPERIENCE
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
            <motion.p
              variants={subHeading}
              initial="hidden"
              animate="visible"
              style={{ width: "300px" }}
            >
              CURRENTLY DEVELOPING ENGAGING INTERFACES AT QBURST
            </motion.p>
            <motion.p variants={subHeading} initial="hidden" animate="visible">
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
            I love making cool things and solving complex problems for people —
            like you.
          </motion.p>
          <motion.p
            className={styles.description}
            style={{ opacity: descriptionTwoOpacity }}
          >
            I deliver impactful results through strategic thinking and
            data-driven insights.
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className={styles.work_container}>
          <div className={styles.work_heading}>
            <motion.p
              className={styles.work}
              initial="hidden"
              variants={workTitle}
              whileInView="visible"
            >
              My reliable development methodology
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
      </div>
      <div
        style={{
          display: "flex",
          gap: "60px",
          flexDirection: "column",
        }}
      >
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
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p className={styles.position}>{experience.position}</p>
                <p className={styles.position}>({experience.duration})</p>
              </div>

              <p className={styles.description_exp}>{experience.description}</p>
            </motion.div>
          ))}
        </div>
        <div className={styles.button_container}>
          <motion.button
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={styles.resume_btn}
          >
            VIEW RESUME
          </motion.button>
        </div>
      </div>
      <div className={styles.footer}>
        <div style={{ display: "flex", gap: "140px" }}>
          <div>
            <p className={styles.name}>KAVYA K S</p>
            <p className={styles.designation}>
              Senior Developer, currently crafting experiences at QBurst.
            </p>
            <Image src={avatar} height={500} width={500} />
          </div>
          <div>
            <p className={styles.footer_note}>
              Think I’d be a good fit for your team or project?
            </p>
            <p className={styles.footer_note}>Let’s connect.</p>
            <motion.div
              className={styles.email_div}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.email}>
                kskavya3661@gmail.com
                <MdContentCopy className={styles.copy_icon} />
              </div>
            </motion.div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p className={styles.selected_projects}>SOCIALS</p>
              <div className={styles.projects}>
                <p>Linkedin</p>
                <p>GitHub</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
