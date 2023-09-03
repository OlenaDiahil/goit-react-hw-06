import React from 'react';

const ContactList = ({ paramList = [], onDelete }) => {
  return (
    <div>
      {paramList.map(el => (
        <li key={el.id}>
          {el.name} {el.number}
          <span> </span>
          <button name="delete" onClick={() => onDelete(el.id)}>
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};

export default ContactList;