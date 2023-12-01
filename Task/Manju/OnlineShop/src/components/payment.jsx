import React,{useState} from "react";
import './payment.css'
export const Paymentpage =() =>{
    const [paymentMethod,setpaymentMethod] = useState('');

    const handlePaymentMethodChange = (e) =>{
        setpaymentMethod(e.target.value);
    };

    return(
        <div className="payheading">
            
            <div className="paybody">
            <h2>Payment Page</h2>
                <label id="payment-method">Mode of Payment</label>
                <select id="payment-method" value={paymentMethod} onChange={handlePaymentMethodChange}>
                    <option value="creditCard">Credit Card</option>
                    
                    <option value="stripe">Stripe</option>
                </select>
            </div>
            <div className="content">
                {paymentMethod ==='creditCard' &&(
                <div className="credit-card-fields">
                    <label id="card">Card Number</label>
                    <input type="text" id="card" placeholder="Enter card number" required/>
                    <label id="date">Expiration Date</label>
                    <input type="text" id="date" placeholder="MM/YY" required/>
                    <label id="cvv">CVV</label>
                    <input type="text" id="cvv" placeholder="Enter CVV" required/>
                    <label id="name">Name on Card</label>
                    <input type="text" id="name" placeholder="Enter name on card" required/>
                    <label id="billing">Billing Address</label>
                    <input type="text" id="billing" placeholder="Enter Billing address " required/>
                </div>
                )}


                {paymentMethod ==='stripe' &&(
                <div className="stripe-fields">
                    <label id="card">Card Number</label>
                    <input type="text" id="card" placeholder="Enter card number" required/>
                    <label id="date">Expiration Date</label>
                    <input type="text" id="date" placeholder="MM/YY" required/>
                    <label id="cvv">CVV</label>
                    <input type="text" id="cvv" placeholder="Enter CVV" required/>
                    <label id="name">Name on Card</label>
                    <input type="text" id="name" placeholder="Enter name on card" required/>
                   
                </div>
                )}

                
            </div>
            <button type="submit" className="pay-button">Pay Now</button>
        </div>
       
    )
}
export default Paymentpage