import styles from './App.module.scss'
import { MainBox } from './components/mainBox/mainbox'
import Pp from './assets/rtournet.jpg'
import { useEffect } from 'react'

function App()
{

	const mouseMoveFunction = (event: any) =>
	{
		window.scroll({ left: event.pageX / (2200 / (2200 - screen.width)), behavior: 'instant' })
	}

	useEffect(() =>
	{
		window.scroll({ top: 0, left: (2200 / 2) / (2200 / (2200 - screen.width)), behavior: 'instant' })
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
