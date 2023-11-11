import { Link } from "react-router-dom";

// component used to show the list of categories on home page
export default function CategoryBox({ categoryName }) {
  return (
    <div className="category-type-item">
      <Link to={`/categories/${categoryName.toLowerCase().replace(" ", "-")}`}>
        <h2>{categoryName}</h2>
      </Link>
    </div>
  );
}
