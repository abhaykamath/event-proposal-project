import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/UserProposals.css";
import ProposalTile from "../ProposalTile";
import { useAccountInfo } from "../../contexts/accountContext";
import { useOutletContext } from "react-router-dom";
import SelectedProposals from "./SelectedProposals";

const all_proposals_api = "http://localhost:4000/eventapp/api/v1/proposal";

function UserProposals() {
  const context = useAccountInfo();
  const { proposals, proposalToView, setProposalToView, selected } =
    useOutletContext();

  return (
    <>
      <div className="banner">
        <img src="./banner.jpg" alt="banner" />
      </div>
      {selected.length !== 0 ? (
        <SelectedProposals
          proposals={proposals}
          selected={selected}
          setProposalToView={setProposalToView}
        />
      ) : (
        ""
      )}

      <div className="user-proposals-container">
        <div className="all-proposals-header">Proposals</div>
        <div className="all-proposals-grid">
          {proposals.length !== 0
            ? proposals
                .filter((proposal) => {
                  if (proposal._id !== selected[0]) return proposal;
                })
                .map((proposal, index) => {
                  return (
                    <ProposalTile
                      key={index}
                      proposal={proposal}
                      setProposalToView={setProposalToView}
                      selected={selected}
                    />
                  );
                })
            : ""}
        </div>
      </div>
    </>
  );
}

export default UserProposals;
