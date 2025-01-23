import { useLocation, useNavigate } from "react-router-dom";
import "./payment.css";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const totalPrice = location.state?.totalPrice || 0;

  const handlePayment = () => {
    // Aici adaugi logica de procesare a plății
    alert("Payment processed successfully!");
    navigate("/"); // Redirectează utilizatorul la pagina principală
  };

  return (
    <div className="payment">
      <h1>Payment Page</h1>
      <p>Total Price: <strong>${totalPrice.toFixed(2)}</strong></p>
      <button onClick={handlePayment} className="paymentButton">
        Pay Now
      </button>
    </div>
  );
};

export default Payment;
