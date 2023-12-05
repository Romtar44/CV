import React from 'react'
import styles from './technoBox.module.scss'
import Image from '../image/image'

export type TechnoBoxProps = {
	logo: string,
	techName: string,
	w?: string,
	h?: string,
}

export const TechnoBox: React.FC<TechnoBoxProps> = ({
	logo,
	techName,
	w = '40px',
	h = '40px'
}) =>
{

	return (
		<div className={styles.container}>
			<Image imgSrc={logo} alt={techName} w={w} h={h} border='none' />
			<span>{techName}</span>
		</div>
	)
}
