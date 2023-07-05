import React from "react";

function Card({ proposalToView }) {
  return (
    <div className="proposal-dec-card">
      <div className="proposal-dec-card-img-container">
        <img src={proposalToView.img[0]} />
      </div>
      <div className="proposal-dec-card-proposal-id">ID : 0001</div>
      <div className="proposal-dec-card-details">
        <div>
          <span className="label">Name</span> Vendor Name
        </div>
        <div>
          <span className="label">Email</span> email@gmail.com
        </div>
        <div className="proposal-timeline">
          <div>
            <span className="label">Start Date:</span> 20 Dec 2021
          </div>
          <div>
            <span className="label">End Date:</span> 22 Dec 2021
          </div>
        </div>
        <div className="event-specs">
          <div>
            <div className="proposal-desc-grid-event-spec-type">Event Type</div>
            <div className="proposal-desc-grid-event-type-value">Marriage</div>
          </div>
          <div>
            <div className="proposal-desc-grid-event-spec-type">
              Event Class
            </div>
            <div>Class A</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
