import React from 'react';
import './invoice.css';

export const Invoice = () => {
  return (
    <div className="invoice-container">
      <div className="invoice-header">
        <h1>Invoice #12345</h1>
        <p>Date: 26 April 2023</p>
      </div>
      <div className="invoice-details">
        <div className="invoice-info">
          <h2>Bill To:</h2>
          <p>Ram</p>
          <p>123 Mint Street</p>
          <p>chennai, 12345</p>
        </div>
        <div className="invoice-info">
          <h2>Ship To:</h2>
          <p>Jaanu</p>
          <p>456 Second Street</p>
          <p>Chennai, 12345</p>
        </div>
      </div>
      <table className="invoice-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.T-shirt</td>
            <td>₹500.00</td>
            <td>2</td>
            <td>₹1000.00</td>
          </tr>
          <tr>
            <td>2.Toys</td>
            <td>₹150.00</td>
            <td>1</td>
            <td>₹150.00</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">Subtotal:</td>
            <td>₹1150.00</td>
          </tr>
          <tr>
            <td colSpan="3">Tax:</td>
            <td>₹15.00</td>
          </tr>
          <tr>
            <td colSpan="3">Total:</td>
            <td>₹1165.00</td>
          </tr>
          
          
        </tfoot>
      </table>
      <button className='bttn' >Payment </button>
    </div>
  );
};

export default Invoice;