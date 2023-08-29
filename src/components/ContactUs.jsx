function ContactUs() {
  return (
    <section className="my-12 mx-4 md:my-20">
      <div
        className=" py-6 relative  md:max-w-[570px] my-0 mx-auto border-b rounded-xl"
        style={{ border: "2px solid #5CA3E2" }}
      >
        <div className="top-[-30px] absolute text-xl text-thickLightBlue px-4 tranf-center ">
          Contact us
        </div>

        <form action="" className="px-6 linear gap-4 my-6">
          <div className="linear gap-2">
            <label htmlFor="name" className="text-sm">
              Please enter your name
            </label>
            <input placeholder="Name" className="inputs" />
          </div>
          <div className="linear gap-2">
            <label htmlFor="email" className="text-sm">
              Please enter your email
            </label>
            <input placeholder="@yourgmail.com" className="inputs" />
          </div>
          <div className="linear gap-2">
            <label htmlFor="message" className="text-sm">
              Tell me about your project
            </label>
            <textarea
              name="message"
              id=""
              cols="20"
              rows="3"
              placeholder="I Need a site revamp..."
              className="inputs"
            ></textarea>
          </div>

          <div className="bg-white text-thickLightBlue font-semibold rounded-3xl flex-box absolute bottom-[-40px] tranf-center">
            <button className="py-2 px-10">Let's Talk</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
