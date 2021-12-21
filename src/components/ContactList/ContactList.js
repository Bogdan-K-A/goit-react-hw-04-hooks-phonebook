import PropTypes from 'prop-types'
import { ContactElem } from '../ContactElem/ContactElem'
import s from '../ContactElem/ContactElem.module.css'

export const ContactList = ({ contacts, onContactDelete }) => {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li className={s.contactItem} key={id}>
            <ContactElem
              name={name}
              number={number}
              onContactDelete={() => {
                onContactDelete(id)
              }}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

ContactList.propTypes = {
  onContactDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
}
