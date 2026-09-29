import Car from "./Components/Car";
import Events from "./Components/Events";
import Phone from "./Components/Phone";

const carinfo = {
  name: "Ford",
  model: "Mustang"
};

function App() {
  return (
    <>
      <Car carInfo={carinfo} />

      <hr />

      <Events />

      <hr />

      <Phone />
    </>
  );
}

export default App;