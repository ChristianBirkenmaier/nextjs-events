import type { NextPage } from "next";
import { useRouter } from "next/router";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
import ErrorRedirect from "../../components/ui/error-redirect";
import { getEventById } from "../../dummy-data";

const EventDetailPage: NextPage = () => {
  const router = useRouter();
  const { eventid } = router.query;
  console.log(eventid);

  let event;
  if (eventid && typeof eventid === "string") {
    event = getEventById(eventid);
    if (!event) {
      return (
        <ErrorRedirect
          message="No event found"
          redirectMsg="Show All Events"
          redirect="/events"
        />
      );
    }
    return (
      <>
        <EventSummary title={event?.title} />
        <EventLogistics
          date={event?.date}
          address={event?.location}
          image={event?.image}
          imageAlt={event?.description}
        />

        <EventContent>
          <p>{event?.description}</p>
        </EventContent>
      </>
    );
  }
  return (
    <ErrorRedirect
      message="No event found"
      redirectMsg="Show All Events"
      redirect="/events"
    />
  );
};

export default EventDetailPage;
