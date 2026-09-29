import { useState } from "react";
import Garage from "./Garage";

function Car({ carInfo }) {
  const [color] = useState("red");

  return (
    <>
      <h2>
        This car is a {color} {carInfo.model}
      </h2>

      <Garage size="small" />
    </>
  );
}

export default Car;