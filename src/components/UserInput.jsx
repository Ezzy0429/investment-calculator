export default function UserInput({ initialInput, handleInput }) {
  // return (
  //   <div id="user-input">
  //     <label>{label}</label>
  //     <input type="text" id={label} onChange={handleInput} />
  //   </div>
  // );

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            required
            value={initialInput.initialInvestment}
            onChange={(event) =>
              handleInput("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            required
            value={initialInput.annualInvestment}
            onChange={(event) =>
              handleInput("annualInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            required
            value={initialInput.expectedReturn}
            onChange={(event) =>
              handleInput("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            required
            value={initialInput.duration}
            onChange={(event) => handleInput("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
