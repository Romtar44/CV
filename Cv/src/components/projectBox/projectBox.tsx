import React from "react";
import styles from './projectBox.module.scss'
import Image from "../image/image";

type ProjectBoxProps = {
	title: string
	img: string,
	techno: string,
	title1: string,
	text: string,
	link: string,
	linkGh?: string,
}


export const ProjectBox: React.FC<ProjectBoxProps> = ({
	title,
	img,
	techno,
	title1,
	text,
	link,
	linkGh = 'https://github.com/Romtar44'
}) =>
{
	title
	img
	techno
	title1
	text
	link
	return (
		<div className={styles.container}>

			<div className={styles.textContainer}>
				<h2 className={styles.mainTitle}>
					{title}
				</h2>
				<span>
					{text}
				</span>
				<br></br>
				<a href={link}>{link} </a>
				<br></br>
				<a href={linkGh}>{linkGh} </a>
			</div>

			<div className={styles.firstBox}>
				<Image imgSrc={img} alt="" border="none" />
				<i>{techno}</i>
			</div>
		</div>
	)
}
