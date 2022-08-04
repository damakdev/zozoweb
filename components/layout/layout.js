import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { _getAllCategories } from "../../store/slices/categoriesSlice";
import { _getApprovedBiddingEvents, _getBiddingEventByStatus } from "../../store/slices/eventsSlice";
import { _getCurrentUser } from "../../store/slices/userSlice";
import styles from "./layout.module.scss";

export default function Layout({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(_getApprovedBiddingEvents());
    dispatch(_getBiddingEventByStatus());
    dispatch(_getAllCategories());
    dispatch(_getCurrentUser());
  }, []);
  return <div className={styles.container}>{children}</div>;
}
