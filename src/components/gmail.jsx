import React, { useState } from 'react';
import './gmail.css';
import { FaEdit } from 'react-icons/fa';
import ProfileDetails from '../profile';

const EmailId = ({ email, onSave }) => {
  const [editing, setEditing] = useState(false);
  const [newEmail, setNewEmail] = useState(ProfileDetails[0].email_id);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
    setNewEmail(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (typeof onSave === 'function') {
      onSave(newEmail);
    }
    setEditing(false);
  };

  return (
    <div className="edit-mailform">
      <div className="input-container">
        <p className='box'>Email: {newEmail}</p>
        <button type="button" onClick={handleEdit}>
          <FaEdit />
        </button>
      </div>
      {editing && (
        <form className="edit-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="New email address"
            value={newEmail}
            onChange={(event) => setNewEmail(event.target.value)}
          />
          <div>
          <button type="submit" onClick={handleSubmit}>Save</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default EmailId;
