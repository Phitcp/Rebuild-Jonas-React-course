import { useState } from "react";
import Item from "./Item";

function ItemList({ itemList, setItemList }) {
  const [sortBy, setSortBy] = useState("input");

  let sortItem;

  if (sortBy === "input") {
    sortItem = itemList;
  }

  if (sortBy === "description") {
    sortItem = itemList
      .slice()
      .sort((a, b) => a.itemName.localeCompare(b.itemName));
  }

  if (sortBy === "packed") {
    sortItem = itemList
      .slice()
      .sort((a, b) => Number(a.isCheck) - Number(b.isCheck));
  }
  const handleClearList = () => {
    setItemList([]);
  };
  return (
    <div className="item-list">
      <ul>
        {sortItem.map((item) => (
          <Item
            item={item}
            itemList={itemList}
            setItemList={setItemList}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">input</option>
          <option value="description">description</option>
          <option value="packed">packed</option>
        </select>
        <button onClick={handleClearList}>Clear list</button>
      </div>
    </div>
  );
}

export default ItemList;
