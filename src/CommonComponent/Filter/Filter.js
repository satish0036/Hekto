import React from "react";
import "./Filter.css";
const Filter = () => {
  return (
    <>
      <div className="Filter_layout" >
        <div className="filter_layout2">
          <div className="layout3">
            <div className="Filter_text1">Ecommerce Acceories & Fashion item </div>
            <div className="Filter_text2">About 9,620 results (0.62 seconds)</div>
          </div>
          <div className="layout4">
            <div className="filter_per_page">
              <div className="Filter_text3">Per Page :</div>
              <input placeholder="" className="Filter_text3_area" />
            </div>
            <div className="filter_sort_by">
              <div className="Filter_text4">Sort By:</div>
              <input placeholder="Best Match"className="Filter_text4_area" />
            </div>
            <div className="filter_view">
              <div className="Filter_text5">View:</div>
              <input placeholder="num"className="Filter_text5_area" />
            </div>
         
          </div>
        </div>

      </div>
    </>
  );
};

export default Filter;
