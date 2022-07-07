import EventItem from "./event-item";
import type { DUMMY_EVENTS_TYPE } from "../../dummy-data";
import classes from "./event-list.module.css";

const EventList: React.FC<{ items: DUMMY_EVENTS_TYPE }> = (props) => {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
};

export default EventList;