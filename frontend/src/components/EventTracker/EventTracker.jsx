import React, { useState } from 'react';
import axios from 'axios';
import EventForm from './EventForm';
import './EventTracker.css';

const EventTracker = ({ events, addEvent, token }) => {
  const handleAddEvent = async (event) => {
    try {
      const res = await axios.post(
        'http://localhost:5000/api/events',
        event,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      addEvent(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="event-tracker">
      <h2>Event Tracker</h2>
      <EventForm addEvent={handleAddEvent} />
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            <strong>{event.title}</strong> - {event.date} - {event.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventTracker;