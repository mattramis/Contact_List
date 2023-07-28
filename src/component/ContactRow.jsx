import React from "react";

export default function ContactRow({ contact }) {
  return (
    <tr>
      <td>{`${contact.name.title} ${contact.name.first} ${contact.name.last}`}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
