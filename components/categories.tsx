import {FunctionComponent} from "react";
import {Category} from "../types/types";

const Categories: FunctionComponent<{ categories: Category[] }> = ({categories}) => {
  return (
    <span className="ml-1">
        under
      {categories.length > 0 ? (
        categories.map((category, index) => (
          <span key={index} className="ml-1">
              {category.name}
            </span>
        ))
      ) : (
        <span className="ml-1">no cache</span>
      )}
      </span>
  );
};
export default Categories;