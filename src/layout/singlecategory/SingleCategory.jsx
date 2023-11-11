import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import ProductCard from "../../components/ProductCard";
import "./singlecategory.scss";

import Loading from "../../components/Loading";

export default function SingleCategory() {
  const params = useParams();
  // state created to show the product
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch(`/api/products?category=${params.categoryname.replace("-", " ")}`)
      .then((response) => response.json())
      .then((data) => setPlants(data.plants));
  }, [params]);

  if (plants.length == 0) {
    return <Loading />;
  } else {
    return (
      <>
        <Breadcrumb
          title={params.categoryname.replace("-", " ").toUpperCase()}
        />
        <div className="container flex-layout container-gap">
          {plants.map((plant) => (
            <ProductCard key={plant.id} plant={plant} />
          ))}
        </div>
      </>
    );
  }
}
