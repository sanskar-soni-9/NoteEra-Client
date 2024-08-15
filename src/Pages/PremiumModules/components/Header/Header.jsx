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
          <Nav location={location} />
          <div
            className={`${styles.menuBtn} ${isNavOpen ? styles.navOpen : ""}`}
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <div className={`${styles.menuBar} ${styles.menuBar1}`} />
            <div className={`${styles.menuBar} ${styles.menuBar2}`} />
            <div className={`${styles.menuBar} ${styles.menuBar3}`} />
          </div>
        </div>
        {isNavOpen ? (
          <nav className={`${styles.mobNav}`}>
            <Nav location={location} />
          </nav>
        ) : (
          ""
        )}
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

const Nav = ({ location }) => {
  return (
    <>
      <div className={`${styles.navLink}`}>
        <img
          src="/Assets2/Premium-Modules/handshake-icon.svg"
          alt="Collaborate icon"
        />
        <a href="/">Collaborate</a>
      </div>
      <div className={`${styles.navLink}`}>
        <img src="/Assets2/Premium-Modules/bag-icon.svg" alt="Bag icon" />

        <a href="/">Bag</a>
      </div>

      <PrimaryButton isLink href="https://razorpay.me/@notes-era">
        Log in / Sign up
      </PrimaryButton>
    </>
  );
};

export default Header;
