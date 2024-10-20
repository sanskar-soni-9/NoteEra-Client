import Carousel from "../../../../components/Carousel/Carousel";
import ReviewCard from "./ReviewCard";
import styles from "./TestimonialSection.module.css";
import reviews from "./reviews";

const TestimonialSection = () => {
  return (
    <section className={`${styles.section}`}>
      <div className="container d-flex flex-column gap-2">
        <h1>Testimonials</h1>
        <h2>What Our Student Says</h2>
        <p>
          Discover inspiration and insights from recent reviews by those who
          have purchased Notes-Era Premium Notes Modules. Their success stories
          reflect the transformative journey of learning and growth with
          Notes-Era.
        </p>
        <div className={`${styles.carouselContainer} mt-5`}></div>
      </div>
    </section>
  );
};

export default TestimonialSection;
