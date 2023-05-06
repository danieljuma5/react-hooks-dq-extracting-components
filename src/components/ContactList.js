import React from "react";

const ContactList = (props) => {

  function handleExtractWord(word) {
    const extractedWord = word.split('').slice(0,1).toString()
    return extractedWord;
  }
  const renderContacts = props.contacts.map((contact) => (
    <ul className="contacts" key={contact.id}>
          <li className="contact" >
            <div className="icon">{handleExtractWord(contact.name)}</div>
            {contact.name}
          </li>
        </ul>
  ))
  return (
    <>
    {renderContacts}
    </>
  )
}

export default ContactList;