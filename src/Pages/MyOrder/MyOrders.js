import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import PageBanner from "../PageBanner/PageBanner";
import MyOrder from "./MyOrder";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  //load my orders
  useEffect(() => {
    fetch(`https://guarded-beyond-06490.herokuapp.com/userOrders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  //delete my orders & update state
  const handleDelete = (deleteId) => {
    console.log(deleteId);
    fetch(`https://guarded-beyond-06490.herokuapp.com/orders/${deleteId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Are you sure to delete order");
        console.log(data);
        const remainingOrders = orders.filter(
          (order) => order._id !== deleteId
        );
        setOrders(remainingOrders);
      });
  };
  return (
    <div>
      <PageBanner text="Your Order Condition"></PageBanner>
      <Container>
        <div className="py-5">
          <Table striped bordered hover responsive="lg">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Food Id</th>
                <th>Order Condition</th>
                <th>Manage Order</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <MyOrder
                  order={order}
                  key={order._id}
                  delete={() => handleDelete(order._id)}
                ></MyOrder>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default MyOrders;
