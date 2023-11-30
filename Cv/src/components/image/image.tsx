type ImageProps = {
	imgSrc: string,
	alt: string,
	w?: string,
	h?: string,
	border?: string,
	className?: string
}

const Image = ({
	imgSrc,
	alt,
	w = "100%",
	h = "100%",
	border = '1px solid black',
	className,
}: ImageProps) =>
{
	return (
		<div className={className} style={{ width: w, height: h, border: border }}>
			<img src={imgSrc} alt={alt} />
		</div>)
}

export default Image
