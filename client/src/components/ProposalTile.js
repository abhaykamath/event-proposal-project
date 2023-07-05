import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProposalTile.css";

function ProposalTile({ proposal, setProposalToView }) {
  const navigate = useNavigate();
  const { vendor, img, budget, location } = proposal;
  return (
    <div
      className="proposal-tile"
      onClick={() => {
        setProposalToView(proposal);
        navigate("view-proposal/proposal1");
      }}
    >
      <div className="proposal-thumbnail-container">
        <img src={img[0]} alt="proposal-thumbnail" />
      </div>
      <div className="tile-info">
        <div>{vendor}</div>
        <div>{budget}</div>
        <div>{location}</div>
      </div>
    </div>
  );
}

export default ProposalTile;
