import investmentCalculatorLogo from "../assets/investment-calculator-logo.png";

export default function Header() {
  // return (
  //   <div id="header">
  //     <img src={investmentCalculatorLogo} alt="header-logo"></img>
  //     <h1>React Investment Calculator</h1>
  //   </div>
  // );

  return (
    <header id="header">
      <img src={investmentCalculatorLogo} alt="logo showing a money bag" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
