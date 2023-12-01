import React from 'react';
import './dropdown'

const OrderHistoryTable = ({ orders }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Order Number</th>
          <th>Date</th>
          <th>Items Purchased</th>
          <th>Total Price</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders && orders.map((order) => (
          <tr key={order.id}>
            <td>{order.orderNumber}</td>
            <td>{order.date}</td>
            <td>{order.itemsPurchased}</td>
            <td>{order.totalPrice}</td>
            <td>{order.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
    
  );
};

export default OrderHistoryTable;
