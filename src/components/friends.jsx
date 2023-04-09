import React,{useState} from "react";
import "./friends.css";
import "../profile";

const Friends = () => {
    const [showFriends, setShowFriends] = useState(false);
  
    const handleFriendsClick = () => {
      setShowFriends(!showFriends);
    };

    const handleRemoveFriend = (id) => {
        setShowFriends(friends.filter(friend => friend.id !== id));
      };
  
    const friends = [
        { id: 1, name: 'Nobita' },
        { id: 2, name: 'Shizuka' },
        { id: 3, name: 'Geon' },
        { id: 4, name: 'Suneo' }
      ];
  
    return (
      <div className="friends-list">
        <h2>Friends List</h2>
        <button onClick={handleFriendsClick}>Friends</button>
        {showFriends && (
          <ul>
            {friends.map(friend => (
              <li key={friend.id}>{friend.name}
              {friend.name}{' '}
            <button onClick={() => handleRemoveFriend(friend.id)}>Remove</button></li>
            ))}
          </ul>
        )}
        
      </div>
    );
  };




export default Friends;