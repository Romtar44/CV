import React from 'react'
import styles from './mainbox.module.scss'
import Image from '../image/image'
import Pp from '../../assets/rtournet.jpg'

type MainBoxProps = {

}

export const MainBox: React.FC<MainBoxProps> = ({ }) =>
{
	return (
		<div className={styles.boxContainer}>
			<Image imgSrc={Pp} alt='' w='100%' h='100%' />
			<div className={styles.rollText}>
				<b>
					En savoir plus&nbsp;
				</b>
				<b>
					En savoir plus&nbsp;
				</b>

			</div>
		</div>
	)
}
