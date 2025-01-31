import React, { useState } from 'react';
import EventForm from './EventForm';
import './EventTracker.css';

const EventTracker = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  return (
    <div className="event-tracker">
      <h2>Event Tracker</h2>
      <EventForm addEvent={addEvent} />
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.title}</strong> - {event.date} - {event.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventTracker;