import React from "react";
import { Link, useHistory } from "react-router-dom";

const Topics = () => {
  const history = useHistory();
  const backHandle = () => {
    history.goBack();
  }
  return (
    <div id="topics-div">
      <h2>Topics</h2>
      <ul>
        <li>
          <h2 id="rendering"><Link to={"/topics/rendering"}>Rendering</Link></h2>
        </li>
        <li>
          <h2 id="components"><Link to={"/topics/components"}>Components</Link></h2>
        </li>
      </ul>
      <hr />
      <button id="topics-back-button" onClick={backHandle}>Back</button>
    </div>
  );
};

export default Topics;
