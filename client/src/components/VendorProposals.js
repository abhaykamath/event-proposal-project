import React, { useRef, useState } from "react";
import "../styles/VendorProposals.css";
import VendorProposalTile from "./VendorProposalTile";
import CreateProposal from "./CreateProposal";
import Loader from "./Loader";
import { useOutletContext } from "react-router-dom";
import { useAccountInfo } from "../contexts/accountContext";
import axios from "axios";

const createproposalapi = "http://localhost:4000/eventapp/api/v1/proposal/";


function VendorProposals() {
  const context = useAccountInfo();
  const { proposals } = useOutletContext();
  const [btnname, setbtnname] = useState("Add");
  const [createimg, setcreateimg] = useState([]);
  const [editproposal, setEditProposal] = useState([]);
  const event_name_ref = useRef(null);
  const event_place_ref = useRef(null);
  const proposal_type_ref = useRef(null);
  const event_type_ref = useRef(null);
  const budget_ref = useRef(null);
  const event_from_date_ref = useRef(null);
  const event_to_date_ref = useRef(null);
  const description_ref = useRef(null);
  const food_prefs_ref = useRef(null);
  const events_ref = useRef(null);
  const close_ref = useRef();


  async function createproposalindb(
    createimg,
    event_name_ref,
    event_place_ref,
    proposal_type_ref,
    event_type_ref,
    budget_ref,
    event_from_date_ref,
    event_to_date_ref,
    description_ref,
    food_prefs_ref,
    events_ref
  ) {
    try {
      let data = await axios({
        method: "post",
        url: createproposalapi,
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
        data: {
          event_name: event_name_ref,
          event_place: event_place_ref,
          proposal_type: proposal_type_ref,
          event_type: event_type_ref,
          budget: `${budget_ref}`,
          event_from_date: event_from_date_ref,
          event_to_date: event_to_date_ref,
          description: description_ref,
          images: createimg,
          food_prefs: food_prefs_ref,
          events: events_ref,
        },
      });

      document.getElementById("modal-close-btn").click();
    } catch (e) {
      console.log(e.message);
    }
  }

  async function editproposalindb(
    createimg,
    event_name_ref,
    event_place_ref,
    proposal_type_ref,
    event_type_ref,
    budget_ref,
    event_from_date_ref,
    event_to_date_ref,
    description_ref,
    food_prefs_ref,
    events_ref
  ) {
    try {
      let data = await axios({
        method: "put",
        url: "http://localhost:4000/eventapp/api/v1/proposal/"+editproposal._id,
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
        data: {
          event_name: event_name_ref,
          event_place: event_place_ref,
          proposal_type: proposal_type_ref,
          event_type: event_type_ref,
          budget: `${budget_ref}`,
          event_from_date: event_from_date_ref,
          event_to_date: event_to_date_ref,
          description: description_ref,
          images: createimg,
          food_prefs: food_prefs_ref,
          events: events_ref,
        },
      });
      document.getElementById("modal-close-btn").click();
    } catch (e) {
      console.log(e.message);
    }
  }
  return (
    <div className="vendor-page">
      <div className="vendor-container">
        <div className="vendor-search-create">
          <label className="vendor-proposal-head">Proposals</label>
          <i class="fa-solid fa-magnifying-glass" id="vendor-search-icon"></i>
          <input
            type="search"
            placeholder="Search event proposals"
            className="vendor-search"
          />
          <i className="fa-solid fa-filter" id="vendor-filter"></i>
          <button
            className="btn btn-primary"
            id="vendor-create-btn"
            onClick={() => {
              setbtnname("Add");
            }}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            CREATE
          </button>
        </div>
        <div className="vendor-proposals-container">
          <div className="vendor-proposals">
            {proposals.map((proposal, index) => {
              return (
                <>
                  <VendorProposalTile
                    key={index}
                    proposal={proposal}
                    setbtnname={setbtnname}
                    setEditProposal={setEditProposal}
                  />
                </>
              );
            })}
          </div>
        </div>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  {`${btnname} Proposal`}
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  id="modal-close-btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  ref={close_ref}
                ></button>
              </div>
              <div class="modal-body">
                <CreateProposal
                  setcreateimg={setcreateimg}
                  createimg={createimg}
                  event_name_ref={event_name_ref}
                  event_place_ref={event_place_ref}
                  proposal_type_ref={proposal_type_ref}
                  event_type_ref={event_type_ref}
                  budget_ref={budget_ref}
                  event_from_date_ref={event_from_date_ref}
                  event_to_date_ref={event_to_date_ref}
                  description_ref={description_ref}
                  food_prefs_ref={food_prefs_ref}
                  events_ref={events_ref}
                  editproposal={editproposal}
                  btnname={btnname}
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-mdb-focus="false"
                  onClick={() => {
                    if (btnname === "Add") {
                      createproposalindb(
                        createimg,
                        event_name_ref.current.value,
                        event_place_ref.current.value,
                        proposal_type_ref.current.value,
                        event_type_ref.current.value,
                        budget_ref.current.value,
                        event_from_date_ref.current.value,
                        event_to_date_ref.current.value,
                        description_ref.current.value,
                        food_prefs_ref.current.value,
                        events_ref.current.value
                      );
                    }
                    else{editproposalindb(
                      createimg,
                        event_name_ref.current.value,
                        event_place_ref.current.value,
                        proposal_type_ref.current.value,
                        event_type_ref.current.value,
                        budget_ref.current.value,
                        event_from_date_ref.current.value,
                        event_to_date_ref.current.value,
                        description_ref.current.value,
                        food_prefs_ref.current.value,
                        events_ref.current.value
                    );}
                  }}
                >
                  {btnname} {<Loader />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorProposals;
