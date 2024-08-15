import styles from "./SecondaryButton.module.css";

const SecondaryButton = ({
  isLink = false,
  href = "/",
  children,
  handleClick = () => {},
}) => {
  return isLink ? (
    <a className={`${styles.btn}`} href={href}>
      {children}
    </a>
  ) : (
    <button className={`${styles.btn}`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default SecondaryButton;
