import React from "react";
import { useSelector } from "react-redux";
import EventCard from "../components/Events/EventCard";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";

const EventsPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);
  console.log(allEvents);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={4} />
          {allEvents?.map((event, i) => (
            <EventCard active={true} data={allEvents && allEvents[i]} />
          ))}
        </div>
      )}
    </>
  );
};

export default EventsPage;
