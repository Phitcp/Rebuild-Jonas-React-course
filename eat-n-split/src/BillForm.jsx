import { useState } from "react";
import Button from "./Button";
function BillForm({ selectedFriend, setFriendList, friendList }) {
  const [bill, setBill] = useState("");
  const [userExpense, setUserExpense] = useState("");
  const [paidBy, setPaidBy] = useState("user");
  const isOpen = Object.keys(selectedFriend).length > 0;
  const frExpense = bill - userExpense;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bill || bill < 0) {
      alert("Your bill must be larger than 0");
      return;
    }

    if (!userExpense && userExpense < 0) {
      alert("Your expense must be larger than 0");
      return;
    }

    if (userExpense >= bill) {
      alert("You can not pay more than the bill");
      return;
    }
    setFriendList(
      friendList.map((fr) =>
        fr.id === selectedFriend.id
          ? {
              ...fr,
              balance:
                paidBy === "user"
                  ? fr.balance + frExpense
                  : fr.balance - userExpense,
            }
          : fr
      )
    );
    setBill("");
    setUserExpense("");
    setPaidBy("user");
  };
  if (!isOpen) {
    return <div className="bill-form transparent"></div>;
  } else {
    return (
      <form className="bill-form" onSubmit={(e) => handleSubmit(e)}>
        <h2>Split a bill with {selectedFriend.name ?? "your friend"}</h2>
        <label>Bill value</label>
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(+e.target.value)}
        ></input>
        <label>Your expense</label>
        <input
          type="number"
          value={userExpense}
          onChange={(e) => setUserExpense(+e.target.value)}
        ></input>
        <label>{selectedFriend.name ?? "Your friend"} expense</label>
        <input disabled value={frExpense}></input>
        <label>Who's gonna pay the bill</label>
        <select value={paidBy} onChange={(e) => setPaidBy(e.target.value)}>
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>
        <div className="right-button">
          <Button>Split the bill</Button>
        </div>
      </form>
    );
  }
}

export default BillForm;
