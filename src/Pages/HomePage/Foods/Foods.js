import React, { useEffect, useState } from "react";
import { Container, Spinner } from 'react-bootstrap';
import Food from "./Food";
const Foods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("https://guarded-beyond-06490.herokuapp.com/foods")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div className="bg-light py-5" id="foods">
      <h1 className="display-4 fw-bolder text-dark text-center mb-5">
        Get Your Hot Deals
      </h1>
      {foods.length ? (
        <div>
          <Container>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {foods.map((food) => (
                <Food food={food} key={food._id}></Food>
              ))}
            </div>
          </Container>
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" role="status "></Spinner>
        </div>
      )}
    </div>
  );
};

export default Foods;
