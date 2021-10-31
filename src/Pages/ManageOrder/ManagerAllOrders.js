import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import PageBanner from "../PageBanner/PageBanner";
import ManageOrder from "./ManageOrder";

const ManagerAllOrders = () => {
  const [orders, setOrders] = useState([]);
  //update order condition
  const handleUpdate = (updateId) => {
    fetch(`https://guarded-beyond-06490.herokuapp.com/orders/${updateId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  //load orders
  useEffect(() => {
    fetch("https://guarded-beyond-06490.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [handleUpdate]);
  //delete orders & update state
  const handleDelete = (deleteId) => {
    console.log(deleteId);
    fetch(`https://guarded-beyond-06490.herokuapp.com/orders/${deleteId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Are you sure to delete order");
        const remainingOrders = orders.filter(
          (order) => order._id !== deleteId
        );
        setOrders(remainingOrders);
      });
  };

  return (
    <div>
      <PageBanner text="Manage Your All Order Here (Admin)"></PageBanner>
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
                <ManageOrder
                  order={order}
                  key={order._id}
                  delete={() => handleDelete(order._id)}
                  update={() => handleUpdate(order._id)}
                ></ManageOrder>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default ManagerAllOrders;
