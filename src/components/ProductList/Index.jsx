import RecipeReviewCard from "../RecipeReviewCard";
import "./Lista.css";

const ProductList = ({ productos }) => {
  return (
    <ul>
      {productos.map((producto) => (
        <RecipeReviewCard producto={producto} />
      ))}
    </ul>
  );
};

export default ProductList;
