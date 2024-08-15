import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import styles from "./CustomModulesSection.module.css";

const CustomModulesSection = () => {
  return (
    <section className={`${styles.section}`}>
      <div
        className={`${styles.container} container d-flex align-items-end justify-content-between`}
      >
        <div
          className={`${styles.textContainer} d-flex flex-column align-items-start gap-2`}
        >
          <p>
            <span>“Your College, Your Syllabus : Customised Module”</span>
          </p>
          <h3>Custom Modules For Your College</h3>
          <p className="mb-4">
            <span>Facing problem</span> in college not getting{" "}
            <span>proper notes</span> and study material? Send us a{" "}
            <span>module request,</span>
            and we will prepare module for your college
          </p>
          <PrimaryButton isLink href="/" isLight>
            Module Requets Form!
          </PrimaryButton>
        </div>
        <div className={`${styles.imgContainer}`}>
          <img
            src="/Assets2/Premium-Modules/custom-modules.png"
            alt="custom modules asset"
            width={214}
            height={211}
          />
        </div>
      </div>
    </section>
  );
};

export default CustomModulesSection;
