import styles from './App.module.scss'
import { MainBox } from './components/mainBox/mainbox'
import Pp from './assets/rtournet.jpg'
import { useEffect } from 'react'

function App()
{

	const mouseMoveFunction = (event: any) =>
	{
		if (event.clientX > 10)
		{
			window.scroll({ top: 0, left: event.clientX, behavior: 'smooth' })
			console.log(event.clientX, window.scrollX)
		}
	}


	useEffect(() =>
	{
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
