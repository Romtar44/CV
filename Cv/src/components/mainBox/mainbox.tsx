import React, { useEffect, useMemo, useState } from 'react'
import styles from './mainbox.module.scss'
import Image from '../image/image'
import Pp from '../../assets/rtournet.jpg'
import { Marquee } from '../marquee/marquee'
import { BoxTitle } from './boxTitle/boxTitle'
import { useMediaQuery } from '@chakra-ui/react'

type MainBoxProps = {

}

export const MainBox: React.FC<MainBoxProps> = ({ }) =>
{
	const [displayTitle, setDisplayTitle] = useState<'none' | 'flex' | 'mobile'>('none')
	const [mobileMode] = useMediaQuery('(max-width: 1000px)')

	const title = 'Transcendance'

	useEffect(() =>
	{
		if (mobileMode)
			setDisplayTitle('mobile')
		//if (!mobileMode)
		//	setDisplayTitle('none')
	}, [mobileMode])

	return (
		<div className={styles.boxContainer}>
			<Image className={styles.imageContainer} imgSrc={Pp} alt='' w='100%' h='100%' />
			<div className={styles.marquee}>
				<Marquee text='En savoir plus' />
			</div>
			<i className={styles.title}>{title}</i>
			<div className={styles.boxTitleContainer}>
				<BoxTitle title={title} description="Projet d'un pong en full stack" display={displayTitle} />
			</div>
		</div>
	)
}
