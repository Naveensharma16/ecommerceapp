import { useEffect, useState } from "react";
import "./productlisting.scss";
import ProductCard from "../../components/ProductCard";
import { useSearchParams } from "react-router-dom";
import Filter from "../../components/Filter";
import Breadcrumb from "../../components/Breadcrumb";
import Loading from "../../components/Loading";

export default function ProductListing() {
  // state created to show the product
  const [plants, setPlants] = useState();

  // getting search parameter
  const [searchParams, setSearchParam] = useSearchParams();

  // calling the effect hook so we get data after initial render
  useEffect(() => {
    const price = searchParams.get("price");
    const category = searchParams.get("category");
    fetch(
      `/api/products?price=${price ? price : ""}&category=${
        category ? category : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => setPlants(data.plants));
  }, [searchParams]);

  if (!plants) {
    return <Loading />;
  } else {
    return (
      <>
        <Breadcrumb title={"Our Products"} />
        <div className="filter">
          <Filter parameter={searchParams} setSearchParam={setSearchParam} />
        </div>
        <div className="flex-layout container all-products-container">
          {plants.map((plant) => (
            <ProductCard key={plant.id} plant={plant} />
          ))}
        </div>
      </>
    );
  }
}
