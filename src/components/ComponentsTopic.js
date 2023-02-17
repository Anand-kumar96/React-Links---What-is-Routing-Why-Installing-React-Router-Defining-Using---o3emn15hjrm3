import React from "react";
import { useHistory } from "react-router-dom";

const ComponentsTopic = () => {
  const history = useHistory();
  const backHandle = () => {
    history.goBack();
  }
  return (
    <div id="components-div">
      <h3>Components in React</h3>
      <button id="components-back-button" onClick={backHandle}>
        Back
      </button>
    </div>
  );
};

export default ComponentsTopic;
