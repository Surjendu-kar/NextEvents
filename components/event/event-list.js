import EventItem from "./event-item";
import classes from "./event-list.module.css";

function EventList(props) {
  const { items } = props; //instead of using props.items
  return (
    <ul className={classes.list}>
      {items.map((each) => (
        <EventItem
          key={each.id}
          id={each.id}
          title={each.title}
          location={each.location}
          date={each.date}
          image={each.image}
        />
      ))}
    </ul>
  );
}

export default EventList;
