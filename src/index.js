import React from "react";
import { render } from "react-dom";
import Autocomplete from "./Autocomplete";
import "./styles.css";

const App = () => {
  return (
    <div className="wrapper">
      <h1>React Autocomplete</h1>
      <h2>Want to see something cool?, start typing</h2>
      <Autocomplete
        suggestions={[
          "Angular",
          "Blitzjs",
          "Gatsby",
          "Reactjs",
          "Vuejs",
          "Svelte",
          "Nextjs",
          "Node",
          "Express",
          "Sails",
          "Loopback",
          "React-router",
          "Redux",
          "Flux",
          "Yarn",
          "Npm"
        ]}
      />
    </div>
  );
};

const container = document.createElement("div");
document.body.appendChild(container);
render(<App />, container);
