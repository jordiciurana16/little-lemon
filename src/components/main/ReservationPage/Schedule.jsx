import React from "react";
import './ReservationPage.css';

// Define the restaurant's opening hours for each day
const openingHours = {
  Monday: '11:00 AM - 9:00 PM',
  Tuesday: '11:00 AM - 9:00 PM',
  Wednesday: '11:00 AM - 9:00 PM',
  Thursday: '11:00 AM - 9:00 PM',
  Friday: '11:00 AM - 10:00 PM',
  Sunday: '11:00 AM - 10:00 PM',
  Saturday: '11:00 AM - 10:00 PM',
};

// Define holiday days
const holidays = {
    January: [1,],
    February: [14,15],
    March: [7,14,21],
    April: [1,4],
    May: [7,21],
    June: [7,14,21],
    July: [4,5,],
    August: [7],
    September: [20,21],
    October: [14],
    November: [7,14],
    December: [25,31], 
};

function ScheduleSection() {
  return (
    <section className="content-padding pt-4 pb-4">
      <div className="container">
        <div className="row">
        <h2 className="mb-3 title">Schedule</h2>
          <div className="col-md-6">
            <h5 className="mb-4">Our Week Working Hours</h5>
            <div >
              <ul className="border ps-4 pt-3 schedule pb-2 rounded list-unstyled me-5">
                {Object.keys(openingHours).map((day) => (
                  <li key={day} className="mb-3">
                    <strong>{day}:</strong> {openingHours[day]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <h5 className="mb-4">Our Holidays</h5>
            <div >
              <ul className="ps-4 pt-3 rounded border schedule pb-2 list-unstyled me-5">
                {Object.keys(holidays).map((month) => (
                  <li key={month} className="mb-2">
                    <strong>{month}: </strong> {holidays[month].join(", ")}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScheduleSection;
