import React from "react";

const ManageOrder = (props) => {
  const { email, name, foodId, condition,  } = props.order;

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{foodId}</td>
      <td>{condition}</td>
      <td>
        <button className="btn btn-success mx-2">Order Approved</button>
        <button className="btn btn-danger" onClick={props.delete}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default ManageOrder;
