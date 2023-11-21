import React from "react";
import styles from './boxTitle.module.scss'

type BoxTitleProps = {
	title: string,
	description: string,
	display: string
}

export const BoxTitle: React.FC<BoxTitleProps> = ({
	title,
	description,
	display
}) =>
{
	return (
		<div>
			{
				display !== 'mobile' &&
				<div className={styles.titleContainer}>
					<h3>{title}</h3>
					<i>
						{description}
					</i>
				</div>
			}
			{
				display === 'mobile' &&
				<div>
					{title}
				</div>
			}
		</div>
	)
}
