import Header from "./components/Header.jsx";
import ResultTable from "./components/ResultTable";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleUserInput(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        // add '+' before newValue to convert newValue which stored as string to number
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput handleInput={handleUserInput} initialInput={userInput} />
      {!inputIsValid && (
        <p className="center">Please enter a durtion greater than zero</p>
      )}
      {inputIsValid && <ResultTable input={userInput} />}
    </>
  );
}

export default App;
