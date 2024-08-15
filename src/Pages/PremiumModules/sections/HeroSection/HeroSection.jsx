import ActionButton from "../../components/ActionButton/ActionButton";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={`${styles.section}`}>
      <div className={`${styles.container} container`}>
        <div>
          <p className={`${styles.buy}`}>BUY</p>
          <p className={`${styles.buy}`}>BUY</p>
          <p className={`${styles.buy}`}>BUY</p>
          <p className={`${styles.buy}`}>BUY</p>
          <div className={`${styles.infoContainer}`}>
            <p>20% Off</p>
            <h2>
              EXAM SALES <br />
              Offer
            </h2>
            <ActionButton>Buy Now</ActionButton>
          </div>
        </div>
        <div className={`${styles.imgContainer}`}>
          <img src="/Assets2/Premium-Modules/hero1.png " alt="hero icon" />
          <div className={`${styles.card} ${styles.cardV} ${styles.viewsCard}`}>
            <img
              src="/Assets2/Premium-Modules/loading-icon.svg"
              alt="views icon"
            />
            <div>
              <p>200K+</p>
              <h3>Views</h3>
            </div>
          </div>
          <div className={`${styles.card} ${styles.usersCard}`}>
            <div className={`${styles.imgBgWrapper}`}>
              <img
                src="/Assets2/Premium-Modules/laptop-icon.svg"
                alt="laptop icon"
              />
            </div>
            <div>
              <p>5k Users</p>
              <h3>Active</h3>
            </div>
          </div>
          <div className={`${styles.card} ${styles.tutorsCard}`}>
            <div className={`${styles.imgBgWrapper}`}>
              <img
                src="/Assets2/Premium-Modules/tutor-icon.svg"
                alt="tutor icon"
              />
            </div>
            <div>
              <h3>Tutors</h3>
              <p>250+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
