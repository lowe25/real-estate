import Banner from "../components/Banner";
import WebpImage from "../components/WebP";

const About = () => {
  return (
    <>
      <Banner
        webpSrc={"/banner/about-banner.webp"}
        fallbackSrc={"/banner/about-banner.jpg"}
        alt="About Banner"
        bannerTxt="About Us"
        pageName="About Us"
      />
      <div className="bg-[#fdf6ec]">
        <section className="pl-[50px] pr-[50px] pt-[30px] pb-[30px] max-md:pl-[3%] max-md:pr-[3%]">
          <div className="max-width">
            <div className="flex gap-[20px] items-center max-md:flex-col">
              <div className="w-[600px] max-md:w-full">
                <h3 className="text-[2rem] font-[600] max-md:text-[16px]">
                  Mission
                </h3>
                <span className="text-[1.6rem]">
                  At Acme Homes, our mission is to help individuals and families
                  find homes that match their dreams, lifestyle, and budget. We
                  are committed to delivering a seamless and personalized real
                  estate experience — from discovery to move-in — built on
                  trust, innovation, and exceptional service.
                </span>
              </div>
              <WebpImage
                webpSrc={"/top/house-intro.webp"}
                fallbackSrc={"/top/house-intro.jpg"}
                alt="House Introduction"
                className="w-[600px] h-[200px] object-cover object-center rounded-lg shadow-lg max-md:w-full max-md:h-auto"
              />
            </div>

            <div className="mt-[50px] flex gap-[20px] items-center max-md:flex-col max-md:mt-[20px]">
              <WebpImage
                webpSrc={"/top/house-intro.webp"}
                fallbackSrc={"/top/house-intro.jpg"}
                alt="House Introduction"
                className="w-[600px] h-[200px] object-cover object-center rounded-lg shadow-lg max-md:w-full max-md:h-auto"
              />
              <div className="w-[600px] max-md:w-full">
                <h3 className="text-[2rem] font-[600] max-md:text-[16px]">
                  Vision
                </h3>
                <span className="text-[1.6rem]">
                  Our vision is to become a trusted leader in real estate by
                  redefining the home-buying journey. We aim to empower our
                  clients with modern tools, expert guidance, and a curated
                  portfolio of quality properties — making homeownership
                  accessible, inspiring, and rewarding for all.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="pl-[50px] pr-[50px] max-md:pl-[3%] max-md:pr-[3%]">
          <div className="max-width">
            <h2 className="text-[2rem] font-[600] max-md:text-[18px]">
              Amenities
            </h2>
            <div className="mt-[20px] grid grid-cols-3 gap-[20px] max-md:grid-cols-1">
              <div className="relative">
                <WebpImage
                  webpSrc={"/about/basketball-court.webp"}
                  fallbackSrc={"/about/basketball-court.jpg"}
                  alt="Basketball Court"
                  className="w-[600px] h-[200px] object-cover object-center rounded-lg shadow-lg max-md:w-full max-md:h-auto"
                />
                <span className="w-full text-center block text-[#fff] absolute bg-[#000] opacity-60 z-0 bottom-0 left-1/2 transform -translate-x-1/2 text-[1.6rem]">
                  Basketball Court
                </span>
              </div>
              <div>
                <div className="relative">
                  <WebpImage
                    webpSrc={"/about/clubhouse.webp"}
                    fallbackSrc={"/about/clubhouse.jpg"}
                    alt="Cludhouse"
                    className="w-[600px] h-[200px] object-cover object-center rounded-lg shadow-lg max-md:w-full max-md:h-auto"
                  />
                  <span className="w-full text-center block text-[#fff] absolute bg-[#000] opacity-60 z-0 bottom-0 left-1/2 transform -translate-x-1/2 text-[1.6rem]">
                    Clubhouse
                  </span>
                </div>
              </div>
              <div>
                <div className="relative">
                  <WebpImage
                    webpSrc={"/about/playground.webp"}
                    fallbackSrc={"/about/playground.jpg"}
                    alt="Playground"
                    className="w-[600px] h-[200px] object-cover object-center rounded-lg shadow-lg max-md:w-full max-md:h-auto"
                  />
                  <span className="w-full text-center block text-[#fff] absolute bg-[#000] opacity-60 z-0 bottom-0 left-1/2 transform -translate-x-1/2 text-[1.6rem]">
                    Playground
                  </span>
                </div>
              </div>
              <div>
                <div className="relative">
                  <WebpImage
                    webpSrc={"/about/swimming-pool.webp"}
                    fallbackSrc={"/about/swimming-pool.jpg"}
                    alt="Swimming Pool"
                    className="w-[600px] h-[200px] object-cover object-center rounded-lg shadow-lg max-md:w-full max-md:h-auto"
                  />
                  <span className="w-full text-center block text-[#fff] absolute bg-[#000] opacity-60 z-0 bottom-0 left-1/2 transform -translate-x-1/2 text-[1.6rem]">
                    Swimming Pool
                  </span>
                </div>
              </div>
              <div>
                <div className="relative">
                  <WebpImage
                    webpSrc={"/about/tennis-court.webp"}
                    fallbackSrc={"/about/tennis-court.jpg"}
                    alt="Tennis Court"
                    className="w-[600px] h-[200px] object-cover object-center rounded-lg shadow-lg max-md:w-full max-md:h-auto"
                  />
                  <span className="w-full text-center block text-[#fff] absolute bg-[#000] opacity-60 z-0 bottom-0 left-1/2 transform -translate-x-1/2 text-[1.6rem]">
                    Tennis Court
                  </span>
                </div>
              </div>
              <div>
                <div className="relative">
                  <WebpImage
                    webpSrc={"/about/gym.webp"}
                    fallbackSrc={"/about/gym.jpg"}
                    alt="Gym"
                    className="w-[600px] h-[200px] object-cover object-center rounded-lg shadow-lg max-md:w-full max-md:h-auto"
                  />
                  <span className="w-full text-center block text-[#fff] absolute bg-[#000] opacity-60 z-0 bottom-0 left-1/2 transform -translate-x-1/2 text-[1.6rem]">
                    Gym
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pl-[50px] pr-[50px] pt-[30px] pb-[50px] max-md:pl-[3%] max-md:pr-[3%]">
          <div className="max-width">
            <h2 className="text-[2rem] font-[600] max-md:text-[18px]">
              Location Map
            </h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.1803435016127!2d-117.2390794237955!3d34.039244718415596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcabc467780c25%3A0xd6b7ef65fd383210!2sBrookmere%20Ave%2C%20Loma%20Linda%2C%20CA%2092354%2C%20USA!5e0!3m2!1sen!2sph!4v1750229144214!5m2!1sen!2sph"
              className="mt-[15px] w-full h-[450px] max-md:w-full max-md:h-auto"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
