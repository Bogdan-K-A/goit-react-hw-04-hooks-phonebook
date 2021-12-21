import React, { Component } from 'react'
import PropTypes from 'prop-types'
import s from './ContactForm.module.css'

export class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  }

  state = {
    name: '',
    number: '',
  }

  /* ------------------------- Записывает имя контакта ------------------------ */
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  /* -------------- выводит введённые данные по нажатию на кнопку ------------- */
  handleSubmit = (e) => {
    e.preventDefault()
    const { number, name } = this.state

    this.props.onAddContact(name, number)
    this.setState({ name: '', number: '' })
  }

  render() {
    const { name, number } = this.state
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label>
          {/* <p>Name</p> */}
          <input
            className={s.roundedInput}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Name:"
            required
            onChange={this.handleChange}
          />
        </label>
        <label>
          {/* <p>Number</p> */}
          <input
            className={s.roundedInput}
            type="tel"
            value={number}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Tel:"
            required
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" className={s.btnForm}>
          Add contact
        </button>
      </form>
    )
  }
}
