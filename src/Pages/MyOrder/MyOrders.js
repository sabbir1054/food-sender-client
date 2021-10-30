import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import PageBanner from '../PageBanner/PageBanner';
import MyOrder from './MyOrder';

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:5000/userOrders/${user.email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }, []);
    console.log(orders);
  return (
    <div>
      <PageBanner text="Your Order Condition"></PageBanner>
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
                  <MyOrder order={order}></MyOrder>
                ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default MyOrders;