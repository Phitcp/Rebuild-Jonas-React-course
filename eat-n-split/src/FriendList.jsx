import Friend from "./Friend";
function FriendList({ friendList, setSelectedFriend }) {
  return (
    <div className="friend-list">
      <ul>
        {friendList.map((fr) => (
          <Friend
            friend={fr}
            key={fr.id}
            setSelectedFriend={setSelectedFriend}
          />
        ))}
      </ul>
    </div>
  );
}

export default FriendList;
