import "./App.css";
import ComponentA from "./components/ComponentA";
import { createStore } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";

const initialState = {
  input: "",
};

const store = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <ComponentA />
    </Provider>
  );
}

export default App;
