interface bannerProps {
  webpSrc: string;
  fallbackSrc: string;
  alt: string;
  bannerTxt: string;
  pageName: string;
}

const Banner = ({
  webpSrc,
  fallbackSrc,
  alt,
  bannerTxt,
  pageName,
}: bannerProps) => {
  return (
    <>
      <div className="relative w-full h-[400px]">
        <picture>
          <source srcSet={`/img${webpSrc}`} type="image/webp" />
          <img
            src={`/img${fallbackSrc}`}
            alt={alt}
            className="w-full h-[400px] object-cover object-center"
          />
        </picture>
        <div className="absolute inset-0 bg-[#000]/50 z-1" />
        <span className="z-1 absolute inset-0 flex justify-center items-center text-[5rem] text-[#fff]">
          {bannerTxt}
        </span>
      </div>
      <div className="bg-[#fdf6ec] pl-[50px] pr-[50px] max-md:pl-[3%] max-md:pr-[3%]">
        <div className="max-width">
          <ul className="flex items-center gap-[15px] pt-[10px] pb-[10px] text-[1.3rem]">
            <li className="flex items-center gap-[10px]">
              <a href="#" className=" text-gray-700">
                Home
              </a>
              <img
                className="w-[10px] h-[10px]"
                src="/icons/chevron-left.png"
                alt="Chevron Icon"
              />
            </li>
            <li className="text-gray-900 font-[500]">
              <span className="">{pageName}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Banner;
