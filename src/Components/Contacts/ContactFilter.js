import React from 'react'
import PropTypes from "prop-types";
import styles from './Contacts.module.css';

const ContactFilter = ({ value, onChange }) => (
    <label>
        Filter contacts by name
        <input className={styles.search} type="text" value={value} onChange={onChange} />
    </label>
);


ContactFilter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};
export default ContactFilter;