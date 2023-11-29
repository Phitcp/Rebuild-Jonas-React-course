import Button from "./Button";
function Friend({ friend, setSelectedFriend }) {
  return (
    <>
      <li className="friend" key={friend.id}>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        <p>
          {friend.name} owe you {friend.balance}$
        </p>
        <Button
          onClick={() => {
            localStorage.setItem("preFr", friend.id);
            setSelectedFriend(friend);
          }}
        >
          Select
        </Button>
      </li>
    </>
  );
}

export default Friend;
