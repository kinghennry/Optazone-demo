function ContactUs() {
  return (
    <section className="my-12 mx-4 md:my-20">
      <div
        className=" py-6 relative  md:max-w-[570px] my-0 mx-auto border-b rounded-xl"
        style={{ border: "2px solid #5CA3E2" }}
      >
        <div
          className="top-[0px] absolute text-2xl px-4 bg-backgr tranf-center "
          style={{
            backgroundColor: "white",
          }}
        >
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

// <div className="bg-darkBlue flex-box linear px-24 relative">
//   <h1 className="absolute top-[-14px] text-2xl bg-red-600 px-2">Contact us</h1>

//   <form action="" className="flex-box linear gap-5 mt-10">
//     <div className="linear">
//       <label htmlFor="name" className="text-sm">
//         Please enter your name
//       </label>
//       <input placeholder="Name" className="inputs" />
//     </div>

// <div className="linear">
//   <label htmlFor="email" className="text-sm">
//     Please enter your email
//   </label>
//   <input placeholder="yourgmail.com" className="inputs" />
// </div>

// <div className="linear mb-20">
//   <label htmlFor="message" className="text-sm">
//     Tell me about your project
//   </label>
//   <textarea
//     name="message"
//     id=""
//     cols="20"
//     rows="3"
//     placeholder="I Need a site revamp..."
//     className="bg-thickLightBlue placeholder:text-white text-lime-800 font-semibold rounded w-full text-sm p-4 "
//   ></textarea>
// </div>

//     <div className="bg-white text-thickLightBlue font-semibold rounded-3xl absolute bottom-[-21px]">
//       <button className="py-2 px-12 ">Let's Talk</button>
//     </div>
//   </form>
// </div>;
