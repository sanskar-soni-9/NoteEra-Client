import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import closeIcon from "../../../../assets/closeIcon.svg";
import styles from "./Header.module.css";

const Header = () => {
  const [isHeaderAtTop, setIsHeaderAtTop] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCommPrompt, setIsCommPrompt] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const setScrollPosition = () => {
      const { scrollY } = window;
      if (scrollY <= 10) setIsHeaderAtTop(true);
      else setIsHeaderAtTop(false);
    };
    setScrollPosition();
    window.addEventListener("scroll", setScrollPosition);
    return () => {
      window.removeEventListener("scroll", setScrollPosition);
    };
  }, []);

  useEffect(() => {
    const closeNavOnLg = () => {
      if (window.innerWidth >= 990) setIsNavOpen(false);
    };
    window.addEventListener("resize", closeNavOnLg);
    return () => {
      window.removeEventListener("resize", closeNavOnLg);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${
        isHeaderAtTop && !isNavOpen ? styles.transparentHeader : ""
      }`}
    >
      {isCommPrompt ? (
        <JoinCommPrompt closePrompt={() => setIsCommPrompt(false)} />
      ) : (
        ""
      )}
      <div className={`${styles.wrapper} container d-flex flex-column`}>
        <div className="">
          <div className={`${styles.imgContainer}`}>
            <a href="/">
              <img src="/Assets2/newLogo.png" alt="NotesEra logo" />
            </a>
          </div>
          {isNavOpen ? (
            <Nav
              location={location}
              isMobNav
              isNavOpen={isNavOpen}
              setIsNavOpen={setIsNavOpen}
            />
          ) : (
            <Nav location={location} />
          )}{" "}
          <div
            className={`${styles.menuBtn} ${isNavOpen ? styles.navOpen : ""}`}
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <img
              src="/assets/images/icon/icon_hamburger.svg"
              alt="hamburger icon"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

const JoinCommPrompt = ({ closePrompt }) => {
  return (
    <div className={`${styles.joinPrompt}`}>
      <SecondaryButton isLink={true}>Join Our Community!</SecondaryButton>
      <img src={closeIcon} alt="close icon" onClick={closePrompt} />
    </div>
  );
};

const Nav = ({ location, isNavOpen, setIsNavOpen, isMobNav = false }) => {
  return isMobNav ? (
    <nav className={`${styles.nav} ${styles.mobNav}`}>
      <div className={`${styles.navLink}`}>
        <img
          src="/Assets2/Premium-Modules/handshake-icon.svg"
          alt="Collaborate icon"
          width={20}
        />
        <a href="/">Collaborate</a>
      </div>
      <div className={`${styles.navLink}`}>
        <img
          src="/Assets2/Premium-Modules/bag-icon.svg"
          alt="Bag icon"
          width={15}
          className="me-1"
        />
        <a href="/">Bag</a>
      </div>

      <div className={styles.navActionBtn}>
        <PrimaryButton isLink href="https://razorpay.me/@notes-era">
          Log in / Sign up
        </PrimaryButton>
        <div
          className={`${styles.menuBtn} ${isNavOpen ? styles.navOpen : ""}`}
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <img
            src="/assets/images/icon/icon_hamburger.svg"
            alt="hamburger icon"
          />
        </div>
      </div>
    </nav>
  ) : (
    <nav className={`${styles.nav}`}>
      <div className={`${styles.navLink}`}>
        <img
          src="/Assets2/Premium-Modules/handshake-icon.svg"
          alt="Collaborate icon"
          width={20}
        />
        <a href="/">Collaborate</a>
      </div>
      <div className={`${styles.navLink}`}>
        <img
          src="/Assets2/Premium-Modules/bag-icon.svg"
          alt="Bag icon"
          width={15}
          className="me-1"
        />
        <a href="/">Bag</a>
      </div>

      <div className={styles.navActionBtn}>
        <PrimaryButton isLink href="https://razorpay.me/@notes-era">
          Log in / Sign up
        </PrimaryButton>
      </div>
    </nav>
  );
};

export default Header;
