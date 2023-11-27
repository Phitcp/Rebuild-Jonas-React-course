import { useState } from "react";
function Form({ itemList, setItemList }) {
  const pickNumber = 9;
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);

  const resetLocalState = () => {
    setItemName("");
    setItemQuantity(1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemName.trim()) {
      setItemList([
        ...itemList,
        {
          itemName,
          itemQuantity,
          id: Date.now(),
          isCheck: false,
        },
      ]);
      resetLocalState();
    }
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        className="no-scrollbars"
        value={itemQuantity}
        onChange={(e) => setItemQuantity(e.target.value)}
      >
        {Array.from({ length: pickNumber }).map((_, index) => {
          return <option>{index + 1}</option>;
        })}
      </select>
      <input
        placeholder="item..."
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
