import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import WebpImage from "../components/WebP";

const Models = () => {
  return (
    <>
      <Banner
        webpSrc={"/banner/models-banner.webp"}
        fallbackSrc={"/banner/models-banner.jpg"}
        alt="Models Banner"
        bannerTxt="Models"
        pageName="Models"
      />
      <section className="bg-[#fdf6ec] pl-[50px] pr-[50px] max-md:pl-[3%] max-md:pr-[3%]">
        <div className="max-width">
          <div className="pt-[15px] pb-[50px] grid grid-cols-3 gap-[40px] justify-center max-md:grid-cols-1 max-md:gap-[20px] max-md:pb-[15px]">
            <Link to="/model-details">
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

            <Link to="/model-details">
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

            <Link to="/model-details">
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

            <Link to="/model-details">
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

            <Link to="/model-details">
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
      </section>
    </>
  );
};

export default Models;
