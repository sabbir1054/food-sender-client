import React from "react";

const ManageOrder = (props) => {
  const { email, name, foodId, condition,_id } = props.order;
  
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{foodId}</td>
      <td className='fs-3 fw-bold text-primary'>{condition}</td>
      <td>
        <button className="btn btn-success" onClick={props.update}>
          Approved 
        </button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={props.delete}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default ManageOrder;
