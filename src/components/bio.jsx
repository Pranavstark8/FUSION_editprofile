import React, { useState } from "react";
import "./bio.css";
import pencilIcon from "./pencil.svg";
import ProfileDetails from "../profile";

function BioForm() {
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState(ProfileDetails[0].personal_intrests);

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
            src="https://cdn1..com/data/icons/ios-11-glyphs/30/save-512.png"
            alt="Save Bio Icon"
            className="bio-edit-icon"
            onClick={handleSaveBioClick}
          />
        ) : (
          <img
            src={pencilIcon}
            alt="Edit Bio Icon"
            className="bio-edit-icon"
            onClick={handleEditBioClick}
          />
        )}
      </div>
    </div>
  );
}

export default BioForm;
