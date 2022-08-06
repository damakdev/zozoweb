import {
  HeadPhoneIcon,
  GavelIcon,
  StarIcon,
  ControllerIcon,
} from "../../public/svg/icons";
import styles from "./options-banner.module.scss";

export default function OptionsBanner() {
  return (
    <section className={styles.container}>
      <div>
        <HeadPhoneIcon />
        24/7 customer care
      </div>
      <div>
        <GavelIcon />
        All new exciting auction
      </div>
      <div>
        <StarIcon />
        Special offers
      </div>
      <div>
        <ControllerIcon />
        Fun game
      </div>
    </section>
  );
}
