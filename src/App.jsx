import { StyledMain } from "./AppStyles";

import NavBar from "./Shared/Components/NavBar/NavBar";
import ProductsPageRoutes from "./Shared/Routes/ProductsPageRoutes";

function App() {
  return (
    <>
      <StyledMain>
        <NavBar />
        <ProductsPageRoutes />
      </StyledMain>
    </>
  );
}

export default App;
