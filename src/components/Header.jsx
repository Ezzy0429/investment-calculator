import investmentCalculatorLogo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={investmentCalculatorLogo} alt="logo showing a money bag" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
