import React from "react";

import AmortCard from "../../components/AmortTool/AmortCard/AmortCard";
import LandingCard from "../../components/Landing/LandingCard/LandingCard";
import "./CardList.css";

const cardList = props => {
  return (
    <div className="CardList">
      <AmortCard navigate={props.navigate} />
      <LandingCard navigate={props.navigate} />
    </div>
  );
};

export default cardList;
