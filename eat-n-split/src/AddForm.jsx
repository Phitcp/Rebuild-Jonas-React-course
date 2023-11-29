import Button from "./Button";
import { useState } from "react";
function AddForm({ friendList, setFriendList }) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [img, setImg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFriendList([
      ...friendList,
      {
        id: Date.now(),
        name,
        img,
        balance: 0,
      },
    ]);
  };
  if (!isOpen) {
    return (
      <div className="right-button">
        <Button onClick={() => setIsOpen(!isOpen)}>Add Friend</Button>
      </div>
    );
  } else {
    return (
      <>
        <form
          className="add-form"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <label>Friend Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <label>Image URL</label>
          <input
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          ></input>
          <Button>Add</Button>
        </form>
        <div className="right-button">
          <Button onClick={() => setIsOpen(!isOpen)}>Close</Button>
        </div>
      </>
    );
  }
}

export default AddForm;
