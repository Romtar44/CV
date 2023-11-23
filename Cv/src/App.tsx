import styles from './App.module.scss'
import { MainBox } from './components/mainBox/mainbox'
import Pp from './assets/rtournet.jpg'
import { useEffect } from 'react'

2200 / (2200 - window.innerWidth)

function App()
{

	const mouseMoveFunction = (event: any) =>
	{
		window.scroll({ top: 0, left: (event.clientX - (window.innerWidth / 2)) / (2200 / (2200 - window.innerWidth)), behavior: 'smooth' })
	}


	useEffect(() =>
	{
		window.scroll(window.innerWidth, 0)
		window.addEventListener('mousemove', mouseMoveFunction)
		return (() => window.removeEventListener('mousemove', mouseMoveFunction))
	}, [])

	return (
		<div className={styles.mainContainer} id='main'>

			<div className={styles.container}>

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
			</div>
		</div>
	)
}

export default App
