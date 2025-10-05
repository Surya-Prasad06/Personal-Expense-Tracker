import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/ViewExpenses.css";
const ViewExpenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:5000/expenses")
      .then((response) => {
        console.log(response.data);
        setExpenses(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/expenses")
      .then((response) => {
        const data = response.data;
        setExpenses(data);

        // Calculate total
        const totalAmount = data.reduce(
          (sum, expense) => sum + Number(expense.amount),
          0
        );
        console.log(totalAmount);
        setTotal(totalAmount);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const deletehandler = (id) => {
    axios
      .delete(`http://localhost:5000/expenses/${id}`)
      .then(() => {
        alert("Successfully deleted");
        setExpenses(expenses.filter((expense) => expense.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      {expenses.length === 0 ? (
        <>
          <div className="loading">Loading ...</div>
        </>
      ) : (
        <>
          <div className="total-card">
            <h3>Total Amount Spent</h3>
            <p className="total-amount">
              <i className="fas fa-rupee-sign">:</i> {total}/-
            </p>
          </div>

          {expenses.map((expense) => (
            <div className="div" key={expense.id}>
              <ul className="ul">
                <li className="li">  <strong>Title: </strong>{expense.title}</li>
                <li className="li">  <strong>Category: </strong>{expense.category}</li>

                <li className="li">  <strong>Note: </strong>{expense.note}</li>
                <li className="li">
                  {" "}
                  <strong>Amount: </strong> <i className="fas fa-rupee" style={{ fontSize: "15px" }}>
                    :
                  </i>
                  {expense.amount}/-
                </li>
                <li className="li"> <strong>Payment Method: </strong> {expense.paymentmethod}</li>
                <li className="li">  <strong>Date: </strong>{expense.date}</li>
              </ul>

              <Link className="Link" to={`/updateexpense/${expense.id}`}>
                <button className="button">
                  <i
                    className="fas fa-edit"
                    style={{ fontSize: "24px", color: "green" }}
                  ></i>
                  Update Expense
                </button>
              </Link>

              <button
                className="button"
                onClick={() => deletehandler(expense.id)}
              >
                <i
                  className="fas fa-trash"
                  style={{ fontSize: "24px", color: "red" }}
                ></i>
                Delete Expense
              </button>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default ViewExpenses;
