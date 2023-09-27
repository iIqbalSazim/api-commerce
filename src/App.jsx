import { StyledMain } from "./AppStyles";
import NavBar from "./Shared/Components/NavBar/NavBar";
import DisplayProducts from "./Pages/DisplayProducts/DisplayProducts";

function App() {
  return (
    <>
      <StyledMain>
        <NavBar />
        <DisplayProducts />
      </StyledMain>
    </>
  );
}

export default App;
