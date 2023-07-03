import React from "react";

function App() {
  return (
    <>
      Hello World !
      <br />
      <input id="date" type="date" />
      <button
        onClick={() => {
          console.log(document.getElementById("date").value);
        }}
      >
        Get Date
      </button>
    </>
  );
}

export default App;
