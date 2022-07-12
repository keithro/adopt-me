import { render } from "react-dom";
import SearchParams from "./SearchParams";
// import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
      {/* <Pet name="Uzi" animal="Dog" breed="Mini Pin" />
      <Pet name="Peppy" animal="Snake" breed="Python" />
      <Pet name="Fluffy" animal="Cat" breed="Persian" /> */}
    </div>
  );
};

render(<App />, document.getElementById("root"));
