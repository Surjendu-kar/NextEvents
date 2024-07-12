import EventList from "@/components/event/event-list";
import { getAllEvents } from "@/dummy-data";

function AllEventsPage() {
  const events = getAllEvents();
  return (
    <div>
      <EventList items={events} />
    </div>
  );
}

export default AllEventsPage;
