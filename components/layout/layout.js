import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { _getAllCategories } from "../../store/slices/categoriesSlice";
import { _getApprovedBiddingEvents } from "../../store/slices/eventsSlice";
import styles from "./layout.module.scss";

export default function Layout({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(_getApprovedBiddingEvents());
    dispatch(_getAllCategories());
  }, []);
  return <div className={styles.container}>{children}</div>;
}
