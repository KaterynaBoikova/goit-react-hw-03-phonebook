import React, {Component} from 'react';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from "./Components/Contacts/ContactList";
import ContactFilter from "./Components/Contacts/ContactFilter";
import { v4 as uuidv4 } from 'uuid';

class App extends Component{
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',
    }
    addContact=contact=>{
        if(this.state.contacts.find(cont=>cont.name===contact.name)){
            alert(contact.name+'is already in contacts');
            return;
        }
        contact.id=uuidv4();
        this.setState(({ contacts }) => ({
            contacts: [contact, ...contacts],
            }));
        };
    filterInput=event=>{
        this.setState({ filter: event.currentTarget.value });
    };
    filteredContacts =()=>{
        const normalizedFilter = this.state.filter.toLowerCase();
        return this.state.contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),
        );
    };
    deleteContact=(contactID)=>{
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(contact => contact.id !== contactID),
        }));
    };
  render() {
    return(
        <div>
            <h2>Phonebook</h2>
            <ContactForm submitted={this.addContact}/>
            <h2>Contacts</h2>
            <ContactFilter value={this.state.filter} onChange={this.filterInput}/>
            {!this.state.filter?<ContactList contacts={this.state.contacts} onDeleteContact={this.deleteContact}/>:
            <ContactList contacts={this.filteredContacts()} onDeleteContact={this.deleteContact}/>}
        </div>
    )
  }
};

export default App;
