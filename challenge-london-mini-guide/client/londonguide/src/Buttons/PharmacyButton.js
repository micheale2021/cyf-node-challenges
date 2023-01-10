import React from "react";

function PharmacyButton(props) {
  return (
    <div>
      <button onClick={props.handleClick} className="btn btn-primary">
        Pharmacy
      </button>
    </div>
  );
}

export default PharmacyButton;
