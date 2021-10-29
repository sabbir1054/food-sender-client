import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import PageBanner from "../PageBanner/PageBanner";

const PlaceOrder = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <PageBanner text="Place Your Order Here"></PageBanner>
      <Container className="bg-light">
        <Row>
          <Col md="6">
            <h1>Your selected product</h1>
          </Col>
          <Col md="6" className="py-5">
            <h3 className="text-start text-dark">Provide Your Info</h3>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">Selected Product Id</label>
                <br />
                <input
                  className="w-75 my-3 py-2"
                  readOnly
                  defaultValue="Product id"
                  {...register("product-id")}
                />{" "}
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
