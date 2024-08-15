import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import styles from "./JoinSection.module.css";

const JoinSection = () => {
  return (
    <section className={`${styles.section}`}>
      <div className={`${styles.container} container d-flex `}>
        <div
          className={`${styles.imgContainer} d-flex align-items-end justify-content-end`}
        >
          <img
            src="/Assets2/Premium-Modules/join-team.png"
            alt="join team asset"
            width={150}
            height={190}
          />
        </div>
        <div
          className={`${styles.textContainer} d-flex flex-column gap-4 text-center align-items-center`}
        >
          <h3>Join Our Team!</h3>
          <h4>Contribute And Be A Part of This Era</h4>
          <PrimaryButton isLight isLink href="/">
            <p className={`${styles.btnText}`}>Register Now!</p>
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
