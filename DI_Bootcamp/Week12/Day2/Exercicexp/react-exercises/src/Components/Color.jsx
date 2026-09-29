import { useEffect, useState } from "react";

function Color() {
  const [favoriteColor, setFavoriteColor] = useState("red");

  useEffect(() => {
    alert("useEffect reached");
  }, []);

  const changeColor = () => {
    setFavoriteColor("blue");
  };

  return (
    <>
      <h1>My favorite color is {favoriteColor}</h1>

      <button onClick={changeColor}>
        Change color
      </button>
    </>
  );
}

export default Color;