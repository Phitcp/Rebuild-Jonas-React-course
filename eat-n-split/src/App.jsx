import AddForm from "./AddForm";
import "./App.css";
import BillForm from "./BillForm";
import FriendList from "./FriendList";
import { useState } from "react";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function App() {
  const [friendList, setFriendList] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState({});

  return (
    <div className="App">
      <FriendList
        friendList={friendList}
        setSelectedFriend={setSelectedFriend}
      />
      <BillForm
        selectedFriend={selectedFriend}
        friendList={friendList}
        setFriendList={setFriendList}
      />
      <AddForm friendList={friendList} setFriendList={setFriendList} />
    </div>
  );
}

export default App;

hgfhghghghghghgh
