import styles from "./portfolio.module.scss";
import { MainBox } from "./components/mainBox/mainbox";
import PortfolioIMG from "./assets/pf.png";
import Pong from "./assets/miniature4(1).png";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import pics from "./assets/rtournet.jpg";
import climsolu from "./assets/climsolu.png";

function Portfolio() {
  const [offsetY, setOffsetY] = useState(0);
  const [mediumMode, smallMode] = useMediaQuery([
    `(max-width: 1000px)`,
    "(max-width: 800px)",
  ]);

  const mouseMoveFunction = (event: MouseEvent) => {
    window.scroll({
      left:
        event.pageX /
        (document.documentElement.scrollWidth /
          (document.documentElement.scrollWidth - window.innerWidth)),
      behavior: "instant",
    });
  };

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.scroll({
      top: document.body.clientHeight / 2,
      left:
        document.documentElement.scrollWidth /
        2 /
        (document.documentElement.scrollWidth /
          (document.documentElement.scrollWidth - window.innerWidth)),
      behavior: "instant",
    });
    if (!smallMode) window.addEventListener("mousemove", mouseMoveFunction);
    else window.removeEventListener("mousemove", mouseMoveFunction);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", mouseMoveFunction);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [smallMode]);

  return (
    <>
      {!mediumMode && (
        <div className={styles.mainContainer} id="main">
          <div className={styles.container}>
            <div
              className={styles.shortColumn + " " + styles.column}
              style={{ transform: `translateY(${offsetY * 0.2}px)` }}
            >
              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />
              <MainBox
                color="grey"
                img={climsolu}
                path="/climsolu"
                title="Site vitrine"
                description="Site vitrine avec CMS"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="#20201e"
                img={pics}
                path="/cv"
                title="CV"
                description="Mes expériences en développement"
              />
              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
            </div>

            <div
              className={styles.longColumn + " " + styles.column}
              style={{ transform: `translateY(${offsetY * 0.5}px)` }}
            >
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="grey"
                img={climsolu}
                path="/climsolu"
                title="Site vitrine"
                description="Site vitrine avec CMS"
              />
              <MainBox
                color="#20201e"
                img={pics}
                path="/cv"
                title="CV"
                description="Mes expériences en développement"
              />
              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="grey"
                img={climsolu}
                path="/climsolu"
                title="Site vitrine"
                description="Site vitrine avec CMS"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />
            </div>

            <div
              className={styles.shortColumn + " " + styles.column}
              style={{ transform: `translateY(${offsetY * 0.2}px)` }}
            >
              <MainBox
                color="grey"
                img={climsolu}
                path="/climsolu"
                title="Site vitrine"
                description="Site vitrine avec CMS"
              />
              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />
              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="#20201e"
                img={pics}
                path="/cv"
                title="CV"
                description="Mes expériences en développement"
              />
              <MainBox
                color="grey"
                img={climsolu}
                path="/climsolu"
                title="Site vitrine"
                description="Site vitrine avec CMS"
              />
              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
            </div>

            <div
              className={styles.longColumn + " " + styles.column}
              style={{ transform: `translateY(${offsetY * 0.5}px)` }}
            >
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="grey"
                img={climsolu}
                path="/climsolu"
                title="Site vitrine"
                description="Site vitrine avec CMS"
              />
              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="#20201e"
                img={pics}
                path="/cv"
                title="CV"
                description="Mes expériences en développement"
              />
              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="grey"
                img={climsolu}
                path="/climsolu"
                title="Site vitrine"
                description="Site vitrine avec CMS"
              />
            </div>

            <div
              className={styles.shortColumn + " " + styles.column}
              style={{ transform: `translateY(${offsetY * 0.2}px)` }}
            >
              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />

              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />
              <MainBox
                color="#20201e"
                img={pics}
                path="/cv"
                title="CV"
                description="Mes expériences en développement"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="grey"
                img={climsolu}
                path="/climsolu"
                title="Site vitrine"
                description="Site vitrine avec CMS"
              />
              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />
              <MainBox
                color="grey"
                img={climsolu}
                path="/climsolu"
                title="Site vitrine"
                description="Site vitrine avec CMS"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
            </div>
          </div>
        </div>
      )}
      {mediumMode && (
        <div className={styles.mainContainer} id="main">
          <div className={styles.container}>
            <div
              className={styles.longColumn + " " + styles.column}
              style={{ transform: `translateY(${offsetY * 0.5}px)` }}
            >
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />
            </div>

            <div
              className={styles.shortColumn + " " + styles.column}
              style={{ transform: `translateY(${offsetY * 0.2}px)` }}
            >
              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />
              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />
              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
            </div>

            <div
              className={styles.longColumn + " " + styles.column}
              style={{ transform: `translateY(${offsetY * 0.5}px)` }}
            >
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />
              <MainBox
                color="#20201e"
                img={PortfolioIMG}
                path="/portfolio"
                title="Mon portfolio"
                description="Site vitrine développé par moi même"
              />
              <MainBox
                color="#2f4454"
                img={Pong}
                path="/pong"
                title="Pong"
                description="Projet de l'école 42 en duo"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Portfolio;
