import { Grid_one, Grid_two, Grid_three, Grid_four } from "../images";

function Gridbox() {
  return (
    <section>
      <div className="container py-12">
        <div className="md:w-[70%] lg:w-[50%] linear">
          <h1 className="text-xl font-semibold opacity-90 leading-8 text-black mt-2 mb-5">
            The Technology stack you use doesn't matter(so much).
            <br />
            Here's what matters.
          </h1>
          <p className="wht-text text-black opacity-70 leading-8">
            Let Devwork help you conceive,design,build,ship and scale digital
            products. So you can solve real-world customer problems.{" "}
          </p>
        </div>

        <div className="grid mt-12 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <GridItem
            img={Grid_one}
            text="We use tech to help  solve real business problem."
          />
          <GridItem
            img={Grid_two}
            text="We've helped six and seven figure businesses growth."
          />
          <GridItem
            img={Grid_three}
            text="Transform the way they build & scale digital products."
          />
          <GridItem
            img={Grid_four}
            text="We design with hearth and develop with intelligence."
          />
        </div>
      </div>
    </section>
  );
}

const GridItem = ({ text, img }) => {
  return (
    <div className="flex-col-reverse linear">
      <div className="bg-white p-4 rounded-b-3xl">
        <p className="wht-text text-black opacity-70 leading-8">{text}</p>
      </div>
      <div className="">
        <img src={img} alt="hero" className="rounded-t-3xl" />
      </div>
    </div>
  );
};

export default Gridbox;
