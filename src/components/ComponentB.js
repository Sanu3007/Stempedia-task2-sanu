import React from "react";
import { connect } from "react-redux";
const ComponentB = ({ input, dispatch }) => {
  return (
    <form>
      <div className="form-input">
        <label htmlFor="input">Enter input :</label>
        <input
          type="text"
          id="input"
          name="input"
          value={input}
          onChange={(e) => {
            dispatch({ type: "UPDATE_INPUT", payload: e.target.value });
          }}
        />
      </div>
    </form>
  );
};

const mapStateToProp = (store) => {
  //   console.log(store);
  return { input: store.input };
};

export default connect(mapStateToProp)(ComponentB);
