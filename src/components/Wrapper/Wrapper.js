import React from "react";
import "./wrapper.css";
//Stateless component for Wrapper
const Wrapper = props => <div className="wrapper">{props.children}</div>;

export default Wrapper;