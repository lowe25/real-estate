const Footer = () => {
  return (
    <>
      <footer className="pl-[50px] pr-[50px] pt-[50px] pb-[50px] bg-[#b3282d] max-md:pl-[3%] max-md:pr-[3%]">
        <div className="max-width">
          <div className="flex justify-between flex-wrap max-md:gap-[30px]">
            <div>
              <h2 className="text-[3rem] text-[#fff] font-[600]">Acme Homes</h2>
              <span className="text-[1.6rem] text-[#fff]">
                Relive your best travels from around the world in <br />z the
                comforts of your own home with Acme thematic properties.
              </span>
              <div>
                <div className="mt-[10px] flex gap-[15px] items-center">
                  <img
                    className="w-[25px] h-[25px]"
                    src="/icons/facebook.svg"
                    alt="Facebook Icon"
                  />
                  <img
                    className="w-[25px] h-[25px]"
                    src="/icons/linkedin.svg"
                    alt="Linkedin Icon"
                  />
                  <img
                    className="w-[25px] h-[25px]"
                    src="/icons/instagram.svg"
                    alt="Instagram Icon"
                  />
                  <img
                    className="w-[25px] h-[25px]"
                    src="/icons/youtube.svg"
                    alt="Youtube Icon"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-[20px] max-md:flex-col max-md:gap-[10px]">
              <div>
                <span className="text-[1.8rem] text-[#fff] font-[700]">
                  Site Navigation
                </span>
                <ul>
                  <li>
                    <a className="text-[1.6rem] text-[#fff]" href="#">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="text-[1.6rem] text-[#fff]" href="#">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="text-[1.6rem] text-[#fff]" href="#">
                      Models
                    </a>
                  </li>
                  <li>
                    <a className="text-[1.6rem] text-[#fff]" href="#">
                      About Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex flex-col">
                  <span className="text-[1.8rem] text-[#fff] font-[700]">
                    Main Office
                  </span>
                  <span className="text-[1.6rem] text-[#fff]">
                    4677 Brookmere Road
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[1.8rem] text-[#fff] font-[700]">
                    Sales:
                  </span>
                  <span className="text-[1.6rem] text-[#fff]">
                    johndoe@gmail.com
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[1.8rem] text-[#fff] font-[700]">
                    Customer Care:
                  </span>
                  <span className="text-[1.6rem] text-[#fff]">09123456789</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
