import React from 'react'
import styles from './mainbox.module.scss'
import Image from '../image/image'
import Pp from '../../assets/rtournet.jpg'
import { Marquee } from '../marquee/marquee'

type MainBoxProps = {

}

export const MainBox: React.FC<MainBoxProps> = ({ }) =>
{
	return (
		<div className={styles.boxContainer}>
			<Image imgSrc={Pp} alt='' w='100%' h='100%' />
			<div className={styles.marquee}>
				<Marquee text='En savoir plus' />
			</div>
		</div>
	)
}
