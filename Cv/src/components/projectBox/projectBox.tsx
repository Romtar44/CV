import React from "react";
import styles from './projectBox.module.scss'
import Image from "../image/image";
import { useMediaQuery } from "@chakra-ui/react";

type ProjectBoxProps = {
	title: string
	img: string,
	techno: JSX.Element[],
	text: string,
	link: string,
	linkGh?: string,
}


export const ProjectBox: React.FC<ProjectBoxProps> = ({
	title,
	img,
	techno,
	text,
	link,
	linkGh = 'https://github.com/Romtar44'
}) =>
{
	const [smallMode] = useMediaQuery([
		'(max-width: 800px)'
	])

	return (
		!smallMode ?
			<div className={styles.container}>

				<div className={styles.textContainer}>
					<h2 className={styles.mainTitle}>
						{title}
					</h2>

					<div className={styles.text}>
						{text}
					</div>

					<div className={styles.links}>
						<a href={link}>{link} </a>
						<br></br>
						<a href={linkGh}>{linkGh} </a>
					</div>
				</div>

				<div className={styles.projectContainer}>
					<Image imgSrc={img} className={styles.imgClass} alt="" border="none" w="80%" h="auto" />
					<div className={styles.technoContainer}>
						{
							techno.map((tech) =>
							{
								return tech
							})
						}
					</div>
				</div>
			</div>
			:
			<div className={styles.containerMobile}>

				<h2 className={styles.mainTitleMobile}>
					{title}
				</h2>

				<div className={styles.projectContainerMobile}>
					<Image imgSrc={img} className={styles.imgClassMobile} alt="" border="none" w="75%" h="auto" />
					<div className={styles.technoContainerMobile}>
						{
							techno.map((tech) => tech)
						}
					</div>
				</div>

				<div className={styles.textMobile}>
					{text}
				</div>


				<div className={styles.linksMobile}>
					<a href={link}>{link} </a>
					<br></br>
					<a href={linkGh}>{linkGh} </a>
				</div>
			</div>
	)
}

export default ProjectBox
