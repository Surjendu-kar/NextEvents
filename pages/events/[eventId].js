import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";

function EventDetailsPage() {
  const router = useRouter();
  const getEvents = getEventById(router.query.eventId);
  console.log(getEvents);
  return <div>Event Detail</div>;
}

export default EventDetailsPage;
