import React from "react";
import "../styles/ViewProposal.css";
import Card from "./viewProposals/Card";
import Venue from "./viewProposals/Venue";
import Food from "./viewProposals/Food";
import Album from "./viewProposals/Album";

function ViewProposal({ proposalToView }) {
  return (
    <div className="view-proposal-container">
      <div className="top-bar">
        <div>
          Proposals
          <i className="fa-solid fa-less-than"></i>
          <div>{proposalToView.vendor}</div>
        </div>
        <div>
          <button>Select</button>
        </div>
      </div>
      <div className="proposal-desc-grid">
        <Card proposalToView={proposalToView} />
        <Venue />
        <Food />
        <Album images={proposalToView.img} />
      </div>
    </div>
  );
}

export default ViewProposal;
