import { Link } from "react-router-dom";
import WebpImage from "../components/WebP";

const Home = () => {
  return (
    <>
      <section className="relative font-[Poppins] flex justify-center flex-col items-center h-screen bg-[url(/img/top/mv.jpg)] bg-no-repeat bg-center bg-cover">
        <div className="absolute inset-0 bg-[#000] opacity-60 z-0" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-[3rem] text-white max-md:text-[20px]">
            Find Your Dream Home with Acme Real Estate
          </h1>
          <span className="text-[1.6rem] text-white max-md:text-[13px]">
            From modern condos to family homes, we help you move forward with
            confidence.
          </span>
        </div>
      </section>

      <section className="pl-[50px] pr-[50px] max-md:pl-[3%] max-md:pr-[3%] bg-[#b3282d]">
        <div className="max-width">
          <div className="pt-[30px] pb-[30px] flex gap-[20px] items-center max-md:flex-col">
            <div className="w-fit text-[#fff]">
              <h2 className="text-[2.4rem] font-[700] max-md:text-[20px]">
                What we do
              </h2>
              <span className="text-[1.6rem] max-md:text-[13px]">
                At Acme Homes, we believe everyone deserves a place to call
                home. Whether you're searching for a modern condo, a spacious
                family house, or your first property, our team is here to guide
                you every step of the way. With a commitment to trust,
                transparency, and exceptional service, we make real estate
                simple and stress-free.
              </span>
            </div>
            <WebpImage
              webpSrc={"/top/house-intro.webp"}
              fallbackSrc={"/top/house-intro.jpg"}
              alt="House Introduction"
              className="w-[600px] h-[200px] object-cover object-center rounded-lg shadow-lg max-md:w-full max-md:h-auto"
            />
          </div>
        </div>
      </section>

      <section className="pl-[50px] pr-[50px] pt-[50px] pb-[50px] bg-[#fdf6ec] max-md:pl-[3%] max-md:pr-[3%]">
        <div className="max-width">
          <h2 className="text-[3rem] text-[#000] text-center font-[500]">
            Featured Units
          </h2>
          <div className="mt-[20px] flex gap-[40px] justify-center max-md:flex-col max-md:gap-[20px]">
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
          </div>

          <div className="flex justify-center mt-[50px] text-center max-md:mt-[25px]">
            <a
              className="flex items-center justify-center rounded-[10px] w-[260px] h-[51px] bg-[#B3282D] text-[1.6rem] text-[#fff] max-md:w-full"
              href="#"
            >
              Explore All
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
