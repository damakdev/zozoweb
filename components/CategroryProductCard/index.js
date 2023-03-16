import React from 'react'
import Link from 'next/link';

import { motion } from "framer-motion";
import { useCountdown } from '../../hooks/useCountdown';
import { useSelector } from 'react-redux';
import styles from "../../styles/categoryList.module.scss";
import { formatNumber, truncateString } from '../../utils';

function ProductCard({ product }) {
      const [days, hours, minutes, seconds] = useCountdown(
        product.bidding_events[0].start_time,
        product.bidding_events[0].end_time
      );
    
      const { user } = useSelector((state) => state.auth.customer);
      function eventHandler() {
        if (user) {
          return;
        }
        toast.warning("Login to continue!");
      }
    
      return (
        <Link
          href={user ? `/product/${product.bidding_events[0].id}` : "javascript:void(0)"}
          key={product.id}
        >
          <a onClick={eventHandler} className={styles.card}>
            <motion.img src={product.images.main} alt="" />
            <h3>{truncateString(product.name, 18)}</h3>
            {!product.bidding_events[0].ended && (
              <p>
                Ends in: {formatNumber(days)}:{formatNumber(hours)}:
                {formatNumber(minutes)}:{formatNumber(seconds)}
              </p>
            )}
            {product.bidding_events[0].ended && (
              <p style={{ color: "#cd3737" }}>Ended: 00:00:00:00</p>
            )}
            <span>&#8358;{formatNumber(product.bidding_events[0].last_amount)}</span>
            <b>Bid</b>
          </a>
        </Link>
      );
    }

export default ProductCard