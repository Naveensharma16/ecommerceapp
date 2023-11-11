// component to filter the products on products page

import { useEffect, useState } from "react";
import "./component.scss";
import filter from "../assets/filtericon.png";
// eslint-disable-next-line react/prop-types
export default function Filter({ parameter, setSearchParam }) {
  const [showSortList, setShowSortList] = useState(false);

  // below variable are used to set the default search parameter so if user copy paste url search filter persisit
  // below variable also help us to have make custom category pages
  const category =
    parameter.get("category") === null ? "all" : parameter.get("category");
  const price =
    parameter.get("price") === null ? "all" : parameter.get("price");

  // state to hold the default value filters
  const [query, setQuery] = useState({
    price: price,
    category: category,
  });

  // function to handle the type of sorting
  const handleSetSort = (sorttype) => {
    setQuery({ ...query, price: sorttype });
  };
  // function to handle the category type for filter
  const handlesetCategory = (category) => {
    setQuery({ ...query, category });
  };

  // calling the set filter function to chagne the filter values when query state changes
  useEffect(() => {
    // function to set the parameters that will be used to filter the data when we call api
    const handleSetFilter = () => {
      if (query.category !== "all" && query.price !== "all") {
        setSearchParam({ price: query.price, category: query.category });
      } else if (query.category === "all" && query.price !== "all") {
        setSearchParam({ price: query.price });
      } else if (query.category !== "all" && query.price === "all") {
        setSearchParam({ category: query.category });
      } else {
        setSearchParam({});
      }
    };
    handleSetFilter();
  }, [query, setSearchParam]);

  return (
    <div className="container site-filters flex-layout">
      <h3 className="title">
        <img src={filter} alt="" /> Filters
      </h3>
      <div className="category-filter flex-layout">
        <p>category</p>
        <select
          name="category"
          id=""
          onChange={(e) => handlesetCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="indoor plants">Indoor Plants</option>
          <option value="herbs">Herbs</option>
          <option value="Pots">Pots</option>
        </select>
      </div>
      <div className="sort-filter flex-layout">
        <button onClick={() => setShowSortList(!showSortList)}>sort by</button>
        {showSortList && (
          <div className="">
            <button onClick={() => handleSetSort("all")}>all </button>
            <button onClick={() => handleSetSort("rate-high")}>
              Hight to Low
            </button>
            <button onClick={() => handleSetSort("rate-low")}>
              Low to high
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
