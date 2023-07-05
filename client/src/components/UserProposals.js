import React, { useState } from "react";
import "../styles/UserProposals.css";
import ProposalTile from "./ProposalTile";

function UserProposals({ proposals, setProposalToView }) {
  return (
    <>
      <div className="banner">
        <img src="./banner.jpg" alt="banner" />
      </div>
      <div className="user-proposals-container">
        <div className="all-proposals-header">Proposals</div>
        <div className="all-proposals-grid">
          {proposals.map((proposal, index) => {
            return (
              <ProposalTile
                key={index}
                proposal={proposal}
                setProposalToView={setProposalToView}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default UserProposals;
