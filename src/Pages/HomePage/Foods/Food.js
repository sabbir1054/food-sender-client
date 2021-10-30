import React from "react";
import { Link, NavLink } from "react-router-dom";

const Food = (props) => {
    const { title, description, imgUrl, price, _id } = props.food;
    // const url = `/placeOrder/${_id}`;
    
  return (
    <div className="col">
      <div className="card">
        <img src={imgUrl} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="fs-3 text-center text-primary fw-bold">
            Price:${price}
          </p>
          <Link to={`/placeOrder/${_id}`}>
            <button className="btn btn-warning">Buy now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Food;
