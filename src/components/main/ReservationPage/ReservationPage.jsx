import React from "react";
import ScheduleSection from "./Schedule";
import './ReservationPage.css';

function ReservationPage() {
  return (
    <>
      <section className="content-padding reservation-form pt-4 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-12"> {/* Adjust column widths based on screen size */}
              <h2 className="mb-3 title yellow">Book a Table</h2>
              <form>
                <div className="pb-3">
                  <input type="date" className="form-control" id="reservation-date" required placeholder="YYYY-MM-DD" />
                </div>
                <div className="pb-3">
                  <input type="time" className="form-control" id="reservation-time" required placeholder="HH:MM AM/PM" />
                </div>
                <div className="pb-3">
                  <input type="number" className="form-control" id="party-size" min="1" required placeholder="Enter party size" />
                </div>
                <div className="text-center">
                  <button type="submit" className="button-primary">Book Now</button>
                </div>
              </form>
            </div>
            <div className="col-lg-7 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
              <div className="schedule rounded border pt-3 pb-1 px-3">
                <p className="text-center">Do you prefer to book a table by phone?</p>
                <p className="text-center">Call 945 567 332 for direct contact.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScheduleSection />
    </>
  );
}

export default ReservationPage;
