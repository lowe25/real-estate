interface WebpImageProps {
  webpSrc: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
}

const WebpImage = ({
  webpSrc,
  fallbackSrc,
  alt,
  className,
}: WebpImageProps) => {
  return (
    <>
      <picture>
        <source srcSet={`/img${webpSrc}`} type="image/webp" />
        <img
          src={`/img${fallbackSrc}`}
          alt={alt}
          className={className ?? "w-full h-auto rounded-lg"}
        />
      </picture>
    </>
  );
};

export default WebpImage;
