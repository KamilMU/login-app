import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';


const Contacts = ({ name, secondName, searchName, contacts, filteredContacts, addContact, deleteContact, searchContactByInput, handleChangeName, handleChangeSecondName, handleChangeSearchName }) => {
  
  return (
    <div className="contact-list">
      <h1>Контакты</h1>
      <ContactForm 
        name={name}
        secondName={secondName}
        searchName={searchName}
        addContact={addContact}
        searchContactByInput={searchContactByInput}
        handleChangeName={handleChangeName}
        handleChangeSecondName={handleChangeSecondName}
        handleChangeSearchName={handleChangeSearchName}
      />
      <ContactList
        searchName={searchName}
        contacts={contacts}
        filteredContacts={filteredContacts}
        deleteContact={deleteContact}
      />
    </div>
  )
}

export default Contacts
