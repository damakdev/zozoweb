import React from "react";
import Table from "../../Table/Table";
function EndedEvents({ data }) {
  const thead = [
    "Event name",
    "Start date",
    "End date",
    "Bid price",
    "No of visits",
    "Status",
  ];

  return (
    <>
      <Table thead={thead} data={data} name="event" />
    </>
  );
}

export default EndedEvents;
