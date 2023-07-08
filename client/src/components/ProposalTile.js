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
        // console.log(proposal);
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
      <div className="tile-info">
        <div>{vendor_name}</div>
        <div>
          {new Intl.NumberFormat().format(budget) + "/-"}
        </div>
        <div>{event_place}</div>
      </div>
    </div>
  );
}

export default ProposalTile;
