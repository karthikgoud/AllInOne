import CategoryCard from "../CategoryCard/CategoryCard";
import "./Category.css";

const Category = () => {
  return (
    <div className="category-container">
      <CategoryCard type="Men" />
      <CategoryCard type="Women" />
      <CategoryCard type="Kids" />
      <CategoryCard type="Mobiles" />
    </div>
  );
};

export default Category;
