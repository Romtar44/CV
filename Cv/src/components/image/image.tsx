type ImageProps = {
	imgSrc: string,
	alt: string,
	w?: string,
	h?: string,
	className?: string
}

const Image = ({
	imgSrc,
	alt,
	w = "100%",
	h = "100%",
	className,
}: ImageProps) =>
{
	return (
		<div className={className} style={{ width: w, height: h }}>
			<img src={imgSrc} alt={alt} style={{}} />
		</div>)
}

export default Image
