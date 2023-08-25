import { Diamond, Desktop } from "../images";

function AboutUs() {
  return (
    <div className="container mt-16">
      <div className="lg:ml-20">
        <h4 className="text-thickLightBlue font-semibold">ABOUT US</h4>
        <h1 className="text-2xl font-semibold opacity-90 leading-8 text-black mt-4 mb-8">
          Experienced companies, new players or fericious startups
        </h1>
      </div>
      <div className="linear gap-8">
        <Options
          img={Diamond}
          name="WHY OPTAZONE"
          heading="You Design thinker and problem solvers,not code monkeys or ticket takers."
          text="Let Optazone help you conceive,design,build,ship and scale digital products.So you can solve real-world customer problems"
          reverse
        />
        <Options
          img={Desktop}
          name="HOW IT WORKS"
          heading="Your software engineering team has too many things on their plates right now."
          text="Let Optazone help you conceive,design,build,ship and scale digital products.So you can solve real-world customer problems"
        />
      </div>
    </div>
  );
}

const Options = ({ name, text, heading, img, reverse }) => {
  return (
    <>
      <div
        className={` flex-col-reverse linear rounded-b-3xl ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <div
          className={`rounded-b-3xl p-6 bg-white lg:w-[50%] ${
            reverse
              ? "lg:rounded-tr-3xl lg:rounded-br-3xl"
              : "lg:rounded-tl-3xl lg:rounded-bl-3xl"
          }`}
        >
          <h4 className="text-thickLightBlue font-semibold lg:mt-8">{name}</h4>
          <h1 className="text-xl font-semibold opacity-90 leading-8 text-black mt-2 mb-5 lg:text-2xl">
            {heading}
          </h1>
          <p className="wht-text text-black opacity-70 leading-8">{text}</p>
        </div>
        <div>
          <img
            src={img}
            alt="hero"
            className={`lg:w-[50%] ${
              reverse
                ? "lg:rounded-tl-3xl lg:rounded-bl-3xl"
                : "lg:rounded-tr-3xl lg:rounded-br-3xl"
            }`}
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
