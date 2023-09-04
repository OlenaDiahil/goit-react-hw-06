import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';

const ContactList = () => {
  const { contacts } = useSelector((state) => state.contacts);
  const { searchQuery } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const onDelete = id => {
    dispatch(removeContact(id))
  }
  const getFilteredData = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  const filteredData = getFilteredData(contacts);
    
  return (
    <div>
      {filteredData.map(el => (
        <li key={el.id}>
          {el.name} {el.number}
          <button name="delete" onClick={() => onDelete(el.id)}>
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};

export default ContactList;

ContactList.propTypes = {
  paramList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func,
};
