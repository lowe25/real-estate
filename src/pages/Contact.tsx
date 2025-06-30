import { useForm, SubmitHandler } from "react-hook-form";

import Banner from "../components/Banner";

type Inputs = {
  example: string;
  exampleRequired: string;
  inquiry: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  msg: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <>
      <Banner
        webpSrc={"/banner/about-banner.webp"}
        fallbackSrc={"/banner/about-banner.jpg"}
        alt="About Banner"
        bannerTxt="Contact Us"
        pageName="Contact Us"
      />
      <section className="bg-[#fdf6ec] pt-[50px] pb-[50px] max-md:pt-[25px]">
        <div className="max-width">
          <h2 className="block pl-[50px] pr-[50px] max-md:pl-[3%] max-md:pr-[3%] text-[3rem] max-md:text-[20px]">
            Interested? Inquire with us now
          </h2>
          <div className="flex gap-[20px] justify-between mt-[20px] pl-[50px] pr-[50px] pb-[50px] max-md:pl-[3%] max-md:pr-[3%] max-md:flex-col max-md:mt-[15px]">
            <div className="w-full">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <div className="mb-[20px] flex flex-col">
                    <span className="text-[1.2rem] font-bold">
                      Inquiry Type:
                    </span>
                    <select
                      {...register("inquiry", { required: true })}
                      className="mt-[5px] h-[35px] w-full border-1 rounded-lg"
                    >
                      <option value="sales">Sales Inquiry</option>
                      <option value="rental">Rental</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                  <div className="mb-[20px] flex gap-[15px] max-md:flex-col">
                    <div className="flex flex-col w-full">
                      <span className="text-[1.2rem] font-bold">
                        First Name:
                      </span>
                      <input
                        {...register("firstName", {
                          required: true,
                        })}
                        className="mt-[5px] p-[10px] h-[35px] border-1 rounded-lg"
                        type="text"
                      />
                      {errors.firstName && (
                        <p className="block mt-[5px] text-[1.3rem] text-[#ff0f0f]">
                          This field is required
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col w-full">
                      <span className="text-[1.2rem] font-bold">
                        Last Name:
                      </span>
                      <input
                        {...register("lastName", { required: true })}
                        className="mt-[5px] p-[10px] h-[35px] border-1 rounded-lg"
                        type="text"
                      />
                      {errors.lastName && (
                        <p className="block mt-[5px] text-[1.3rem] text-[#ff0f0f]">
                          This field is required
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mb-[20px] flex gap-[15px] max-md:flex-col">
                    <div className="flex flex-col w-full">
                      <span className="text-[1.2rem] font-bold">Email:</span>
                      <input
                        {...register("email", { required: true })}
                        className="mt-[5px] p-[10px] h-[35px] border-1 rounded-lg"
                        type="text"
                      />
                      {errors.email && (
                        <p className="block mt-[5px] text-[1.3rem] text-[#ff0f0f]">
                          This field is required
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col w-full">
                      <span className="text-[1.2rem] font-bold">Phone:</span>
                      <input
                        {...register("phone", { required: true })}
                        className="mt-[5px] p-[10px] h-[35px] border-1 rounded-lg"
                        type="text"
                      />
                      {errors.phone && (
                        <p className="block mt-[5px] text-[1.3rem] text-[#ff0f0f]">
                          This field is required
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <span className="text-[1.2rem] font-bold">Message:</span>
                    <textarea
                      {...register("msg", { required: true })}
                      className="mt-[5px] p-[10px] border-1 rounded-lg w-full h-[200px]"
                    ></textarea>
                    {errors.msg && (
                      <p className="block mt-[5px] text-[1.3rem] text-[#ff0f0f]">
                        This field is required
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-[30px]">
                  <input
                    className="bg-[#b3282d] rounded-lg text-[#fff] text-[1.6rem] w-full h-[50px] max-md:text-[13px]"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </form>
            </div>

            <div className="w-full">
              <dl className="flex flex-col gap-[10px]">
                <dt className="text-[2rem] font-bold max-md:text-[18px]">
                  Address:
                </dt>
                <dd className="text-[1.6rem]  max-md:text-[13px]">
                  4677 Brookmere Road
                </dd>
                <dt className="text-[2rem] font-bold max-md:text-[18px]">
                  Contact:
                </dt>
                <dd className="text-[1.6rem]  max-md:text-[13px]">
                  09123456789
                </dd>
                <dt className="text-[2rem] font-bold max-md:text-[18px]">
                  Map:
                </dt>
                <dd className="text-[1.6rem] max-md:text-[13px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.1803435016127!2d-117.2390794237955!3d34.039244718415596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcabc467780c25%3A0xd6b7ef65fd383210!2sBrookmere%20Ave%2C%20Loma%20Linda%2C%20CA%2092354%2C%20USA!5e0!3m2!1sen!2sph!4v1750229144214!5m2!1sen!2sph"
                    className="mt-[15px] w-full h-[450px] max-md:w-full max-md:h-auto"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
