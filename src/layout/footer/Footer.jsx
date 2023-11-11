import "./footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-wrap">
      <div className="container flex-layout">
        <div className="column">
          <p>Copyright © 2023 by Greenery market. </p>
        </div>
        <div className="column">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/products"}>Products</Link>
            </li>
            <li>
              <Link to={"/categories"}>Categories</Link>
            </li>
            <li>
              <Link to={"/about-us"}>About us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
