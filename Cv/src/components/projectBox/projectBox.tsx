import React from "react";

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
		<div>

		</div>
	)
}
