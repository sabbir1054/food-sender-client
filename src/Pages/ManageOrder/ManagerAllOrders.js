import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import PageBanner from "../PageBanner/PageBanner";
import ManageOrder from "./ManageOrder";

const ManagerAllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div>
      <PageBanner text="Manage Your All Order Here (Admin)"></PageBanner>
      <Container>
        <div className="py-5">
          <Table striped bordered hover responsive="md">
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
                <ManageOrder order={order}></ManageOrder>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default ManagerAllOrders;
