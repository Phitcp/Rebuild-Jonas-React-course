function Item({ item, itemList, setItemList }) {
  const handleCheckItem = (itemId) => {
    setItemList(
      itemList.map((item) =>
        item.id === itemId ? { ...item, isCheck: !item.isCheck } : item
      )
    );
  };

  const handleDeleteItem = (itemId) => {
    setItemList(itemList.filter((item) => item.id !== itemId));
  };
  return (
    <li>
      <input
        type="checkbox"
        value={item.isCheck}
        onChange={() => {
          handleCheckItem(item.id);
        }}
      ></input>
      <span>{`${item.itemQuantity} ${item.itemName}`}</span>
      <button
        type="button"
        onClick={() => {
          handleDeleteItem(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}

export default Item;
