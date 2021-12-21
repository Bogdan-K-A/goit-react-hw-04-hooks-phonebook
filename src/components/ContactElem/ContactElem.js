import PropTypes from 'prop-types'
import s from './ContactElem.module.css'

export const ContactElem = ({ name, number, onContactDelete }) => {
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <button className={s.btnItem} type="button" onClick={onContactDelete}>
        Delete
      </button>
    </>
  )
}

ContactElem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onContactDelete: PropTypes.func.isRequired,
}
