import React, { useState } from 'react';
import './PaymentForm.css';

const PaymentForm = () => {
  const [selectedMethod, setSelectedMethod] = useState('');

  const handlePaymentMethodClick = (method) => {
    setSelectedMethod(method);
  };

  const handlePayClick = () => {
    if (selectedMethod) {
      alert(`Paying with ${selectedMethod}`);
      // Add payment handling logic here
    } else {
      alert('Please select a payment method');
    }
  };

  return (
    <div className="container">
      <div className="header">
        <img src="https://cdn.iconscout.com/icon/free/png-512/free-razorpay-1649771-1399875.png?f=webp&w=256" alt="Jaivik Foundation" />
        <div>Bunch MicroTechnologies</div>
      </div>
      <div className="amount">₹ 10,000</div>
      <div className="language-select">English</div>
      <div className="contact-info">
        <input type="text" value="+918375893352" readOnly />
        <input type="email" value="abhil@gmail.com" readOnly />
      </div>
      <div className="payment-methods">
        <div 
          className={`payment-method ${selectedMethod === 'PhonePe' ? 'selected' : ''}`}
          onClick={() => handlePaymentMethodClick('PhonePe')}
        >
          <img src="https://e7.pngegg.com/pngimages/332/615/png-clipart-phonepe-india-unified-payments-interface-india-purple-violet.png" alt="PhonePe" />
          UPI - PhonePe
        </div>
        <div 
          className={`payment-method ${selectedMethod === 'GooglePay' ? 'selected' : ''}`}
          onClick={() => handlePaymentMethodClick('GooglePay')}
        >
          <img src="https://w7.pngwing.com/pngs/667/120/png-transparent-google-pay-2020-hd-logo.png" alt="Google Pay" />
          UPI - Google Pay
        </div>
        <div 
          className={`payment-method ${selectedMethod === 'Card' ? 'selected' : ''}`}
          onClick={() => handlePaymentMethodClick('Card')}
        >
          <img src="https://img.freepik.com/free-vector/realistic-credit-card-design_23-2149126090.jpg?w=740&t=st=1722273919~exp=1722274519~hmac=0d9ff32bac0e626b13f962259d0226c5afb8357359b25c7c4425381376b90020" alt="Card" />
          Card - Visa, MasterCard, RuPay, and Maestro
        </div>
      </div>
      <button className="pay-button" onClick={handlePayClick}>Pay</button>
    </div>
  );
};

export default PaymentForm;

// import React from 'react';
// import './PaymentForm.css';

// const PaymentForm= () => {
//   return (
//     <div className="container">
//       <div className="header">
//         <img src="https://cdn.iconscout.com/icon/free/png-512/free-razorpay-1649771-1399875.png?f=webp&w=256" alt="Jaivik Foundation" />
//         <div>Razorpay</div>
//       </div>
//       <div className="amount">₹ 10,000</div>
//       <div className="language-select">English</div>
//       <div className="contact-info">
//         <input type="text" value="+919842316312" readOnly />
//         <input type="email" value="xyz@gmail.com" readOnly />
//       </div>
//       <div className="payment-methods">
//         <div>
//           <img src="https://e7.pngegg.com/pngimages/332/615/png-clipart-phonepe-india-unified-payments-interface-india-purple-violet.png" alt="PhonePe" />
//           UPI - PhonePe
//         </div>
//         <div>
//           <img src="https://w7.pngwing.com/pngs/667/120/png-transparent-google-pay-2020-hd-logo.png" alt="Google Pay" />
//           UPI - Google Pay
//         </div>
//       </div>
//       <div className="card-info">
//         <img src="https://img.freepik.com/free-vector/realistic-credit-card-design_23-2149126090.jpg?w=740&t=st=1722273919~exp=1722274519~hmac=0d9ff32bac0e626b13f962259d0226c5afb8357359b25c7c4425381376b90020" alt="Card" />
//         Card - Visa, MasterCard, RuPay, and Maestro
//       </div>
//     </div>
//   );
// };

// export default PaymentForm;

// import React, { useState } from 'react';
// import './PaymentForm.css';

// const PaymentForm = () => {
//   const [formData, setFormData] = useState({
//     cardNumber: '',
//     cvv: '',
//     expiryDate: '',
//     phoneNumber: ''
//   });

//   const [transactionStatus, setTransactionStatus] = useState('');

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setTransactionStatus('Transaction Successful');
//   };

//   return (
//     <div className="payment-form-container">
//       <form onSubmit={handleSubmit} className="payment-form">
//         <h2>Payment Form</h2>
//         <div className="form-group">
//           <label>ATM Card Number</label>
//           <input 
//             type="text" 
//             name="cardNumber" 
//             value={formData.cardNumber} 
//             onChange={handleChange} 
//             required 
//           />
//         </div>
//         <div className="form-group">
//           <label>CVV</label>
//           <input 
//             type="text" 
//             name="cvv" 
//             value={formData.cvv} 
//             onChange={handleChange} 
//             required 
//           />
//         </div>
//         <div className="form-group">
//           <label>Expiry Date</label>
//           <input 
//             type="text" 
//             name="expiryDate" 
//             value={formData.expiryDate} 
//             onChange={handleChange} 
//             required 
//           />
//         </div>
//         <div className="form-group">
//           <label>Phone Number</label>
//           <input 
//             type="text" 
//             name="phoneNumber" 
//             value={formData.phoneNumber} 
//             onChange={handleChange} 
//             required 
//           />
//         </div>
//         <button type="submit" className="pay-button">Pay</button>
//       </form>
//       {transactionStatus && <p className="transaction-status">{transactionStatus}</p>}
//     </div>
//   );
// };

// export default PaymentForm;
