import React, { useState, useEffect } from "react";
import "./friends.css";
// import ProfileDetails from "../profile";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const storedFriends = JSON.parse(localStorage.getItem("showFriends"));
    if (storedFriends) {
      setFriends(storedFriends);
    } else {
      setFriends(["Nobita", "Shizuka", "Suneo", "Geon"]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("showFriends", JSON.stringify(friends));
  }, [friends]);

  const handleAddFriend = () => {
    setFriends([...friends, prompt("Enter friend's name")]);
  };

  const handleRemoveFriend = (friend) => {
    setFriends(friends.filter((f) => f !== friend));
  };

  return (
    <div className="friends-list">
      <h2>Friends List</h2>
      <button onClick={handleAddFriend}>Add Friend</button>
      {friends.length > 0 ? (
        <ul>
          {friends.map((friend, index) => (
            <li key={index}>
              {friend}{" "}
              <button onClick={() => handleRemoveFriend(friend)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>You have no friends</p>
      )}
    </div>
  );
};

export default Friends;
