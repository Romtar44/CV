import React from "react";
import styles from "./projectBox.module.scss";
import { MyImage } from "../image/image";
import { useMediaQuery } from "@chakra-ui/react";

type ProjectBoxProps = {
  title: string;
  img: string;
  techno: JSX.Element[];
  text: string;
  link: string;
  linkGh?: string;
};

export const ProjectBox: React.FC<ProjectBoxProps> = ({
  title,
  img,
  techno,
  text,
  link,
  linkGh = "https://github.com/Romtar44",
}) => {
  const [smallMode, mediumMode] = useMediaQuery([
    "(max-width: 800px)",
    "(max-width: 1000px)",
  ]);

  return !smallMode ? (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.mainTitle}>{title}</h2>

        <div className={styles.text}>{text}</div>

        <div className={styles.links}>
          <a href={link} rel="external nofollow" target="_blank">
            {link}{" "}
          </a>
          <br></br>
          <a href={linkGh} rel="external nofollow" target="_blank">
            {linkGh}{" "}
          </a>
        </div>
      </div>

      <div className={styles.projectContainer}>
        <a href={link} rel="external nofollow" target="_blank">
          <MyImage
            imgSrc={img}
            className={styles.imgClass}
            alt=""
            border="none"
            w={mediumMode ? "380px" : "500px"}
            h="auto"
          />
        </a>
        <div className={styles.technoContainer}>
          {techno.map((tech) => {
            return tech;
          })}
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.containerMobile}>
      <h2 className={styles.mainTitleMobile}>{title}</h2>

      <div className={styles.projectContainerMobile}>
        <a href={link} rel="external nofollow" target="_blank">
          <MyImage
            imgSrc={img}
            className={styles.imgClassMobile}
            alt=""
            border="none"
            w="100%"
            h="auto"
          />
        </a>
        <div className={styles.technoContainerMobile}>
          {techno.map((tech) => tech)}
        </div>
      </div>

      <div className={styles.textMobile}>{text}</div>

      <div className={styles.linksMobile}>
        <a href={link} rel="external nofollow" target="_blank">
          {link}{" "}
        </a>
        <br></br>
        <a href={linkGh} rel="external nofollow" target="_blank">
          {linkGh}{" "}
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
