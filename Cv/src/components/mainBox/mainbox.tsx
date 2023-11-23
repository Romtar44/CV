import React from 'react'
import styles from './mainbox.module.scss'
import Image from '../image/image'
import { Marquee } from '../marquee/marquee'
import { BoxTitle } from './boxTitle/boxTitle'
import { useMediaQuery } from '@chakra-ui/react'
import ArrowIcon from '../../assets/arrowIcon.svg'

type MainBoxProps = {
	title: string,
	description: string,
	img: string,
}

export const MainBox: React.FC<MainBoxProps> = ({
	title,
	description,
	img,
}) =>
{
	const [mobileMode] = useMediaQuery('(max-width: 1000px)')

	return (
		<div className={styles.container}>
			<div className={styles.boxContainer}>
				<Image className={styles.mainImgContainer} imgSrc={img} alt='' w='100%' h='100%' />
				<div className={styles.marquee}>
					<Marquee text='En savoir plus' />
				</div>
				{
					mobileMode ?
						<div className={styles.boxTitleContainer}>
							<BoxTitle title={title} description={description} />
							<Image className={styles.arrow} imgSrc={ArrowIcon} alt='' w='35px' h='35px' />
						</div>
						:
						<div>
							<i className={styles.title}>{title}</i>
							<div className={styles.boxTitleContainer}>
								<BoxTitle title={title} description={description} />
								<Image className={styles.arrow} imgSrc={ArrowIcon} alt='' w='35px' h='35px' />
							</div>
						</div>
				}
			</div>
		</div>
	)
}
