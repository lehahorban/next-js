import styles from "../styles/Footer.module.scss";
import Heading from "./Heading";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Heading tag="h3" text="Footer webDev" />
    </footer>
  );
};

export default Footer;
