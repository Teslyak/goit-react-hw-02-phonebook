import React from 'react'

export const ContactListItem = ({ item: { id, contact, name } }) => {
    return (
        <li ley={id}>
            <p>{name}</p>
    </li>
  )
}
