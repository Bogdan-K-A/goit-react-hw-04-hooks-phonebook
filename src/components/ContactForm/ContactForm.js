import { useState } from 'react'
import PropTypes from 'prop-types'
import s from './ContactForm.module.css'

export function ContactForm({ onAddContact }) {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  /* ------------------------- Записывает имя контакта ------------------------ */
  const handleChange = (e) => {
    const { name, value } = e.target

    switch (name) {
      case 'name':
        setName(value)
        break
      case 'number':
        setNumber(value)
        break

      default:
        return
    }
  }
  /* -------------- выводит введённые данные по нажатию на кнопку ------------- */
  const handleSubmit = (e) => {
    e.preventDefault()

    onAddContact(name, number)
    setName('')
    setNumber('')
  }

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label>
        <input
          className={s.roundedInput}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Name:"
          required
          onChange={handleChange}
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
          onChange={handleChange}
        />
      </label>
      <button type="submit" className={s.btnForm}>
        Add contact
      </button>
    </form>
  )
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
}
