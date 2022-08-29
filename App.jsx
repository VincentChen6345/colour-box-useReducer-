import styles from "./App.module.css";
import React, { useReducer, useState } from "react";

const ACTIONS = {
  BLUE: "blue",
  RED: "red",
  YELLOW: "yellow",
  GREEN: "green",
};
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.BLUE:
      return {
        text: "blue",
        styles: "text-blue",
      };

    case ACTIONS.RED:
      return {
        text: "red",
        styles: "text-red",
      };

    case ACTIONS.YELLOW:
      return {
        text: "yellow",
        styles: "text-yellow",
      };

    case ACTIONS.GREEN:
      return {
        text: "green",
        styles: "text-green",
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    text: "blue",
    styles: "text-blue",
  });
  const blue = () => {
    dispatch({ type: ACTIONS.BLUE });
  };
  const red = () => {
    dispatch({ type: ACTIONS.RED });
  };
  const yellow = () => {
    dispatch({ type: ACTIONS.YELLOW });
  };
  const green = () => {
    dispatch({ type: ACTIONS.GREEN });
  };
  return (
    <div className={styles.App}>
      <main className={styles.container}>
        <span>
          This mini app uses useReducer() for state management of the colour
          changes
        </span>
        <span>
          <button onClick={blue}>Blue</button>
          <button onClick={red}>Red</button>
          <button onClick={yellow}>Yellow</button>
          <button onClick={green}>Green</button>
          <div className={styles[state.styles]}>{state.text}</div>
        </span>
      </main>
    </div>
  );
}
export default App;
