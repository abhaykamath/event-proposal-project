import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProposalTile.css";

function ProposalTile({ proposal, setProposalToView, selected }) {
  const navigate = useNavigate();
  const { vendor_name, images, budget, event_place } = proposal;
  return (
    <div
      className="proposal-tile"
      onClick={() => {
        setProposalToView(proposal);
        navigate(`view-proposal/${proposal._id}`);
      }}
    >
      <div className="proposal-thumbnail-container">
        <img
          src={
            images[0]
              ? images[0]
              : "https://www.suffolk.com/wp-content/themes/suffolk-theme/img/default-img.jpg"
          }
          alt="proposal-thumbnail"
        />
      </div>
      <div
        style={{
          backgroundColor: selected[0] === proposal._id ? "#34A853" : "",
          color: selected[0] === proposal._id ? "white" : "",
        }}
        className="tile-info"
      >
        <div>{vendor_name}</div>
        <div>{new Intl.NumberFormat().format(budget) + "/-"}</div>
        <div
          style={{
            color: selected[0] === proposal._id ? "white" : "",
          }}
        >
          {event_place}
        </div>
      </div>
    </div>
  );
}

export default ProposalTile;
