import React, { useState } from "react";
import "./index.css";
import pencilIcon from "./pencil.svg";
import defaultProfilePic from "./default_profile_pic.jpg";
import "../profile";

function ProfilePic() {
  const [profilePic, setProfilePic] = useState(defaultProfilePic);

  const handleProfilePicChange = (event) => {
    const newProfilePic = URL.createObjectURL(event.target.files[0]);
    setProfilePic(newProfilePic);
  };

  return (
    <div className="file-input">
      <h1 className="heading">Profile</h1>
      <label htmlFor="profile-pic-input">
        <div className="pic-container">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <div className="edit-icon-container">
            <img src={pencilIcon} alt="Edit" className="edit-icon" />
          </div>
        </div>
      </label>
      <input type="file" id="profile-pic-input" onChange={handleProfilePicChange} />
    </div>
  );
}

export default ProfilePic;
