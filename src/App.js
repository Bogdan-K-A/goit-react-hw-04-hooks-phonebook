import { Component } from 'react'
import shortid from 'shortid'
import { Container } from './components/container/Container'
import { ContactList } from './components/ContactList/ContactList'
import { ContactForm } from './components/ContactForm/ContactForm'
import { ContactFilter } from './components/ContactFilter/ContactFilter'

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  /* ---------------------- Добавление контакта в список ---------------------- */
  addContact = (name, number) => {
    const { contacts } = this.state
    const reLockInput = contacts.find((contact) => contact.name === name)

    /* ------------------------ условие запрета на повторный ввод ----------------------- */
    if (reLockInput) {
      alert('Такой контакт уже есть в списке')
    } else {
      /* ------------------------ Добавляет контакт в список ----------------------- */
      const contact = {
        name,
        number,
        id: shortid.generate(),
      }
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }))
    }
  }

  /* ----------------------- Удаление контакта из списка ---------------------- */
  contactDelete = (contactId) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== contactId),
    }))
  }

  /* ---------------------------- Фильтр контактов ---------------------------- */
  contactsFilter = (e) => {
    const { value } = e.target
    this.setState({ filter: value })
  }

  getVisibleContacts = () => {
    const { contacts, filter } = this.state
    const normalizedFilter = filter.toLowerCase()
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter),
    )
  }

  render() {
    const { filter } = this.state
    const visibleContacts = this.getVisibleContacts()

    return (
      <Container>
        <h1>Phoneboock</h1>
        <ContactForm onAddContact={this.addContact} />

        <h2>Contacts</h2>
        <ContactFilter value={filter} onChange={this.contactsFilter} />
        <ContactList
          contacts={visibleContacts}
          onContactDelete={this.contactDelete}
        />
      </Container>
    )
  }
}

export default App
