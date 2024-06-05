import pics from "../../assets/rtournet.jpg";
import MyImage from "../image/image";
import styles from "./cvBox.module.scss";

export type CvBoxProps = {
  title: string;
};

const PresentationCard = () => {
  return (
    <div className={styles.presentationCardContaienr}>
      <div className={styles.picsContainer}>
        <MyImage
          h="90px"
          w="90px"
          border="none"
          imgSrc={pics}
          alt="Photo de moi"
          className={styles.pics}
        />
      </div>
      <div className={styles.titleContainer}>
        <h1>Romain Tournet Lambert</h1>
        <p>Développeur web fullstack</p>
      </div>
    </div>
  );
};

type ExperienceCardProps = {
  title: string;
  description: string;
  period: string;
  link: string[];
  linkDescription: string;
  displayNumber?: boolean;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  description,
  period,
  link,
  linkDescription,
  displayNumber = false,
}) => {
  return (
    <div className={styles.experienceContainer}>
      <i className={styles.periodContainer}>{period}</i>
      <div className={styles.experienceDescription}>
        <h3>{title}</h3>
        <p>{description}</p>
        {link.map((value, idx) => (
          <a key={idx} href={value} rel="external nofollow" target="_blank">
            {`${linkDescription} ${displayNumber ? idx + 1 : ""}`}
          </a>
        ))}
      </div>
    </div>
  );
};

type LinkContainerProps = {
  link: string;
  name: string;
};

const LinkContainer: React.FC<LinkContainerProps> = ({ link, name }) => {
  return (
    <div className={styles.experienceContainer}>
      <p
        style={{ color: "rgba(255, 255, 255, 0.9)" }}
        className={styles.periodContainer}
      >
        {name}{" "}
      </p>
      <a
        className={styles.experienceDescription}
        href={link}
        rel="external nofollow"
        target="_blank"
      >
        {link}
      </a>
    </div>
  );
};

export const CvBox: React.FC<CvBoxProps> = ({ title }) => {
  title;
  return (
    <div className={styles.wrapper}>
      <div className={styles.cvBoxContainer}>
        <PresentationCard />
        <div className={styles.sectionContainer}>
          <h2>A propos</h2>
          <p>
            Je suis un jeune développeur sorti de l'école 42. J'affectionne
            créer des projets de A à Z et la résolution de problème. Curieux et
            rigoureux, je suis toujours à l'écoute pour de nouveaux défis.
          </p>
        </div>
        <div className={styles.sectionContainer}>
          <h2>Expérience</h2>
          <ExperienceCard
            title="Développeur web Fullstack junior freelance"
            description="Réalisation de site web"
            period="2024 - ~"
            link={["https://clim-solution.vercel.app/"]}
            linkDescription="Exemple de site"
            displayNumber
          />
          <ExperienceCard
            title="Étudiant"
            description="Ecole 42, Paris"
            period="2021 - 2024"
            link={["https://profile.intra.42.fr/users/rtournet"]}
            linkDescription="Profil 42"
          />
        </div>
        <div className={styles.sectionContainer}>
          <h2>Projet annexe</h2>
          <ExperienceCard
            title="Jeu mobile secret"
            description="Développement entre ami d'un jeu mobile... révolutionnaire ?"
            period="En cours"
            link={["https://fr.wikipedia.org/wiki/Secret"]}
            linkDescription="Le jeu mobile le plus attendu du siècle"
          />
        </div>
        <div className={styles.sectionContainer}>
          <h2>Liens</h2>
          <LinkContainer name="Github" link="https://github.com/Romtar44" />
          <LinkContainer
            name="LinkedIn"
            link="https://www.linkedin.com/in/romain-tournet-lambert-9115b1188/"
          />
        </div>
      </div>
    </div>
  );
};
