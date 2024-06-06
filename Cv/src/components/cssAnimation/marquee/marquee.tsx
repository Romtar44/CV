import styles from "./marquee.module.scss";

// Import all images
import accor from "/src/components/cssAnimation/marquee/images/accor.svg";
import abnAmro from "/src/components/cssAnimation/marquee/images/ABN AMRO.svg";
import alchemy from "/src/components/cssAnimation/marquee/images/alchemy.svg";
import ambrosia from "/src/components/cssAnimation/marquee/images/ambrosia.svg";
import arianee from "/src/components/cssAnimation/marquee/images/arianee.svg";
import assetReality from "/src/components/cssAnimation/marquee/images/Asset Reality.svg";
import biconomy from "/src/components/cssAnimation/marquee/images/biconomy.svg";
import bnyMellon from "/src/components/cssAnimation/marquee/images/BNY Mellon.svg";
import boomfi from "/src/components/cssAnimation/marquee/images/boomfi.svg";
import bridgesplit from "/src/components/cssAnimation/marquee/images/bridgesplit.svg";
import cocreate from "/src/components/cssAnimation/marquee/images/cocreate.svg";
import deloitte from "/src/components/cssAnimation/marquee/images/Deloitte.svg";
import due from "/src/components/cssAnimation/marquee/images/due.svg";
import dux from "/src/components/cssAnimation/marquee/images/Dux.svg";
import fidelity from "/src/components/cssAnimation/marquee/images/FIdelity.svg";
import fis from "/src/components/cssAnimation/marquee/images/fis.svg";
import hayvn from "/src/components/cssAnimation/marquee/images/hayvn.svg";
import join from "/src/components/cssAnimation/marquee/images/JOIN.svg";
import koshance from "/src/components/cssAnimation/marquee/images/Koshance.svg";
import kravata from "/src/components/cssAnimation/marquee/images/kravata.svg";
import kudelski from "/src/components/cssAnimation/marquee/images/kudelski.svg";
import nealthy from "/src/components/cssAnimation/marquee/images/Nealthy.svg";
import nilos from "/src/components/cssAnimation/marquee/images/Nilos.svg";
import nist from "/src/components/cssAnimation/marquee/images/NIST.svg";
import pimlico from "/src/components/cssAnimation/marquee/images/pimlico.svg";
import pluckmarket from "/src/components/cssAnimation/marquee/images/Pluckmarket.svg";
import safe from "/src/components/cssAnimation/marquee/images/safe.svg";
import soc from "/src/components/cssAnimation/marquee/images/SOC.svg";
import sphere from "/src/components/cssAnimation/marquee/images/sphere.svg";
import tokeny from "/src/components/cssAnimation/marquee/images/tokeny.svg";
import vitaWallet from "/src/components/cssAnimation/marquee/images/Vita Wallet.svg";
import walletconnect from "/src/components/cssAnimation/marquee/images/walletconnect.svg";
import yolo from "/src/components/cssAnimation/marquee/images/Yolo.svg";
import zodia from "/src/components/cssAnimation/marquee/images/Zodia.svg";
import zulu from "/src/components/cssAnimation/marquee/images/zulu.svg";

export const DoubleMarquee = () => {
  const logos = [
    accor,
    abnAmro,
    alchemy,
    ambrosia,
    arianee,
    assetReality,
    biconomy,
    bnyMellon,
    boomfi,
    bridgesplit,
    cocreate,
    deloitte,
    due,
    dux,
    fidelity,
    fis,
    hayvn,
    join,
    koshance,
    kravata,
    kudelski,
    nealthy,
    nilos,
    nist,
    pimlico,
    pluckmarket,
    safe,
    soc,
    sphere,
    tokeny,
    vitaWallet,
    walletconnect,
    yolo,
    zodia,
    zulu,
  ];

  return (
    <div>
      <div className={styles.logos}>
        <div className={styles.logoSlide}>
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt="img" />
          ))}
        </div>

        <div className={styles.logoSlide}>
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt="img" />
          ))}
        </div>
      </div>

      <div className={styles.logos}>
        <div className={`${styles.logoSlide} ${styles.reverse}`}>
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt="img" />
          ))}
        </div>

        <div className={`${styles.logoSlide} ${styles.reverse}`}>
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt="img" />
          ))}
        </div>
      </div>
    </div>
  );
};
