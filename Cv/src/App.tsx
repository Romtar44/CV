import { Route, Routes } from "react-router-dom"
import Portfolio from './portfolio'
import { ProjectBox } from "./components/projectBox/projectBox";
import { TechnoBox } from "./components/technoBox/technoBox";
import ViteLogo from './assets/Logo/Vite_logo.svg'
import ReactLogo from './assets/Logo/React_Logo.svg'
import HtmlLogo from './assets/Logo/HTML5_Logo.svg'
import ScssLogo from './assets/Logo/Sass_Logo.svg'
import NestLogo from './assets/Logo/NestJS_Logo.svg'
import TSLogo from './assets/Logo/TS_Logo.svg'
import PrismaLogo from './assets/Logo/Prisma_Logo.svg'
import PostgresLogo from './assets/Logo/Postgresql_Logo.svg'
import DockerLogo from './assets/Logo/Docker_Logo.svg'
import JWTLogo from './assets/Logo/Jwt_Logo.svg'
import SocketIOLogo from './assets/Logo/SocketIO_Logo.svg'
import Pp from './assets/rtournet.jpg'
import Pong from './assets/miniature4(1).png'

function App()
{
	const portfolioTechnoList = [
		< TechnoBox logo={ReactLogo} techName='React' />,
		< TechnoBox logo={TSLogo} techName='TypeScript' />,
		< TechnoBox logo={HtmlLogo} techName='Html' />,
		< TechnoBox logo={ScssLogo} techName='Scss' />,
		< TechnoBox logo={ViteLogo} techName='Vite' />,
	]

	const transcendanceTechnoList = [
		< TechnoBox logo={NestLogo} techName='Nest' />,
		< TechnoBox logo={ReactLogo} techName='React' />,
		< TechnoBox logo={TSLogo} techName='TypeScript' />,
		< TechnoBox logo={DockerLogo} techName='Docker' />,
		< TechnoBox logo={PrismaLogo} techName='Prisma' />,
		< TechnoBox logo={PostgresLogo} techName='PostgresSQL' />,
		< TechnoBox logo={HtmlLogo} techName='Html' />,
		< TechnoBox logo={ScssLogo} techName='Scss' />,
		< TechnoBox logo={JWTLogo} techName='JWT' />,
		< TechnoBox logo={SocketIOLogo} techName='SocketIO' />,
	]

	return (
		<Routes>
			<Route path="/" element={<Portfolio />} />
			<Route path="/portfolio" element={<ProjectBox title="Portfolio mozaïque" img={Pp} techno={portfolioTechnoList} text="Premier site vitrine développer par moi même de A à Z." link="https://romaintldev.com" linkGh="https://github.com/Romtar44/CV" />} />
			<Route path="/pong" element={<ProjectBox title="Pong vintage développer à 2" img={Pong} techno={transcendanceTechnoList} text="Jeu vidéo vintage développer en groupe. Il s'agit d'un projet de l'école 42." link="https://romaintldev.com" linkGh="https://github.com/Romtar44/transcendance" />} />
		</Routes>
	);
}

export default App
