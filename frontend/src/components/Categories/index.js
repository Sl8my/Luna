import React from "react";
import {useFetch} from "../../hooks/useFetch";

export const Categories = () => {

  const URL = "https://taurus-luna.propulsion-learn.ch/backend/api/categories/list/";

  const headers = new Headers({
    "Content-Type": "application/json"
  });

  const config = {
    method: "GET",
    headers
  };

  const [response, error] = useFetch(URL, config);
  //PULL API CATEGORY DATA FROM HERE
  const dummyCategories = [
    "Mexican",
    "Chinese",
    "Italian",
    "Japanese",
    "Vietnamese"
  ];

  const renderCategories = () => {
    if(response){
    return response.map(cat => {
      return (
        <option value={cat.name} style={{ color: "#4a4a4a" }}>
          {cat.name}
        </option>
      );
    });
    }
  };

  return <>{renderCategories()}</>;
};
