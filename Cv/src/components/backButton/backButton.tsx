import styles from "./backButton.module.scss";
import backButton from "../../assets/backArrow.svg";
import MyImage from "../image/image";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";
import { useEffect } from "react";

type BackButtonProps = {
  top?: string;
  left?: string;
};

const BackButton: React.FC<BackButtonProps> = ({ top = "5%", left = "5%" }) => {
  const navig = useNavigate();
  const [small] = useMediaQuery("(max-width: 800px)");
  useEffect(() => {}, [small]);
  return (
    <div
      className={styles.backButtonContainer}
      style={small ? {} : { top: top, left: left }}
      onClick={() => navig("/")}
    >
      <MyImage
        imgSrc={backButton}
        border="solid 2px white"
        borderRadius="100%"
        alt=""
      />
    </div>
  );
};

export default BackButton;
