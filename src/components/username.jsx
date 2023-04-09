import React, { useState } from "react";
import "./username.css";
import pencilIcon from "./pencil.svg";

function UserName(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [username,setUsername] = useState(props.ProfileDetails && props.ProfileDetails.length > 0 ? props.ProfileDetails[0] : "")


  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className="UserName-cont">
      <div className="username">
        <div className={`username-wrapper ${isEditing ? "active" : ""}`}>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            placeholder="Enter your username"
            className="username-input"
            onChange={handleInputChange}
            readOnly={!isEditing}
          />
        </div>
        {isEditing ? (
          <img
            src="https://img.icons8.com/material-outlined/24/000000/save-close.png"
            alt="Save Icon"
            className="username-edit-icon"
            onClick={handleSaveClick}
          />
        ) : (
          <img
            src={pencilIcon}
            alt="Edit Icon"
            className="username-edit-icon"
            onClick={handleEditClick}
          />
        )}
      </div>
    </div>
  );
}

export default UserName;
