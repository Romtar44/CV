import styles from "./animationBox.module.scss";
import Floating from "./floating/floating";
import { DoubleMarquee } from "./marquee/marquee";
import Radar from "./radar/radar";

// const animationTechnoList = [
// 	<TechnoBox
// 		title="React"
// 		logo={ReactLogo}
// 		techName="React"
// 		link="https://fr.legacy.reactjs.org/"
// 	/>,
// 	<TechnoBox
// 		title="TypeScript"
// 		logo={TSLogo}
// 		techName="TypeScript"
// 		link="https://www.typescriptlang.org/"
// 	/>,
// 	<TechnoBox
// 		title="HTML5"
// 		logo={HtmlLogo}
// 		techName="Html"
// 		link="https://developer.mozilla.org/fr/docs/Web/HTML"
// 	/>,
// 	<TechnoBox
// 		title="Scss"
// 		logo={ScssLogo}
// 		techName="Scss"
// 		link="https://sass-lang.com/"
// 	/>,
// ];

export const AnimationBox = () => {
  return (
    <div className={styles.wrapper}>
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
        <div className={styles.animationContainer}>
          <DoubleMarquee />
        </div>
      </div>
    </div>
  );
};
