import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const url = "http://localhost:5000/api/products";

  const [filters, setFilters] = useState({ cat: "all" });
  const [sort, setSort] = useState("latest");
  const [Products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  let cat = filters.cat;
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat ? `http://localhost:5000/api/products?category=${cat}` : url,
          {
            mode: "cors",
          }
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [cat]);
  useEffect(() => {
    cat &&
      setFilteredProducts(
        Products.filter((item) => {
          return Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          );
        })
      );
  }, [cat, filters, Products]);
  useEffect(() => {
    if (sort === "latest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    }
    if (sort === "price") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.current_price - b.current_price)
      );
    }
    if (sort === "name") {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.name > b.name));
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.createdAt - a.createdAt)
      );
    }
  }, [sort]);
  console.log(sort);
  return (
    <AppContext.Provider
      value={{ filters, setSort, setFilters, filteredProducts }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
