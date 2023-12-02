import styles from './portfolio.module.scss'
import { MainBox } from './components/mainBox/mainbox'
import Pp from './assets/rtournet.jpg'
import Pong from './assets/miniature4(1).png'
import { useEffect, useState } from 'react'
import { useMediaQuery } from '@chakra-ui/react'
import { ProjectBox } from './components/projectBox/projectBox'


function Portfolio()
{
	const [offsetY, setOffsetY] = useState(0)
	const [mediumMode, smallMode] = useMediaQuery([
		`(max-width: 1000px)`,
		'(max-width: 800px)',
	])


	const mouseMoveFunction = (event: any) =>
	{
		window.scroll({ left: event.pageX / (document.body.clientWidth / (document.body.clientWidth - window.innerWidth)), behavior: 'instant' })
	}

	const handleScroll = () =>
	{
		setOffsetY(window.scrollY)
	}

	useEffect(() =>
	{
		window.scroll({ top: document.body.clientHeight / 2, left: (document.body.clientWidth / 2) / (document.body.clientWidth / (document.body.clientWidth - window.innerWidth)), behavior: 'instant' })
		if (!smallMode)
			window.addEventListener('mousemove', mouseMoveFunction)
		else
			window.removeEventListener('mousemove', mouseMoveFunction)
		window.addEventListener('scroll', handleScroll)

		return (() =>
		{
			window.removeEventListener('mousemove', mouseMoveFunction)
			window.removeEventListener('scroll', handleScroll)
		})
	}, [smallMode])

	return (
		<>
			<ProjectBox title='Mon Portfolio de légende' img={Pp} techno="React, Vite, Html, Scss" title1='Projet volé sur un webflow et recoder à la main' text="Débutant en programation web, j'ai choisi de recoder à la main un site de designer de A à Z en le remodelant à ma façon" link='https://romaintldev.com' linkGh='https://github.com/Romtar44/CV' />
			{/*{
				!mediumMode &&
				<div className={styles.mainContainer} id='main'>

					<div className={styles.container}>

						<div className={styles.shortColumn + " " + styles.column} style={{ transform: `translateY(${offsetY * 0.2}px)` }}>
							<MainBox color='#2f4454' img={Pong} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#2f4454' img={Pong} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#2f4454' img={Pong} title='Mon cv' description='Site vitrine développé par moi même' />
						</div>

						<div className={styles.longColumn + " " + styles.column} style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#2f4454' img={Pong} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#2f4454' img={Pong} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
						</div>

						<div className={styles.shortColumn + " " + styles.column} style={{ transform: `translateY(${offsetY * 0.2}px)` }}>
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#2f4454' img={Pong} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#2f4454' img={Pong} title='Mon cv' description='Site vitrine développé par moi même' />
						</div>

						<div className={styles.longColumn + " " + styles.column} style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
							<MainBox color='#2f4454' img={Pong} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#2f4454' img={Pong} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
						</div>

						<div className={styles.shortColumn + " " + styles.column} style={{ transform: `translateY(${offsetY * 0.2}px)` }}>
							<MainBox color='#2f4454' img={Pong} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#2f4454' img={Pong} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
						</div>
					</div>
				</div >
			}
			{
				mediumMode &&
				<div className={styles.mainContainer} id='main'>

					<div className={styles.container}>

						<div className={styles.longColumn + " " + styles.column} style={{ transform: `translateY(${offsetY * 0.4}px)` }}>
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développer par moi même' />
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
						</div>

						<div className={styles.shortColumn + " " + styles.column} style={{ transform: `translateY(${offsetY * 0.3}px)` }}>
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
						</div>

						<div className={styles.longColumn + " " + styles.column} style={{ transform: `translateY(${offsetY * 0.4}px)` }}>
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développer par moi même' />
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
						</div>
					</div>
				</div >
			}*/}
		</>
	)
}

export default Portfolio
