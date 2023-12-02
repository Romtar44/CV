import { Route, Routes } from "react-router-dom"
import Portfolio from './portfolio'
import { ProjectBox } from "./components/projectBox/projectBox";

function App()
{
	return (
		<Routes>
			<Route path="/" element={<Portfolio />} />
			{/*<Route path="/project" element={<ProjectBox />} />*/}
		</Routes>
	);
}

export default App
