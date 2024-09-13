import { Products } from "./pages/Products/Products";
import "./index.css";
import { PageWrapper } from "./widget/PageWrapper";
import rawData from './data/products.json'

function App() {
  return (
    <div className="container">
      <PageWrapper Page={Products} filterField="name" rawData={rawData} />
    </div>
  );
}

export default App;
