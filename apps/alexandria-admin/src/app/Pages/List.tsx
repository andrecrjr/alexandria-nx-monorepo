import React from "react";
import { ListTableComponent } from "../molecules/Table";
import { PaginationComponent } from "../molecules/Pagination";


const List = () => {
  return (<div className="flex-1 mx-6 mt-6"><ListTableComponent/><PaginationComponent /></div>);
};

export default List;