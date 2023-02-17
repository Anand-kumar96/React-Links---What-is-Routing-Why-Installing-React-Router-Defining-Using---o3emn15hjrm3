import React from 'react'
import { useHistory } from 'react-router-dom';

const RenderingTopic = () => {
  const history = useHistory();
  const backHandle = () => {
    history.goBack();
  }
  return (
    <div id="rendering-div">
      <h3>Rendering in React</h3>
      <button id="rendering-back-button" onClick={backHandle}>
        Back
      </button>
    </div>
  )
}

export default RenderingTopic
