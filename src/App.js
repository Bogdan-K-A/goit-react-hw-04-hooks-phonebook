import { useState, useEffect } from 'react'
import shortid from 'shortid'
import { Container } from './components/container/Container'
import { ContactList } from './components/ContactList/ContactList'
import { ContactForm } from './components/ContactForm/ContactForm'
import { ContactFilter } from './components/ContactFilter/ContactFilter'

function App() {
  const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState('')

  /* -------------------------- Запись в localStorage ------------------------- */

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts'))

    if (contacts) {
      setContacts(contacts)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  /* ---------------------- Добавление контакта в список ---------------------- */
  const addContact = (name, number) => {
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
      setContacts((contacts) => [contact, ...contacts])
    }
  }

  /* ----------------------- Удаление контакта из списка ---------------------- */
  const contactDelete = (contactId) => {
    setContacts((contacts) =>
      contacts.filter((contact) => contact.id !== contactId),
    )
  }

  /* ---------------------------- Фильтр контактов ---------------------------- */
  const contactsFilter = (e) => {
    const { value } = e.target
    setFilter(value)
  }

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase()
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter),
    )
  }

  const visibleContacts = getVisibleContacts()

  return (
    <Container>
      <h1>Phoneboock</h1>
      <ContactForm onAddContact={addContact} />

      <h2>Contacts</h2>
      <ContactFilter value={filter} onChange={contactsFilter} />
      <ContactList contacts={visibleContacts} onContactDelete={contactDelete} />
    </Container>
  )
}

export default App
