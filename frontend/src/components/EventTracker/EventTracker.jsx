import React, { useState } from 'react';
import axios from 'axios';
import EventForm from './EventForm';
import './EventTracker.css';

const EventTracker = ({ events, addEvent, isGuest }) => {
  const handleAddEvent = (event) => {
    if (isGuest) {
      // Add event locally for guest
      addEvent(event);
    } else {
      // Add event in the backend for authenticated users
      const addEventBackend = async () => {
        try {
          const res = await axios.post(
            'https://organizer-app-ru2o.onrender.com/api/events',
            event,
            { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
          );
          addEvent(res.data);
        } catch (err) {
          console.error(err);
        }
      };
      addEventBackend();
    }
  };

  return (
    <div className="event-tracker">
      <h2>Event Tracker</h2>
      <EventForm addEvent={handleAddEvent} />
      <ul>
        {events.map((event) => (
          <li key={event.id || event._id}>
            <strong>{event.title}</strong> - {event.date} - {event.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventTracker;