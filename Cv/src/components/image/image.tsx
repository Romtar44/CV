import styles from "./image.module.scss";

type ImageProps = {
  imgSrc: string;
  alt: string;
  w?: string;
  h?: string;
  border?: string;
  className?: string;
};

export const MyImage = ({
  imgSrc,
  alt,
  w = "100%",
  h = "100%",
  border = "1px solid black",
  className,
}: ImageProps) => {
  return (
    <div
      className={`${styles.imgContainer} ${className}`}
      style={{ width: w, height: h, border: border }}
    >
      <img src={imgSrc} alt={alt} />
    </div>
  );
};

export default MyImage;
