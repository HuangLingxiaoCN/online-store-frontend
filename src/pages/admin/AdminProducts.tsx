import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

import AdminNav from "../../components/admin/nav/AdminNav";
import "../../sass/AdminProducts.scss";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios(
      "https://fierce-spring-store-backend.herokuapp.com/api/products"
    ).then((res: any) => {
      setProducts(res.data);
    });
  }, []);

  const deleteProductHandler = (productId: string) => {
    axios
      .delete(
        `https://fierce-spring-store-backend.herokuapp.com/api/products/${productId}`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": Cookies.get("jwt")!,
          },
        }
      )
      .then((res: any) => {
        console.log(res);
        axios(
          "https://fierce-spring-store-backend.herokuapp.com/api/products"
        ).then((res: any) => {
          setProducts(res.data);
        });
      })
      .catch((error: Error) => {
        console.log(error);
      });
  };

  return (
    <div className="admin-container">
      <div className="adminProducts-container">
        <h1 className="adminProducts-header">Products Management Console</h1>
        <ul>
          {products.map((product: any) => (
            <li key={product._id}>
              <Link to="/admin/products/productDetail" state={product}>{product.name}</Link>
              <button onClick={() => deleteProductHandler(product._id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <AdminNav />
    </div>
  );
}
