import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // Import FullCalendar
import dayGridPlugin from '@fullcalendar/daygrid'; // Import the day grid plugin
import interactionPlugin from '@fullcalendar/interaction'; // Import interaction plugin
import './Calendar.css';

const Calendar = ({ events, onEventAdd }) => {
  const handleDateClick = (arg) => {
    const title = prompt('Enter event title:'); // Prompt for event title
    if (title) {
      const newEvent = { title, date: arg.dateStr };
      onEventAdd(newEvent); // Add the new event
    }
  };

  return (
    <div className="calendar">
      <h2>Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]} // Add plugins
        initialView="dayGridMonth" // Set the default view
        dateClick={handleDateClick} // Handle date clicks
        events={events} // Pass events to display
      />
    </div>
  );
};

export default Calendar;