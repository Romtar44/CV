import React from "react";
import styles from "./radar.module.scss"; // Importer le fichier CSS

const Radar: React.FC = () => {
  return (
    <div>
      <div className={styles.section}>
        <div className={styles.bg}>
          <div className={styles.container}>
            <div className={`${styles.logo} ${styles.logoPos1}`}></div>
            <div className={`${styles.logo} ${styles.logoPos2}`}></div>

            <div className={styles.radar}>
              <div className={styles.radarLight}></div>
            </div>
            <div className={styles.radar2}>
              <div className={styles.radarLight2}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Radar;
