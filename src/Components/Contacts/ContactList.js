import React from 'react'
import PropTypes from "prop-types";
import styles from './Contacts.module.css';


const ContactList = ({contacts, onDeleteContact})=>(
    <ul>
        {contacts.map(({id, name, number})=>(
                <li key={id}>
                    <p className={styles.contact}>{name}: {number}</p>
                    <button className={styles.delete} type='button' onClick={() => onDeleteContact(id)}>Delete</button>
                </li>
            )
        )}
    </ul>
);
ContactList.propTypes = {
    onDeleteContact: PropTypes.func,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.number,
        })),
};

export default ContactList;