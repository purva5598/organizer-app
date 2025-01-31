import React, { useState } from 'react';
import './EventTracker.css';

const EventForm = ({ addEvent }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent({ title, date, description });
    setTitle('');
    setDate('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <input
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <textarea
        placeholder="Event Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;