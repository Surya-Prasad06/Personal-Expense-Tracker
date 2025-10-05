import axios from "axios";
import "../css/Addexpenses.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Addexpenses = () => {
  const [amount, setAmount] = useState();
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [category, setCategory] = useState("")
  const [paymentmethod, setPaymentmethod] = useState("");
const [title, setTitle] = useState("")
  const nav = useNavigate();
  const expensesubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/expenses", {
        amount,
        date,
        note,
        paymentmethod,category, title
      })
      .then((response) => {
        console.log(response.data);
        nav("/viewExpenses");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="expense-form-container">
      <h1>
        Add Expenses
      </h1>
      <form onSubmit={expensesubmit}>
         <label htmlFor="amount">Title</label>
        <input
          required
           type="text"
          id="amount"
         
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter amount (e.g. 500)"
        />
        <label htmlFor="amount">Amount</label>
        <input
          required
           type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter the : Lunch,Shopping"
        />
         <label htmlFor="date">
          Category 
        </label>
        <input
          required
          type="text"
          id="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="food, clothing, EMI"
        />

        <label htmlFor="date">
          Date 
        </label>
        <input
          required
          type="datetime-local"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label htmlFor="note">Note</label>
        <small>A short description or note *</small>
        <input
          required
          type="text"
          id="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="e.g. Coffee at Starbucks"
        />

        <label htmlFor="paymentmethod">
          Payment Method
        </label>
        <input
          required
          type="text"
          id="paymentmethod"
          value={paymentmethod}
          onChange={(e) => setPaymentmethod(e.target.value)}
          placeholder="e.g. Cash, Card, UPI"
        />

        <input type="submit" value="Add Expense" />
      </form>
    </div>
  );
};

export default Addexpenses;
