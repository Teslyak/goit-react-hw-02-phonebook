import { Component } from 'react';
import { AddContact } from './AddContact/AddContact'
import { ContactList } from './ContactList/ContactList';


export class App extends Component {
  state = {
  contacts: [],
  }
  
  addContact = contact => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact]
    }))
  }

  render() {
   
    return (
      <>
        <AddContact addNewContact={this.addContact} /> 
        <ContactList addContact={this.state.contacts} />
      </>
      
  )}
  
}


