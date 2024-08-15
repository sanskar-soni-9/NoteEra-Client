import Carousel from "../../../../components/Carousel/Carousel";
import Card from "./Card";
import styles from "./ServicesSection.module.css";

const ServicesSection = () => {
  return (
    <section
      className={`${styles.section} container d-flex flex-column gap-3 text-center mb-5`}
    >
      <header className="d-flex flex-column align-items-center gap-2 mb-3">
        <h1 className="text-center">What We Offer:</h1>
        <h2 className="text-center">
          Explore our resources for academic success!
        </h2>
      </header>
      <div className="mb-5">
        <Carousel
          activeSlideClasses={styles.activeSlide}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          loop
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            989: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          keyboard={{ enabled: true, onlyInViewport: true }}
        >
          <Card
            imgSrc="/Assets2/Premium-Modules/premium-modules-icon.png"
            imgAlt="Premium Modules icon"
            heading="Premium Modules"
            para="Detailed, Precise, PYQS  Integrated, IMP Questions, Simple Language"
            actionText="Explore Notes"
          />
          <Card
            imgSrc="/Assets2/Premium-Modules/book-icon.png"
            imgAlt="Blog Section icon"
            heading="Free Notes"
            para="Detailed, Precise, PYQS  Integrated, IMP Questions, Simple Language"
            actionText="Explore Notes"
          />
          <Card
            imgSrc="/Assets2/Premium-Modules/papers-icon.png"
            imgAlt="Video Section icon"
            heading="PYQs"
            para="Previous Year Question Papers : Mid Semester, End Semester."
            actionText="Explore PYQs"
          />
          {/* Fix for less number of slides; generally number of slides should be >= 2 * slidesPerView */}
          <Card
            imgSrc="/Assets2/Premium-Modules/premium-modules-icon.png"
            imgAlt="Premium Modules icon"
            heading="Premium Modules"
            para="Detailed, Precise, PYQS  Integrated, IMP Questions, Simple Language"
            actionText="Explore Notes"
          />
          <Card
            imgSrc="/Assets2/Premium-Modules/book-icon.png"
            imgAlt="Blog Section icon"
            heading="Free Notes"
            para="Detailed, Precise, PYQS  Integrated, IMP Questions, Simple Language"
            actionText="Explore Notes"
          />
          <Card
            imgSrc="/Assets2/Premium-Modules/papers-icon.png"
            imgAlt="Video Section icon"
            heading="PYQs"
            para="Previous Year Question Papers : Mid Semester, End Semester."
            actionText="Explore PYQs"
          />
        </Carousel>
      </div>
    </section>
  );
};

export default ServicesSection;
