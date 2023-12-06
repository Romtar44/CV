import styles from './portfolio.module.scss'
import { MainBox } from './components/mainBox/mainbox'
import Pp from './assets/rtournet.jpg'
import Pong from './assets/miniature4(1).png'
import { useEffect, useState } from 'react'
import { useMediaQuery } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function Portfolio()
{
	const [offsetY, setOffsetY] = useState(0)
	const [mediumMode, smallMode] = useMediaQuery([
		`(max-width: 1000px)`,
		'(max-width: 800px)',
	])

	const mouseMoveFunction = (event: any) =>
	{
		window.scroll({ left: event.pageX / (document.documentElement.scrollWidth / (document.documentElement.scrollWidth - window.innerWidth)), behavior: 'instant' })
	}

	const handleScroll = () =>
	{
		setOffsetY(window.scrollY)
	}


	useEffect(() =>
	{
		window.scroll({ top: document.body.clientHeight / 2, left: (document.documentElement.scrollWidth / 2) / (document.documentElement.scrollWidth / (document.documentElement.scrollWidth - window.innerWidth)), behavior: 'instant' })
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

	console.log(document.documentElement.scrollWidth)

	return (
		<>
			{
				!mediumMode &&
				<div className={styles.mainContainer} id='main'>

					<div className={styles.container}>

						<div className={styles.shortColumn + " " + styles.column} style={{ transform: `translateY(${offsetY * 0.2}px)` }}>
							<MainBox color='#2f4454' img={Pong} path='/pong' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#2f4454' img={Pong} path='/pong' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#2f4454' img={Pong} path='/pong' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#2f4454' img={Pong} path='/pong' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
						</div>

						<div className={styles.longColumn + " " + styles.column} style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#2f4454' img={Pong} path='/pong' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#2f4454' img={Pong} path='/pong' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#2f4454' img={Pong} path='/pong' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#2f4454' img={Pong} path='/pong' title='Mon cv' description='Site vitrine développé par moi même' />

						</div>

						<div className={styles.shortColumn + " " + styles.column} style={{ transform: `translateY(${offsetY * 0.2}px)` }}>
							<MainBox color='#2f4454' img={Pong} path='/pong' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#2f4454' img={Pong} path='/pong' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#2f4454' img={Pong} path='/pong' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#2f4454' img={Pong} path='/pong' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
						</div>

						<div className={styles.longColumn + " " + styles.column} style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#2f4454' img={Pong} path='/pong' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#2f4454' img={Pong} path='/pong' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#2f4454' img={Pong} path='/pong' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#2f4454' img={Pong} path='/pong' title='Mon cv' description='Site vitrine développé par moi même' />

						</div>

						<div className={styles.shortColumn + " " + styles.column} style={{ transform: `translateY(${offsetY * 0.2}px)` }}>
							<MainBox color='#2f4454' img={Pong} path='/pong' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#2f4454' img={Pong} path='/pong' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#2f4454' img={Pong} path='/pong' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#2f4454' img={Pong} path='/pong' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
						</div>
					</div>
				</div >
			}
			{
				mediumMode &&
				<div className={styles.mainContainer} id='main'>

					<div className={styles.container}>

						<div className={styles.longColumn + " " + styles.column} style={{ transform: `translateY(${offsetY * 0.4}px)` }}>
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développer par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
						</div>

						<div className={styles.shortColumn + " " + styles.column} style={{ transform: `translateY(${offsetY * 0.2}px)` }}>
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
						</div>

						<div className={styles.longColumn + " " + styles.column} style={{ transform: `translateY(${offsetY * 0.4}px)` }}>
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développer par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
							<MainBox color='#20201e' img={Pp} path='/portfolio' title='Mon cv' description='Site vitrine développé par moi même' />
						</div>
					</div>
				</div >
			}
		</>
	)
}

export default Portfolio
