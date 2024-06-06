import styles from "./image.module.scss";

type ImageProps = {
  imgSrc: string;
  alt: string;
  w?: string;
  h?: string;
  border?: string;
  borderRadius?: string;
  className?: string;
};

export const MyImage = ({
  imgSrc,
  alt,
  w = "100%",
  h = "100%",
  border = "1px solid black",
  borderRadius,
  className,
}: ImageProps) => {
  return (
    <div
      className={`${styles.imgContainer} ${className}`}
      style={{
        width: w,
        height: h,
        border: border,
        borderRadius: borderRadius,
      }}
    >
      <img src={imgSrc} alt={alt} />
    </div>
  );
};

export default MyImage;
