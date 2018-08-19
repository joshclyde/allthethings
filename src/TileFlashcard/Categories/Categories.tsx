import * as React from "react";
import { ICategories } from "./types";

const Categories = ({ categories }: ICategories) => (
  <div>
    <button>Study</button>
    <button>Edit</button>
    {categories.map((category) => (
      <div>
        <button>{category}</button>
      </div>
    ))}
  </div>
);

export default Categories;
