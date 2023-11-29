import React from 'react'
import styles from './mainbox.module.scss'
import Image from '../image/image'
import { Marquee } from '../marquee/marquee'
import { BoxTitle } from './boxTitle/boxTitle'
import { useMediaQuery } from '@chakra-ui/react'
import ArrowIcon from '../../assets/arrowIcon.svg'

function lightenColor(hexColor: string, percent: number): string
{
	const r = parseInt(hexColor.substring(1, 3), 16);
	const g = parseInt(hexColor.substring(3, 5), 16);
	const b = parseInt(hexColor.substring(5, 7), 16);

	// Calculer la nouvelle couleur en ajoutant de la luminosité
	const newR = Math.min(255, r + (percent / 100) * (255 - r));
	const newG = Math.min(255, g + (percent / 100) * (255 - g));
	const newB = Math.min(255, b + (percent / 100) * (255 - b));

	// Convertir les composantes de couleur en format hexadécimal
	const newHexColor = `#${Math.round(newR).toString(16).padStart(2, '0')}${Math.round(newG).toString(16).padStart(2, '0')}${Math.round(newB).toString(16).padStart(2, '0')}`;

	return newHexColor;
}

type MainBoxProps = {
	title: string,
	description: string,
	color?: string,
	img: string,
}

export const MainBox: React.FC<MainBoxProps> = ({
	title,
	description,
	color = 'black',
	img,
}) =>
{
	const [mobileMode] = useMediaQuery('(max-width: 800px)')


	return (
		<div className={styles.container}>
			<div className={styles.boxContainer}>
				<Image className={styles.mainImgContainer} border={`2px solid ${lightenColor(color, 20)}`} imgSrc={img} alt='' w='100%' h='100%' />
				<div className={styles.marquee}>
					<Marquee text='En savoir plus' />
				</div>
				{
					mobileMode ?
						<div className={styles.boxTitleContainer}>
							<BoxTitle title={title} description={description} />
							<Image className={styles.staticArrow} imgSrc={ArrowIcon} alt='' w='35px' h='35px' />
						</div>
						:
						<div>
							<div className={styles.blurred} style={{ backgroundColor: color }}></div>
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
