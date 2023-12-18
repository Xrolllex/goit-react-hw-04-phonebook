import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';

const List = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(contact => (
      <Contact
        key={contact.id}
        contact={contact}
        onDelete={() => onDeleteContact(contact.id)}
      />
    ))}
  </ul>
);

List.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default List;