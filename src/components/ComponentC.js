import React from "react";
import { connect } from "react-redux";

const ComponentC = ({ input }) => {
  return (
    <div className="display">
      <h2>{`Text typed is : ${input}`}</h2>
    </div>
  );
};

const mapStateToProp = (store) => {
  const { input } = store;
  return { input };
};

export default connect(mapStateToProp)(ComponentC);
