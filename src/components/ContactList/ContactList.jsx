import { ContactListItem } from 'components/ContactListIthem/ContactListItem'
import React from 'react'

export const ContactList = (props) => {
    return (
        <ul>
        
            {props.addContact.map(el => (
                <ContactListItem item={el} />
            ))}
       </ul>
   )
 
}
