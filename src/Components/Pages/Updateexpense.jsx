import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../css/UpdateExpenseForm.css'
const Updateexpense = () => {
  const { id } = useParams();

  const [amount, setAmount] = useState();
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [paymentmethod, setPaymentmethod] = useState("");
  const nav = useNavigate();
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("")
  useEffect(() => {
    axios
      .get(`http://localhost:5000/expenses/${id}`)
      .then((response) => {
        console.log(response.data);
        const res = response.data;

        setAmount(res.amount);
        setDate(res.date);
        setNote(res.note);
        setPaymentmethod(res.paymentmethod);
        setTitle(res.title);
        setCategory(res.category)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const updateexpensesubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/expenses/${id}`, {
        amount,
        date,
        note,
        paymentmethod,
        title,category
      })
      .then((response) => {
        console.log(response.data);
        alert("successfully Updated");
        nav("/viewExpenses");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <form className="form" onSubmit={updateexpensesubmit}>
        
        <label htmlFor="amount">Title</label>
        <input
          required
          type="text"
          id="title"
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
          placeholder="Enter amount (e.g. 500)"
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
        />

        <label className="label" htmlFor="date">
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
        <small className="small">A short description or note *</small>
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

        <input type="submit" value="Update expense" />
      </form>
    </>
  );
};

export default Updateexpense;
