import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams,useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import PageBanner from "../PageBanner/PageBanner";

const PlaceOrder = () => {
  const history = useHistory();
  const { user } = useAuth();
  const { foodId } = useParams();
  const [food, setFood] = useState([]); 
    useEffect(() => {
      fetch(`http://localhost:5000/placeOrder/${foodId}`)
        .then((res) => res.json())
        .then((data) => setFood(data));
    }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.condition = 'pending';
    
     axios.post("http://localhost:5000/orders", data)
      .then((res) => {
      alert("Your Order placed");
      history.push("/home");
    }); 
  };
  return (
    <div>
      <PageBanner text="Place Your Order Here"></PageBanner>
      <Container className="bg-light">
        <Row>
          <Col md="6">
            <h3 className="text-center mt-5">Your selected product</h3>
            {food.title ? (
              <div>
                <div className="row pb-5 pt-2">
                  <div className="col d-flex justify-content-center">
                    <div className="card w-50">
                      <img
                        src={food.imgUrl}
                        className="card-img-top img-fluid "
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">{food.title}</h5>
                        <p className="card-text">{food.description}</p>
                        <p className="fs-3 text-center text-primary fw-bold">
                          Price:${food.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="d-flex justify-content-center align-items-center">
                <Spinner animation="border" role="status "></Spinner>
              </div>
            )}
          </Col>
          <Col md="6" className="py-5">
            <h3 className="text-start text-dark">Provide Your Info</h3>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="w-75 my-3 py-2"
                  readOnly
                  defaultValue={user.displayName}
                  {...register("name")}
                />{" "}
                <br />
                <input
                  className="w-75 my-3 py-2"
                  readOnly
                  defaultValue={user.email}
                  {...register("email")}
                />{" "}
                <br />
                <input
                  className="w-75 my-3 py-2"
                  placeholder="Enter Your Address"
                  {...register("address")}
                />{" "}
                <br />
                <label htmlFor="">Selected Food Id</label>
                <br />
                <input
                  className="w-75 my-3 py-2"
                  readOnly
                  defaultValue={foodId}
                  {...register("foodId")}
                />{" "} <br />
                <input
                  type="submit"
                  value="Place Your Order"
                  className="btn btn-warning py-2 px-4 mb-3"
                />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PlaceOrder;
