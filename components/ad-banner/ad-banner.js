import styles from "./ad-banner.module.scss";

export default function AdBanner() {
  return (
    <div className={styles.container}>
      <h3>
        Save on your next purchase, check out our special offers🎁
        {/* <span>Zozo Hide and Seek Playoff →</span> */}
      </h3>
    </div>
  );
}
