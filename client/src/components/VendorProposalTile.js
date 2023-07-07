import React from "react";
import "../styles/VendorProposalTile.css";
import axios from "axios";
import { useOutletContext } from "react-router-dom";
function VendorProposalTile({
  proposal,
  setbtnname,
  setEditProposal,
  setModalContent,
}) {
  const { getVendorProposals } = useOutletContext();
  const {
    event_name,
    description,
    event_type,
    proposal_type,
    event_from_date,
    event_to_date,
    budget,
  } = proposal;
  async function deleteProposal() {
    await axios({
      method: "delete",
      url: "http://localhost:4000/eventapp/api/v1/proposal/" + proposal._id,
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
      data: {},
    });
    // window.location.reload(true);
    getVendorProposals();
  }
  return (
    <>
      <div className="vendor-tile-container">
        <div className="tile-event-name">{event_name}</div>
        <div className="tile-description">{description}</div>
        <div className="tile-event-type">
          <label className="vendor-tile-label">Event Type</label>
          {event_type}
        </div>
        <div className="tile-proposal_type">
          <label className="vendor-tile-label">Proposal Type</label>
          {proposal_type}
        </div>
        <div className="tile-event_from_date">
          <label className="vendor-tile-label">From Date</label>
          {event_from_date}
        </div>
        <div className="tile-event_to_date">
          <label className="vendor-tile-label">To Date</label>
          {event_to_date}
        </div>
        <div className="tile-budget">
          <label className="vendor-tile-label">Budget</label>
          {budget}
        </div>
        <div className="tile-icons">
          <i
            className="fa-solid fa-pen"
            id="tile-edit"
            onClick={() => {
              // console.log(proposal);
              setbtnname("Edit");
              setEditProposal(proposal);
              setModalContent(proposal);
            }}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          ></i>
          <i
            class="fa-solid fa-trash-can"
            id="tile-delete"
            onClick={() => {
              deleteProposal();
            }}
          ></i>
        </div>
      </div>
    </>
  );
}

export default VendorProposalTile;
