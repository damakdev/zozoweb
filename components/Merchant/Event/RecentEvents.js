import { motion } from "framer-motion";
import Table from "../../Table/Table";

function RecentEvents({ data }) {
  const thead = [
    "Event name",
    "Start date",
    "End date",
    "Bid price",
    "No of visits",
    "Status",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
      <Table thead={thead} data={data} name="event" />
    </motion.div>
  );
}

export default RecentEvents;
