import React, { useState, useEffect } from "react";
import "./index.css";
import pencilIcon from "./pencil.svg";
import ProfileDetails from "../profile";

function ProfilePic() {
  const [profileDetails, setProfileDetails] = useState(ProfileDetails[0]);

  const handleProfilePicChange = (event) => {
    const newProfilePic = URL.createObjectURL(event.target.files[0]);
    setProfileDetails(prevState => ({ ...prevState, pfp: newProfilePic }));
  };

  useEffect(() => {
    const storedProfileDetails = localStorage.getItem("profileDetails");
    if (storedProfileDetails) {
      setProfileDetails(JSON.parse(storedProfileDetails));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("profileDetails", JSON.stringify(profileDetails));
  }, [profileDetails]);

  const handleUploadClick = () => {
    document.getElementById("profile-pic-input").click();
  };

  return (
    <div className="file-input">
      <h1 className="heading">Profile</h1>
      <div className="pic-container">
        <label htmlFor="profile-pic-input">
          <img src={profileDetails.pfp} alt="Profile" className="profile-pic" />
          <div className="edit-icon-container">
            <img src={pencilIcon} alt="Edit" className="edit-icon" />
          </div>
        </label>
        <input type="file" id="profile-pic-input" onChange={handleProfilePicChange} hidden />
        <button className="upload-btn" onClick={handleUploadClick}>Upload Photo</button>
      </div>
    </div>
  );
}

export default ProfilePic;
