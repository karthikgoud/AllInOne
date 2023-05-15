import "./CategoryCard.css";

const CategoryCard = ({ type }) => {
  return (
    <div className="category-card-container">
      <p>{type}</p>
    </div>
  );
};

export default CategoryCard;
