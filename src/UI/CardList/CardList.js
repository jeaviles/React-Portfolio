import React from "react";

import AmortCard from "../../components/AmortTool/AmortCard/AmortCard";
import LandingCard from "../../components/Landing/LandingCard/LandingCard";
import TaxToolCard from "../../components/TaxTool/TaxToolCard/TaxToolCard";
import "./CardList.css";

const cardList = props => {
  return (
    <div className="CardList">
      <TaxToolCard navigate={props.navigate} />
      <AmortCard navigate={props.navigate} />
      <LandingCard navigate={props.navigate} />
    </div>
  );
};

export default cardList;
