import NavBar from "./Shared/Components/NavBar/NavBar";
import ProductsPageRoutes from "./Shared/Routes/ProductsPageRoutes";

import { StyledMain } from "./AppStyles";

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
