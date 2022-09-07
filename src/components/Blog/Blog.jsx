import React from "react";
import { listItems } from "../Blog/Articles";
import "../Blog/style.css";
import Pagination from "../Pagination";
export default function Blog() {
  return (
    <div className="container-article container">
      <h1>Articles </h1>
      <div className="articles">{listItems}</div>
      <Pagination/>
    </div>
  );
}
