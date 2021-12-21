import PropTypes from 'prop-types'
import s from './ContactFilter.module.css'

export const ContactFilter = ({ value, onChange }) => (
  <label className={s.filterInputBox}>
    <input
      className={s.filterInput}
      placeholder="Find contacts by name"
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
)

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
