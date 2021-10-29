import React from "react";
import { NavLink } from "react-router-dom";
import PageBanner from "../PageBanner/PageBanner";

const NotFound = () => {
  return (
    <div className='text-center'>
      <PageBanner text="Opps! Page Not Found"></PageBanner>
      <div className=" bg-secondary py-5">
        <h1 className="text-center text-white fw-bolder display-1 ">404 </h1>
        <NavLink to="/home">
          <button className="btn btn-warning">Back To HomePage</button>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
