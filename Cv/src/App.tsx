import styles from './App.module.scss'
import { MainBox } from './components/mainBox/mainbox'
import Pp from './assets/rtournet.jpg'
import { useEffect, useState } from 'react'
import { useMediaQuery } from '@chakra-ui/react'

function App()
{
	const [offsetY, setOffsetY] = useState(0)
	const [mobileMode] = useMediaQuery('(max-width: 1000px)')



	const mouseMoveFunction = (event: any) =>
	{
		window.scroll({ left: event.pageX / (document.body.clientWidth / (document.body.clientWidth - screen.width)), behavior: 'instant' })
		console.log(event.pageX)
	}

	const handleScroll = () =>
	{
		setOffsetY(window.scrollY)
	}

	useEffect(() =>
	{
		window.scroll({ top: 0, left: (document.body.clientWidth / 2) / (document.body.clientWidth / (document.body.clientWidth - screen.width)), behavior: 'instant' })
		window.addEventListener('mousemove', mouseMoveFunction)
		window.addEventListener('scroll', handleScroll)

		return (() =>
		{
			window.removeEventListener('mousemove', mouseMoveFunction)
			window.removeEventListener('scroll', handleScroll)
		})

	}, [])

	return (
		!mobileMode ?
			<div className={styles.mainContainer} id='main'>

				<div className={styles.container}>

					<div className={styles.shortColumn + " " + styles.column} style={{ transform: `translateY(${offsetY * 0.2}px)` }} >
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
					</div>

					<div className={styles.longColumn + " " + styles.column} style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développer par moi même' />
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
					</div>

					<div className={styles.shortColumn + " " + styles.column} style={{ transform: `translateY(${offsetY * 0.2}px)` }}>
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
					</div>

					<div className={styles.longColumn + " " + styles.column} style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développer par moi même' />
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
					</div>

					<div className={styles.shortColumn + " " + styles.column} style={{ transform: `translateY(${offsetY * 0.2}px)` }}>
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
					</div>
				</div>
			</div >
			:
			<div className={styles.mainContainer} id='main'>

				<div className={styles.container}>

					<div className={styles.longColumn + " " + styles.column}>
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développer par moi même' />
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
					</div>

					<div className={styles.shortColumn + " " + styles.column}>
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
					</div>

					<div className={styles.longColumn + " " + styles.column}>
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développer par moi même' />
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
						<MainBox img={Pp} title='Mon cv' description='Site vitrine développé par moi même' />
					</div>
				</div>
			</div >
	)
}

export default App
