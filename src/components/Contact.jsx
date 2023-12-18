import React from 'react';
import PropTypes from 'prop-types';


const Contact = ({ contact, onDelete }) => (
  <li>
    {contact.name}: {contact.number}
    <button onClick={onDelete}>Delete</button>
  </li>
);

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;