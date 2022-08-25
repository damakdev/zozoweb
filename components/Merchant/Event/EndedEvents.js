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

  const endedEvents = data?.filter((event) => event.ended);

  return (
    <>
      <Table thead={thead} data={endedEvents} name="event" />
    </>
  );
}

export default EndedEvents;
