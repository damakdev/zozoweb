import {
  HeadPhoneIcon,
  GavelIcon,
  StarIcon,
  ControllerIcon,
} from "../../public/svg/icons";
import useWindowDimension from "../../hooks/useWindowDimension";
import styles from "./options-banner.module.scss";

export default function OptionsBanner() {
  const { width } = useWindowDimension();

  return (
    <section className={styles.container}>
      <div>
        <HeadPhoneIcon />
        24/7 customer care
      </div>
      <div>
        <GavelIcon />
        All new exciting auctions
      </div>
      {width >= 480 && (
        <div>
          <StarIcon />
          Special offers
        </div>
      )}
      {width >= 600 && (
        <div>
          <ControllerIcon />
          Fun games
        </div>
      )}
    </section>
  );
}
