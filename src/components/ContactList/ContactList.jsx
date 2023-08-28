import { ContactListItem } from 'components/ContactListIthem/ContactListItem'
import React from 'react'

export const ContactList = (props) => {
    return (
        <>
            <h2>Contacts</h2>
        <ul>
        
            {props.addContact.map(el => (
                <ContactListItem item={el} />
            ))}
            </ul>
        </>
   )
 
}
