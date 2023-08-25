import { hero } from "../images";

function Hero() {
  return (
    <div className="container">
      <section className="flex-col-reverse bg-white rounded-3xl linear my-8 lg:flex-row">
        <div className=" p-6 lg:w-[50%]">
          <div className="lg:w-[90%] lg:mt-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold opacity-80 lg:leading-[60px]">
              A Team of product engineers that helps you&nbsp;
              <span className="text-thickLightBlue">shape ideas</span>
            </h1>
            <p className="wht-text text-black opacity-70 pt-3 pb-7 lg:text-xl">
              not just take orders
            </p>
            <div className="flex-box md:block lg:w-[50%]">
              <button className="bg-green text-lime-800 font-semibold rounded w-full text-sm mb-4 py-2 lg:py-4">
                TALK WITH US
              </button>
            </div>
          </div>
        </div>
        <div>
          <img
            src={hero}
            alt="hero"
            className="rounded-t-3xl lg:rounded-none"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
