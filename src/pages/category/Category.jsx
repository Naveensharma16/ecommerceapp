import "./category.scss";
import CategoryBox from "../../components/CategoryBox";
import Breadcrumb from "../../components/Breadcrumb";
export default function Category() {
  // list of all the categories in our site
  // TODO: these are static right now fetch them through api so when any new category is added it automatically gets added
  const categories = ["Indoor plants", "Herbs", "Pots"];

  return (
    <>
      <Breadcrumb title={"CATEGORIES"} />
      <div className="container all-categories-container">
        <div className="flex-layout">
          {categories.map((category, index) => {
            return <CategoryBox key={index} categoryName={category} />;
          })}
        </div>
      </div>
    </>
  );
}
