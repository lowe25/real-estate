import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import type { Splide as SplideInstanceType } from "@splidejs/splide";
import Banner from "../components/Banner";
import WebpImage from "../components/WebP";

const images = [
  {
    webp: "/img/models/bathroom.webp",
    fallback: "/img/models/bathroom.jpg",
    alt: "Bathroom",
  },
  {
    webp: "/img/models/bedroom1.webp",
    fallback: "/img/models/bedroom1.jpg",
    alt: "Bedroom 1",
  },
  {
    webp: "/img/models/bedroom2.webp",
    fallback: "/img/models/bedroom2.jpg",
    alt: "Bedroom 2",
  },
  {
    webp: "/img/models/bedroom3.webp",
    fallback: "/img/models/bedroom3.jpg",
    alt: "Bedroom 3",
  },
  {
    webp: "/img/models/bedroom4.webp",
    fallback: "/img/models/bedroom4.jpg",
    alt: "Bedroom 4",
  },
  {
    webp: "/img/models/kitchen.webp",
    fallback: "/img/models/kitchen.jpg",
    alt: "Kitchen",
  },
];

const ModelsDetails = () => {
  const mainRef = useRef<SplideInstanceType | null>(null);
  const thumbsRef = useRef<SplideInstanceType | null>(null);

  useEffect(() => {
    if (mainRef.current && thumbsRef.current) {
      mainRef.current.sync(thumbsRef.current);
    }
  }, []);

  return (
    <>
      <Banner
        webpSrc={"/banner/models-banner.webp"}
        fallbackSrc={"/banner/models-banner.jpg"}
        alt="Models Banner"
        bannerTxt="Models"
        pageName="Models"
      />
      <section className="bg-[#fdf6ec]">
        <div className="pl-[50px] pr-[50px] max-md:pl-[3%] max-md:pr-[3%]">
          <div className="max-width">
            <div className="pt-[10px] flex gap-4 max-md:flex-col">
              {/* Main Carousel */}
              <div className="flex-1">
                <Splide
                  options={{
                    type: "fade",
                    rewind: true,
                    pagination: false,
                    arrows: false,
                  }}
                  onMounted={(splide: SplideInstanceType | null) => {
                    mainRef.current = splide;
                  }}
                  aria-label="Main Carousel"
                >
                  {images.map((img, idx) => (
                    <SplideSlide key={idx}>
                      <picture>
                        <source srcSet={img.webp} type="image/webp" />
                        <img
                          src={img.fallback}
                          alt={img.alt}
                          className="w-full h-[400px] object-cover rounded-md"
                        />
                      </picture>
                    </SplideSlide>
                  ))}
                </Splide>
              </div>

              {/* Thumbnail Carousel (vertical on the right) */}
              <div className="w-[110px] max-md:w-full">
                <Splide
                  options={{
                    direction: "ttb", // top-to-bottom for vertical
                    height: 400,
                    fixedWidth: 100,
                    fixedHeight: 64,
                    gap: "1rem",
                    rewind: true,
                    pagination: false,
                    isNavigation: true,
                    arrows: false,
                    cover: true,
                    breakpoints: {
                      767: {
                        direction: "none",
                      },
                    },
                  }}
                  onMounted={(splide: SplideInstanceType | null) => {
                    thumbsRef.current = splide;
                  }}
                  aria-label="Thumbnail Carousel"
                >
                  {images.map((img, idx) => (
                    <SplideSlide key={idx}>
                      <picture>
                        <source srcSet={img.webp} type="image/webp" />
                        <img
                          src={img.fallback}
                          alt={`Thumb ${idx + 1}`}
                          className="rounded cursor-pointer object-cover w-full h-full"
                        />
                      </picture>
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-[10px] pl-[50px] pr-[50px] max-md:pl-[3%] max-md:pr-[3%]">
          <div className="max-width">
            <h3 className="block mb-[10px] text-center text-[2rem] font-[600] max-md:text-[18px]">
              KeyDetails:
            </h3>
            <div className="pt-[30px] pb-[30px] mb-[30px] border-t border-b border-solid max-md:pt-[15px] max-md:pb-[15px]">
              <div className="flex justify-center gap-[20px] text-[1.6rem] max-md:text-[13px] max-md:gap-[10px] max-md:flex-col">
                <div className="flex gap-[20px]">
                  <span>Bedroom:</span>
                  <span>2</span>
                </div>
                <div className="flex gap-[20px]">
                  <span>Bathroom:</span>
                  <span>2</span>
                </div>
                <div className="flex gap-[20px]">
                  <span>Sqm:</span>
                  <span>66</span>
                </div>
                <div className="flex gap-[20px]">
                  <span>Lot Sqm:</span>
                  <span>88</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pl-[50px] pr-[50px] max-md:pl-[3%] max-md:pr-[3%]">
          <div className="max-width">
            <span className="text-[1.6rem] font-[600]">Description:</span>
            <div>
              <div className="flex">
                <div className="w-[100px]">
                  <span className="text-[1.6rem] max-md:text-[13px]">
                    House:
                  </span>
                </div>
                <div>
                  <span className="text-[1.6rem] max-md:text-[13px]">
                    Sicily Model House | House and Lot for Sale
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className="w-[100px]">
                  <span className="text-[1.6rem] max-md:text-[13px]">
                    Price:
                  </span>
                </div>
                <span className="text-[1.6rem] max-md:text-[13px]">
                  Php 5.1M – Php 8.1M
                </span>
              </div>
              <div className="flex">
                <div className="w-[100px]">
                  <span className="text-[1.6rem] max-md:text-[13px]">
                    Floor Area:
                  </span>
                </div>
                <span className="text-[1.6rem] max-md:text-[13px]">
                  66 sqm.
                </span>
              </div>
              <div className="flex">
                <div className="w-[100px]">
                  <span className="text-[1.6rem] max-md:text-[13px]">
                    Lot Area:
                  </span>
                </div>
                <span className="text-[1.6rem] max-md:text-[13px]">
                  88 sqm.
                </span>
              </div>
              <div>
                <ul className="pl-[20px] list-disc">
                  <li>
                    <span className="text-[1.6rem] max-md:text-[13px]">
                      2-Storey Single Firewall
                    </span>
                  </li>
                  <li>
                    <span className="text-[1.6rem] max-md:text-[13px]">
                      3 Bedrooms
                    </span>
                  </li>
                  <li>
                    <span className="text-[1.6rem] max-md:text-[13px]">
                      Living Area
                    </span>
                  </li>
                  <li>
                    <span className="text-[1.6rem] max-md:text-[13px]">
                      Dining Area
                    </span>
                  </li>
                  <li>
                    <span className="text-[1.6rem] max-md:text-[13px]">
                      Kitchen
                    </span>
                  </li>
                  <li>
                    <span className="text-[1.6rem] max-md:text-[13px]">
                      2 Toilet and Bath
                    </span>
                  </li>
                  <li>
                    <span className="text-[1.6rem] max-md:text-[13px]">
                      Provision for Balcony & Carport
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-[20px] pl-[50px] pr-[50px] max-md:pl-[3%] max-md:pr-[3%]">
          <div className="max-width">
            <h3 className="text-[2rem] font-[600] max-md:text-[18px]">
              Floor Plan:
            </h3>
            <div className="mt-[10px] flex gap-[20px]">
              <div>
                <WebpImage
                  webpSrc={"/models/floorplan-1.webp"}
                  fallbackSrc={"/models/floorplan-1.jpg"}
                  alt="Ground Floor"
                  className="h-auto w-full object-cover object-center shadow-lg max-md:w-full max-md:h-auto"
                />
                <span className="block mt-[15px] text-center text-[1.6rem]">
                  Ground Floor
                </span>
              </div>
              <div>
                <WebpImage
                  webpSrc={"/models/floorplan-1.webp"}
                  fallbackSrc={"/models/floorplan-1.webp"}
                  alt="Second Floor"
                  className="h-auto w-full object-contain object-center shadow-lg max-md:w-full max-md:h-auto"
                />
                <span className="block mt-[15px] text-center text-[1.6rem]">
                  Second Floor
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-[50px] pl-[50px] pr-[50px] max-md:pl-[3%] max-md:pr-[3%]">
          <div className="max-width">
            <h3 className="text-[2rem] font-[600] max-md:text-[18px]">
              Other Models
            </h3>
            <div className="mt-[20px] flex gap-[40px] justify-center max-md:flex-col max-md:gap-[20px]">
              <Link to="/">
                <article className="w-full max-w-[400px] max-md:w-auto max-md:max-w-fit">
                  <div className="overflow-hidden rounded-[20px]">
                    <WebpImage
                      webpSrc={"/top/sicily.webp"}
                      fallbackSrc={"/top/sicily.jpg"}
                      alt="Sicily House"
                      className="duration-300 ease-in-out hover:scale-110 object-cover object-center shadow-lg max-md:w-full max-md:h-auto"
                    />
                  </div>
                  <div className="max-md:mt-[10px]">
                    <h3 className="text-[3.2rem] font-[500] max-md:text-[22px]">
                      Sisily
                    </h3>
                    <div className="flex flex-col gap-[5px]">
                      <div className="flex items-center gap-[10px]">
                        <img
                          className="w-[20px] h-[20px] object-cover object-center"
                          src="/icons/bed.png"
                          alt="Bedroom Icon"
                        />
                        <span className="text-[1.6rem] max-md:text-[13px]">
                          2 Bedroom
                        </span>
                      </div>
                      <div className="flex items-center gap-[10px]">
                        <img
                          className="w-[20px] h-[20px] object-cover object-center"
                          src="/icons/toilet.png"
                          alt="Toilet Icon"
                        />
                        <span className="text-[1.6rem] max-md:text-[13px]">
                          2 Toilet and Bath
                        </span>
                      </div>
                      <div className="flex items-center gap-[10px]">
                        <img
                          className="w-[20px] h-[20px] object-cover object-center"
                          src="/icons/garage.png"
                          alt="Garage Icon"
                        />
                        <span className="text-[1.6rem] max-md:text-[13px]">
                          1 Car Garage
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>

              <Link to="/">
                <article className="w-full max-w-[400px] max-md:w-auto max-md:max-w-fit">
                  <div className="overflow-hidden rounded-[20px]">
                    <WebpImage
                      webpSrc={"/top/palermo.webp"}
                      fallbackSrc={"/top/palermo.jpg"}
                      alt="Palermo House"
                      className="duration-300 ease-in-out hover:scale-110 object-cover object-center rounded-[20px] shadow-lg max-md:w-full max-md:h-auto"
                    />
                  </div>
                  <div className="max-md:mt-[10px]">
                    <h3 className="text-[3.2rem] font-[500] max-md:text-[22px]">
                      Palermo
                    </h3>
                    <div className="flex flex-col gap-[5px]">
                      <div className="flex items-center gap-[10px]">
                        <img
                          className="w-[20px] h-[20px] object-cover object-center"
                          src="/icons/bed.png"
                          alt="Bedroom Icon"
                        />
                        <span className="text-[1.6rem] max-md:text-[13px]">
                          2 Bedroom
                        </span>
                      </div>
                      <div className="flex items-center gap-[10px]">
                        <img
                          className="w-[20px] h-[20px] object-cover object-center"
                          src="/icons/toilet.png"
                          alt="Toilet Icon"
                        />
                        <span className="text-[1.6rem] max-md:text-[13px]">
                          2 Toilet and Bath
                        </span>
                      </div>
                      <div className="flex items-center gap-[10px]">
                        <img
                          className="w-[20px] h-[20px] object-cover object-center"
                          src="/icons/garage.png"
                          alt="Garage Icon"
                        />
                        <span className="text-[1.6rem] max-md:text-[13px]">
                          1 Car Garage
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>

              <Link to="/">
                <article className="w-full max-w-[400px] max-md:w-auto max-md:max-w-fit">
                  <div className="overflow-hidden rounded-[20px]">
                    <WebpImage
                      webpSrc={"/top/salerno.webp"}
                      fallbackSrc={"/top/salerno.jpg"}
                      alt="Salerno House"
                      className="duration-300 ease-in-out hover:scale-110 object-cover object-center rounded-[20px] shadow-lg max-md:w-full max-md:h-auto"
                    />
                  </div>
                  <div className="max-md:mt-[10px]">
                    <h3 className="text-[3.2rem] font-[500] max-md:text-[22px]">
                      Salerno
                    </h3>
                    <div className="flex flex-col gap-[5px]">
                      <div className="flex items-center gap-[10px]">
                        <img
                          className="w-[20px] h-[20px] object-cover object-center"
                          src="/icons/bed.png"
                          alt="Bedroom Icon"
                        />
                        <span className="text-[1.6rem] max-md:text-[13px]">
                          3 Bedroom
                        </span>
                      </div>
                      <div className="flex items-center gap-[10px]">
                        <img
                          className="w-[20px] h-[20px] object-cover object-center"
                          src="/icons/toilet.png"
                          alt="Toilet Icon"
                        />
                        <span className="text-[1.6rem] max-md:text-[13px]">
                          2 Toilet and Bath
                        </span>
                      </div>
                      <div className="flex items-center gap-[10px]">
                        <img
                          className="w-[20px] h-[20px] object-cover object-center"
                          src="/icons/garage.png"
                          alt="Garage Icon"
                        />
                        <span className="text-[1.6rem] max-md:text-[13px]">
                          1 Car Garage
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ModelsDetails;
