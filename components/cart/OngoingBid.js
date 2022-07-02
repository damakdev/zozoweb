
import styles from "../../styles/cart.module.scss";


const OngoingBid = () => {
    return (
      <div className={`${styles.ob_container} `}>
       <p className="justify-center">You currently have no ongoing Bids</p>
      </div>
    )
  }

  export default OngoingBid