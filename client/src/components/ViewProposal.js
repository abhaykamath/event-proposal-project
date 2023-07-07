import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/ViewProposal.css";
import Card from "./viewProposals/Card";
import Venue from "./viewProposals/Venue";
import Food from "./viewProposals/Food";
import Album from "./viewProposals/Album";
import Loader from "./Loader";
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router";
import { useAccountInfo } from "../contexts/accountContext";

const updateSelectionApi = "http://localhost:4000/eventapp/api/v1/account";

function ViewProposal() {
  const context = useAccountInfo();
  const { proposalToView, selected, setSelected } = useOutletContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const updateSelection = async (id) => {
    await axios.put(
      updateSelectionApi,
      { new_selection: id !== null ? [id] : [] },
      { headers: { Authorization: `Bearer ${localStorage.token}` } }
    );
    id === null ? setSelected([]) : setSelected([id]);
    setLoading(false);
  };

  return (
    <div className="view-proposal-container">
      <div className="top-bar">
        <div>
          Proposals
          <i className="fa-solid fa-less-than"></i>
          <div>{proposalToView !== "" ? proposalToView.vendor_name : ""}</div>
        </div>
        {proposalToView._id === selected[0] ? (
          <div className="selected-alert">Selected</div>
        ) : (
          ""
        )}

        <div>
          <button
            disabled={loading ? true : false}
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>
          {proposalToView._id === selected[0] ? (
            <button
              disabled={loading ? true : false}
              onClick={() => {
                setLoading(true);
                updateSelection(null);
              }}
            >
              Remove {loading ? <Loader /> : ""}
            </button>
          ) : (
            <button
              disabled={loading ? true : false}
              onClick={() => {
                setLoading(true);
                updateSelection(proposalToView._id);
              }}
            >
              Select {loading ? <Loader /> : ""}
            </button>
          )}
        </div>
      </div>
      <div className="proposal-desc-grid">
        <Card proposalToView={proposalToView !== "" ? proposalToView : ""} />
        <Venue />
        <Food />
        <Album images={proposalToView !== "" ? proposalToView.images : ""} />
      </div>
    </div>
  );
}

export default ViewProposal;
