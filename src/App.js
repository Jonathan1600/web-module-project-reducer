import React, { useReducer } from "react";
import reducer, { initialState } from "./reducers";
import "./App.css";
import {
  addOne,
  applyNumber,
  changeOperation,
  clearDisplay,
  mClear,
  mPlus,
  mResult,
} from "./actions";
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const eventHandlerOne = () => {
  //   dispatch(addOne());
  // };

  const eventHandler = (num) => {
    dispatch(applyNumber(num));
  };

  const operatorChanger = (operator) => {
    dispatch(changeOperation(operator));
  };

  const clear_display = () => {
    dispatch(clearDisplay());
  };

  const m_plus = () => {
    dispatch(mPlus());
  };

  const m_result = () => {
    dispatch(mResult());
  };

  const m_clear = () => {
    dispatch(mClear());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img width="40px" src="./Lambda-Logo-Red.png" /> Lambda Reducer
          Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={() => m_plus()} />
              <CalcButton value={"MR"} onClick={() => m_result()} />
              <CalcButton value={"MC"} onClick={() => m_clear()} />
            </div>

            <div className="row">
              <CalcButton
                value={1}
                //onClick={() => eventHandlerOne()}
                onClick={() => eventHandler(1)}
              />
              <CalcButton value={2} onClick={() => eventHandler(2)} />
              <CalcButton value={3} onClick={() => eventHandler(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => eventHandler(4)} />
              <CalcButton value={5} onClick={() => eventHandler(5)} />
              <CalcButton value={6} onClick={() => eventHandler(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => eventHandler(7)} />
              <CalcButton value={8} onClick={() => eventHandler(8)} />
              <CalcButton value={9} onClick={() => eventHandler(9)} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => operatorChanger("+")} />
              <CalcButton value={"*"} onClick={() => operatorChanger("*")} />
              <CalcButton value={"-"} onClick={() => operatorChanger("-")} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => clear_display()} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
