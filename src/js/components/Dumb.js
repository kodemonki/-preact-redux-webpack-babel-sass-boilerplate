import React from "react";

export const Dumb = (props) => {
  return <div>
    <div className="App">
      <h2>Dumb stateless component</h2>
      <p>Props from Redux : {props.initialised}</p>
    </div>
  </div>;
}
