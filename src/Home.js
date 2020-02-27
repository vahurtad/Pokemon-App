import * as React from "react";
import pokeball from "./pokeball.svg";

const handleClick = () => {
  console.log("CLICKASKFDAKSFN");
};

const LoggingButton = () => (
  // This syntax ensures `this` is bound within handleClick
  <button>
    LoGín
    <img
      className="pokebutton"
      src={pokeball}
      alt="pokeball"
      onClick={e => handleClick()}
    />
  </button>
);

export default LoggingButton;
