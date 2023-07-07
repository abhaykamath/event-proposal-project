import React, { useEffect, useState } from "react";
import "../styles/CreateProposal.css";
import ImageDisplay from "./ImageDisplay";

function CreateProposal({
  setcreateimg,
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
  events_ref,
  editproposal,
  btnname,
}) {
  const [url, seturl] = useState(true);
  function editProposalfun() {
    if (btnname === "Edit") {
      event_name_ref.current.value = editproposal.event_name;
      event_place_ref.current.value = editproposal.event_place;
      proposal_type_ref.current.value = editproposal.proposal_type;
      event_type_ref.current.value = editproposal.event_type;
      budget_ref.current.value = editproposal.budget;
      event_from_date_ref.current.value = editproposal.event_from_date;
      event_to_date_ref.current.value = editproposal.event_to_date;
      description_ref.current.value = editproposal.description;
      food_prefs_ref.current.value = editproposal.food_prefs;
      events_ref.current.value = editproposal.events;
      // setcreateimg([...editproposal.images]);
      // console.log(editproposal.images);
    }
    // else{
    //   event_name_ref.current.value="";
    //   event_place_ref.current.value="";
    //   proposal_type_ref.current.value="";
    //   event_type_ref.current.value="";
    //   budget_ref.current.value="";
    //   event_from_date_ref.current.value="";
    //   event_to_date_ref.current.value="";
    //   description_ref.current.value="";
    //   food_prefs_ref.current.value="";
    //   events_ref.current.value="";
    // }
  }
  editProposalfun();

  return (
    <>
      <form className="create-form">
        <div className="left-pane">
          <label className="create-lbl-name">Event Name</label>
          <input
            placeholder="Name"
            className="create-name"
            ref={event_name_ref}
          />

          <div className="create-grid-container">
            <span className="create-span-event-place">
              <label>Place of Event</label>
              <select
                className="create-event-place"
                ref={event_place_ref}
                placeholder="Select"
              >
                <option>Hydrabad</option>
                <option>Bangaluru</option>
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Goa</option>
              </select>
            </span>
            <span className="create-span-proposal-type">
              <label>Proposal Type</label>
              <select
                className="create-proposal-type"
                ref={proposal_type_ref}
                placeholder="Select"
              >
                <option>Venue</option>
                <option>Catering</option>
                <option>Awareness</option>
                <option>Campaign</option>
              </select>
            </span>
            <span className="create-span-event-type">
              <label>Event Type</label>
              <select
                className="create-event-type"
                ref={event_type_ref}
                placeholder="Select"
              >
                <option>Birthday</option>
                <option>Marriage</option>
                <option>Engagement</option>
                <option>Social Gathering</option>
                <option>New Year Celebrations</option>
              </select>
            </span>
            <span className="create-span-budget">
              <label>Budget</label>
              <input
                type="number"
                className="create-budget"
                ref={budget_ref}
                placeholder="000000"
              />
            </span>
            <span className="create-span-from">
              <label>From</label>
              <input
                type="date"
                ref={event_from_date_ref}
                className="create-from"
              />
            </span>
            <span className="create-span-to">
              <label>To</label>
              <input
                type="date"
                ref={event_to_date_ref}
                className="create-to"
              />
            </span>
          </div>

          <label>Description</label>
          <textarea
            className="create-description"
            rows="4"
            cols="50"
            ref={description_ref}
            placeholder="Description"
          ></textarea>
        </div>
        <div className="right-pane">
          <div className="create-image-container">
            <label className="create-lbl-image">Images</label>
            <button
              className="create-image-add-btn"
              onClick={(e) => {
                e.preventDefault();
                seturl(false);
              }}
              hidden={!url}
            >
              Add
            </button>
          </div>
          <div hidden={url}>
            <input
              className="create-image-add-url"
              type="text"
              placeholder="Enter Image URL"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                const ele = document.getElementsByClassName(
                  "create-image-add-url"
                )[0];
                setcreateimg([ele.value, ...createimg]);
                ele.value = "";
                seturl(true);
              }}
            >
              Add
            </button>
          </div>
          <div className="create-image-display-container">
            {createimg.map((img, index) => {
              return <ImageDisplay key={index} img={img} />;
            })}
          </div>

          <div>
            <label>Food Preferences</label>
            <textarea
              className="create-food-pref"
              ref={food_prefs_ref}
              placeholder="Preferences"
            ></textarea>
            <label>Events</label>
            <textarea
              className="create-events"
              ref={events_ref}
              placeholder="Preferences"
            ></textarea>
          </div>
        </div>
      </form>
    </>
  );
}

export default CreateProposal;
