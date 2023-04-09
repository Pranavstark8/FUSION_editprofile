import React, { useState } from "react";
import "./bio.css";
import pencilIcon from "./pencil.svg";
import "../profile";

function BioForm() {
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState("");

  const handleEditBioClick = () => {
    setIsEditing(true);
  };

  const handleSaveBioClick = () => {
    setIsEditing(false);
  };

  const handleInputChange = (event) => {
    setBio(event.target.value);
  };

  return (
    <div className="BioForm-cont">
      <div className="bio">
        <div className={`bio-wrapper ${isEditing ? "active" : ""}`}>
          <input
            type="text"
            id="bio"
            name="bio"
            value={bio}
            placeholder="Enter your bio"
            className="bio-input"
            onChange={handleInputChange}
            readOnly={!isEditing}
          />
        </div>
        {isEditing ? (
          <img
            src="https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/save-512.png"
            alt="Save Bio Icon"
            className="edit-icon"
            onClick={handleSaveBioClick}
          />
        ) : (
          <img
            src={pencilIcon}
            alt="Edit Bio Icon"
            className="edit-icon"
            onClick={handleEditBioClick}
          />
        )}
      </div>
    </div>
  );
}

export default BioForm;
