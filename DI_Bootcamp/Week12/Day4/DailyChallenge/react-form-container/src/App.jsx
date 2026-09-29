import { useState } from "react";
import FormComponent from "./Components/FormComponent";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    destination: "",
    lactoseFree: false,
    nutsFree: false,
    vegan: false
  });

  const handleChange = event => {
    const target = event.target;

    const value =
      target.type === "checkbox"
        ? target.checked
        : target.value;

    const name = target.name;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <FormComponent
      formData={formData}
      handleChange={handleChange}
    />
  );
}

export default App;