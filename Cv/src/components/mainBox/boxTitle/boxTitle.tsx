import React from "react";
import styles from './boxTitle.module.scss'


type BoxTitleProps = {
	title: string,
	description: string,
}

export const BoxTitle: React.FC<BoxTitleProps> = ({
	title,
	description,
}) =>
{
	return (
		<div className={styles.titleContainer}>
			<div className={styles.textContainer}>
				<h3>{title}</h3>
				<i>
					{description}
				</i>
			</div>
		</div>
	)
}
