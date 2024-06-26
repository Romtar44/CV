import React from "react";
import styles from "./technoBox.module.scss";
import { MyImage } from "../image/image";

export type TechnoBoxProps = {
  logo: string;
  techName: string;
  w?: string;
  h?: string;
  link: string;
  title: string;
};

export const TechnoBox: React.FC<TechnoBoxProps> = ({
  logo,
  techName,
  w = "40px",
  h = "40px",
  link,
  title,
}) => {
  return (
    <a href={link} rel="external nofollow" target="_blank">
      <div className={styles.container} title={title}>
        <MyImage imgSrc={logo} alt={techName} w={w} h={h} border="none" />
        <span>{techName}</span>
      </div>
    </a>
  );
};
