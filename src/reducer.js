import React from "react";

const reducer = (state, action) => {
  if (action.type === "UPDATE_INPUT") {
    return { ...state, input: action.payload };
  }
  return state;
};

export default reducer;
