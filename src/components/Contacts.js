import React from "react"; 
import ContactList from "./ContactList";


function Contacts(props,onExtractLetter) {
  return (
    <nav>
      <h2>Contacts</h2>
      <ContactList contacts={props.contacts} onExtractLetter={onExtractLetter}/>
    </nav>
  )
}
export default Contacts;