import BackButton from "../backButton/backButton";
import styles from "./animationBox.module.scss";
import Floating from "./floating/floating";
import { DoubleMarquee } from "./marquee/marquee";
import Radar from "./radar/radar";

export const AnimationBox = () => {
  return (
    <div className={styles.wrapper}>
      <BackButton top="calc(5% - 50px)" />
      <h1>Banque d'animation</h1>

      <div className={`${styles.animationWrapper} ${styles.floatingSize}`}>
        <p className={styles.text}>
          Animation réalisée en Js/CSS, puis adapté pour fonctionner dans un
          enviromment React.ts/Scss
        </p>
        <div className={styles.animationContainer}>
          <Floating />
        </div>
      </div>
      <div className={`${styles.animationWrapper} ${styles.radarSize}`}>
        <p className={styles.text}>
          Animation réalisée en pure CSS, puis adapté pour fonctionner dans un
          enviromment React/Scss
        </p>
        <div className={styles.animationContainer}>
          <Radar />
        </div>
      </div>
      <div className={`${styles.animationWrapper} ${styles.marqueeSize}`}>
        <p className={styles.text}>
          Animation réalisée en pure CSS, puis adapté pour fonctionner dans un
          enviromment React/Scss
        </p>
        <div className="">
          <DoubleMarquee />
        </div>
      </div>
    </div>
  );
};
