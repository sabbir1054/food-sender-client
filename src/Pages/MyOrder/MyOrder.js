import React from 'react';
import { Spinner } from 'react-bootstrap';

const MyOrder = (props) => {
    const {email,name,foodId,condition } = props.order;
    return email ? (
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{foodId}</td>
        <td>{condition}</td>
        <td>
                <button className="btn btn-danger"
                onClick={props.delete}>Cancel Order</button>
        </td>
      </tr>
    ) : (
      <div className="d-flex justify-content-center align-items-center">
        <Spinner animation="border" role="status "></Spinner>
      </div>
    );
};

export default MyOrder;