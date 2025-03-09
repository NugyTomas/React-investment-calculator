import { useState } from "react";

export default function UserInput() {
  
  const [inputs, setInputs] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = Number(event.target.value);

    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            onChange={handleChange}
            name="initialInvestment"
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            onChange={handleChange}
            name="annualInvestment"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input type="number" onChange={handleChange} name="expectedReturn" />
        </p>
        <p>
          <label>DURATION</label>
          <input type="number" onChange={handleChange} name="duration" />
        </p>
      </div>
    </div>
  );
}
