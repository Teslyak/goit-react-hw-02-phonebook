import React from 'react'

export const ContactListItem = ({ item: { id, number, name } }) => {
    return (
        <li key={id}>
            <p>{name}: {number}</p>
    </li>
  )
}
