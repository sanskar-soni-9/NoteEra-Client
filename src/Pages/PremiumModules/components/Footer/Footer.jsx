import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import CustomInput from "../../components/CustomInput/CustomInput";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div
        className={`${styles.wrapper} container d-flex flex-column gap-1 px-3`}
      >
        <div className={`${styles.mainContainer} d-flex mb-5`}>
          <div
            className={`${styles.footerSectionContainer} ${styles.footerImgSection} align-items-center`}
          >
            <img src="/Assets2/lightLogo.png" alt="Notes-Era Logo" />
            <div className="d-flex flex-column align-items-center gap-2 mt-2">
              <p>
                Where Quality Meets Knowledge : Unleashing the Premium Edge With
                Notes-Era
              </p>
            </div>
          </div>
          <div className={`${styles.footerSectionContainer}`}>
            <h1>Legal</h1>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms of Use</a>
            <a href="/">Refund & Cancellation Policy</a>
            <a href="/">Shipping Policy</a>
          </div>
          <div className={`${styles.footerSectionContainer}`}>
            <h1>Quick Links</h1>
            <a href="/">Premium Modules</a>
            <a href="/">Bag</a>
            <a href="/">Custom Module Request Form</a>
            <a href="/">Contact</a>
          </div>
          <div
            className={`${styles.footerSectionContainer} ${styles.subscribeContainer}`}
          >
            <h1>Subscribe Now !</h1>
            <p>
              "Subscribe for exclusive updates and premium content from
              Notes-Era. Elevate your learning experience!"
            </p>
            <CustomInput
              value={""}
              isValid={true}
              invalidText="Please enter a valid email."
              placeholder="Your Email address..."
              btnText="Join Now"
              handleChange={() => {}}
              handleSubmit={() => {}}
            />
          </div>
        </div>
        <div
          className={`${styles.copyrightContainer} d-flex justify-content-end align-items-end`}
        >
          <p>Copyright &copy; 2024 Notes-Era. All rights reserved.</p>
          <div className={`${styles.socialIcons} d-flex flex-column gap-2`}>
            <h2>Social Media Links</h2>
            <div className="d-flex justify-content-center gap-3">
              <a href="/">
                <FaTwitter />
              </a>
              <a href="/">
                <FaLinkedin />
              </a>
              <a href="/">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
