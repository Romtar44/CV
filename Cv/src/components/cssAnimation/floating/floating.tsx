import { useEffect } from "react";
import styles from "./floating.module.scss"; // Importation du fichier CSS

const Floating = () => {
  useEffect(() => {
    const topL = document.getElementById("card-container1");
    const topR = document.getElementById("card-container2");
    const botL = document.getElementById("card-container3");
    const botR = document.getElementById("card-container4");
    const center = document.getElementById("card-center");

    const corners = [topL, topR, botL, botR];

    const time = 0.8;

    const resetHover = () => {
      corners.forEach((corner) => {
        if (!corner) return;
        corner.style.transform = "translate(0px, 0px)";
        corner.style.transition = `transform ${
          time * (Math.random() + 1)
        }s linear`;
      });
    };

    const firstCardHover = () => {
      corners.forEach((corner) => {
        if (!corner) return;
        corner.style.transform = "translate(-20px, -20px)";
        corner.style.transition = `transform ${
          time * (Math.random() + 1)
        }s linear`;
      });
    };

    const secondCardHover = () => {
      corners.forEach((corner) => {
        if (!corner) return;
        corner.style.transform = "translate(20px, -20px)";
        corner.style.transition = `transform ${
          time * (Math.random() + 1)
        }s linear`;
      });
    };

    const thirdCardHover = () => {
      corners.forEach((corner) => {
        if (!corner) return;
        corner.style.transform = "translate(-20px, 20px)";
        corner.style.transition = `transform ${
          time * (Math.random() + 1)
        }s linear`;
      });
    };

    const lastCardHover = () => {
      corners.forEach((corner) => {
        if (!corner) return;
        corner.style.transform = "translate(20px, 20px)";
        corner.style.transition = `transform ${
          time * (Math.random() + 1)
        }s linear`;
      });
    };

    topL?.addEventListener("mouseover", firstCardHover);
    topR?.addEventListener("mouseover", secondCardHover);
    botL?.addEventListener("mouseover", thirdCardHover);
    botR?.addEventListener("mouseover", lastCardHover);
    center?.addEventListener("mouseover", resetHover);

    topL?.addEventListener("mouseout", resetHover);
    topR?.addEventListener("mouseout", resetHover);
    botL?.addEventListener("mouseout", resetHover);
    botR?.addEventListener("mouseout", resetHover);

    return () => {
      topL?.removeEventListener("mouseover", firstCardHover);
      topR?.removeEventListener("mouseover", secondCardHover);
      botL?.removeEventListener("mouseover", thirdCardHover);
      botR?.removeEventListener("mouseover", lastCardHover);
      center?.removeEventListener("mouseover", resetHover);

      topL?.removeEventListener("mouseout", resetHover);
      topR?.removeEventListener("mouseout", resetHover);
      botL?.removeEventListener("mouseout", resetHover);
      botR?.removeEventListener("mouseout", resetHover);
    };
  }, []);

  return (
    <div>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.cardTitle}>
            <p>Get up and running</p>
            <p>today with our</p>
            <p>wallet APIs</p>
          </div>

          <div
            id="card-container1"
            className={`${styles.cardContainerSize} ${styles.cardContainer1}`}
          >
            <div className={`${styles.card} ${styles.card1}`}></div>
          </div>

          <div
            id="card-container2"
            className={`${styles.cardContainerSize} ${styles.cardContainer2}`}
          >
            <div className={`${styles.card} ${styles.card2}`}></div>
          </div>

          <div
            id="card-container3"
            className={`${styles.cardContainerSize} ${styles.cardContainer3}`}
          >
            <div className={`${styles.card} ${styles.card3}`}></div>
          </div>

          <div
            id="card-container4"
            className={`${styles.cardContainerSize} ${styles.cardContainer4}`}
          >
            <div className={`${styles.card} ${styles.card4}`}></div>
          </div>
          <div id="card-center" className={styles.cardCenter}></div>
        </div>
      </div>
    </div>
  );
};

export default Floating;
