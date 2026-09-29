function FormComponent({ formData, handleChange }) {
  return (
    <div>
      <form method="GET">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />

        <br />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />

        <br />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />

        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          Female
        </label>

        <br />

        <select
          name="destination"
          value={formData.destination}
          onChange={handleChange}
        >
          <option value="">Choose a destination</option>
          <option value="Japan">Japan</option>
          <option value="Thailand">Thailand</option>
          <option value="Brazil">Brazil</option>
        </select>

        <h3>Dietary restrictions:</h3>

        <label>
          <input
            type="checkbox"
            name="lactoseFree"
            checked={formData.lactoseFree}
            onChange={handleChange}
          />
          Lactose Free
        </label>

        <br />

        <label>
          <input
            type="checkbox"
            name="nutsFree"
            checked={formData.nutsFree}
            onChange={handleChange}
          />
          Nuts Free
        </label>

        <br />

        <label>
          <input
            type="checkbox"
            name="vegan"
            checked={formData.vegan}
            onChange={handleChange}
          />
          Vegan
        </label>

        <br />
        <br />

        <button type="submit">
          Submit
        </button>
      </form>

      <hr />

      <h2>Entered Information:</h2>

      <p>
        Your name: {formData.firstName} {formData.lastName}
      </p>

      <p>Your age: {formData.age}</p>
      <p>Your gender: {formData.gender}</p>
      <p>Your destination: {formData.destination}</p>

      <h3>Your dietary restrictions:</h3>

      <p>
        Lactose Free: {formData.lactoseFree ? "Yes" : "No"}
      </p>

      <p>
        Nuts Free: {formData.nutsFree ? "Yes" : "No"}
      </p>

      <p>
        Vegan: {formData.vegan ? "Yes" : "No"}
      </p>
    </div>
  );
}

export default FormComponent;