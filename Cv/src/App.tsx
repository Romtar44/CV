import { Route, Routes } from "react-router-dom";
import Portfolio from "./portfolio";
import ProjectBox from "./components/projectBox/projectBox";
import { TechnoBox } from "./components/technoBox/technoBox";
import NextLogo from "./assets/Logo/Next_Logo.svg";

import ReactLogo from "./assets/Logo/React_Logo.svg";
import HtmlLogo from "./assets/Logo/HTML5_Logo.svg";
import ScssLogo from "./assets/Logo/Sass_Logo.svg";
import NestLogo from "./assets/Logo/NestJS_Logo.svg";
import TSLogo from "./assets/Logo/TS_Logo.svg";
import PrismaLogo from "./assets/Logo/Prisma_Logo.svg";
import PostgreLogo from "./assets/Logo/Postgresql_Logo.svg";
import DockerLogo from "./assets/Logo/Docker_Logo.svg";
import JWTLogo from "./assets/Logo/Jwt_Logo.svg";
import SocketIOLogo from "./assets/Logo/SocketIO_Logo.svg";
import Pong from "./assets/miniature4(1).png";
import { CvBox } from "./components/cvBox/cvBox";
import climsolu from "./assets/climsolu.png";
import { AnimationBox } from "./components/cssAnimation/animationBox";

function App() {
  const climsoluTechnoList = [
    <TechnoBox
      title="TypeScript"
      logo={TSLogo}
      techName="TypeScript"
      link="https://www.typescriptlang.org/"
    />,
    <TechnoBox
      title="HTML5"
      logo={HtmlLogo}
      techName="Html"
      link="https://developer.mozilla.org/fr/docs/Web/HTML"
    />,
    <TechnoBox
      title="Scss"
      logo={ScssLogo}
      techName="Scss"
      link="https://sass-lang.com/"
    />,
    <TechnoBox
      title="Next"
      logo={NextLogo}
      techName="Next.js"
      link="https://nextjs.org/"
    />,
  ];

  const transcendanceTechnoList = [
    <TechnoBox
      title="Nest.JS"
      logo={NestLogo}
      techName="Nest.JS"
      link="https://nestjs.com/"
    />,
    <TechnoBox
      title="React"
      logo={ReactLogo}
      techName="React"
      link="https://fr.legacy.reactjs.org/"
    />,
    <TechnoBox
      title="TypeScript"
      logo={TSLogo}
      techName="TypeScript"
      link="https://www.typescriptlang.org/"
    />,
    <TechnoBox
      title="Docker"
      logo={DockerLogo}
      techName="Docker"
      link="https://www.docker.com/"
    />,
    <TechnoBox
      title="Prisma"
      logo={PrismaLogo}
      techName="Prisma"
      link="https://www.prisma.io/"
    />,
    <TechnoBox
      title="PostgreSQL"
      logo={PostgreLogo}
      techName="PostgreSQL"
      link="https://www.postgresql.org/"
    />,
    <TechnoBox
      title="HTML5"
      logo={HtmlLogo}
      techName="HTML5"
      link="https://developer.mozilla.org/fr/docs/Web/HTML"
    />,
    <TechnoBox
      title="Scss"
      logo={ScssLogo}
      techName="Scss"
      link="https://sass-lang.com/"
    />,
    <TechnoBox
      title="JWT"
      logo={JWTLogo}
      techName="JWT"
      link="https://jwt.io/"
    />,
    <TechnoBox
      title="Socket.IO"
      logo={SocketIOLogo}
      techName="Socket.IO"
      link="https://socket.io/fr"
    />,
  ];

  return (
    <Routes>
      <Route
        path="/pong"
        element={
          <ProjectBox
            title="Pong vintage développer à 2"
            img={Pong}
            techno={transcendanceTechnoList}
            text="Jeu vidéo vintage développer en groupe. Il s'agit d'un projet de l'école 42."
            link="https://transcendance42.com"
            linkGh="https://github.com/Romtar44/transcendance"
          />
        }
      />
      <Route
        path="/climsolu"
        element={
          <ProjectBox
            title="ClimSolution"
            img={climsolu}
            techno={climsoluTechnoList}
            text="Site vitrine pour une entreprise parisienne de BTP"
            link="https://clim-solution.vercel.app"
          />
        }
      />
      <Route path="/animation" element={<AnimationBox />} />
      <Route path="/cv" element={<CvBox title="Mon cv" />} />
      <Route path="/" element={<Portfolio />} />
    </Routes>
  );
}

export default App;
