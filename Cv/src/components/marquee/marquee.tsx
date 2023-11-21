import React from 'react'
import styles from './marquee.module.scss'

type MarqueeProps = {
	text: string,
	color?: string,
	fontSize?: string,
}

export const Marquee: React.FC<MarqueeProps> = ({
	text,
	color = "white",
}) =>
{
	return (
		<div className={styles.rollingText} style={{ color: color }}>
			<div data-text={`${text}`} >
				<span>{text}&nbsp;</span>
			</div>
		</div>
	)
}
