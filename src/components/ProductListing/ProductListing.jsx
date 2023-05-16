import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import ProductListCard from "../ProductListCard/ProductListCard";

const ProductListing = () => {
  const { productId } = useParams();
  console.log(productId);

  return (
    <div>
      <Header />
      <div>
        <div>filters</div>
        <div>
          <ProductListCard />
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
