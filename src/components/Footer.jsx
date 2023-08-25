import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import flag from "./nigeria.svg";
import footer_logo from "./footer_logo.svg";

function Footer() {
  return (
    <footer className="bg-black md:py-6">
      <div className="rounded-md container">
        <div className="linear wht-text font-normal text-xs gap-10 md:flex-row md:gap-15 lg:gap-48">
          <section className="linear gap-4">
            <Link to="/" className="mt-4 md:mt-[-12px]">
              <div>
                <img src={footer_logo} alt="footer_logo" className="w-[90px]" />
              </div>
            </Link>
            <div className="linear gap-2 md:leading-5">
              <p className="flex">
                <span>&#169; {new Date().getFullYear()}.&nbsp;Made in</span>{" "}
                &nbsp;
                <img style={{ width: "20px" }} src={flag} alt="nigeria" />{" "}
                &nbsp;
              </p>
              <p>Terms of Service & Privacy Policy</p>
            </div>
          </section>

          <section className="linear gap-10 pb-6 md:flex-row md:gap-16">
            <div className="flex gap-4 md:gap-10">
              <div className="linear gap-2 md:leading-5">
                <h5>Contact Us</h5>
                <h5>+234 801 234 1234</h5>
                <h5>+234 801 234 1234</h5>
                <h5>optazone@gmail.com</h5>
              </div>
              <div className="linear gap-2 md:leading-5">
                <Link to="/contact" className="hover:text-[#8ec645]">
                  Contact
                </Link>
                <Link to="/" className="hover:text-[#8ec645]">
                  Home
                </Link>
              </div>
            </div>

            <div className="linear">
              <h5 className="wht-text">Follow Us</h5>

              <div className="flex gap-8 mt-4 md:mt-3">
                <a
                  target="_blank"
                  href="https://www.linkedin.com"
                  rel="noreferrer"
                >
                  <span>
                    <FaTwitter className="text-lg text-thickLightBlue hover:text-[#8ec645]" />
                  </span>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com"
                  rel="noreferrer"
                >
                  <span>
                    <FaLinkedin className="text-lg text-thickLightBlue hover:text-[#8ec645]" />
                  </span>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com"
                  rel="noreferrer"
                >
                  <span>
                    <FaGithub className="text-lg text-thickLightBlue hover:text-[#8ec645]" />
                  </span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
