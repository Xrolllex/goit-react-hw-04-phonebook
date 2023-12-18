import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  }

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            className="name-input"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$ "
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
            value={name}
            onChange={this.handleInputChange}
          />
        </label>

        <label>
          Number
          <input
            className="number-input"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
