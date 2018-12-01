import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";
import "normalize.css/normalize.css";
import "./styles/style.scss";

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

// We can pass default values while loading
//ReactDOM.render(<IndecisionApp options={["Hello"]} />, document.getElementById("app"));
