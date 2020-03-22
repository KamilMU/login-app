import React from 'react'
import { Button, Input } from 'antd'

const ContactList = ({ name, secondName, searchName, contacts, filteredContacts, addContact, deleteContact, searchContactByInput, handleChange, handleKeyPress, handleInputSearch}) => {
  
  return (
    <div className="contact-list">
      <h1>Контакты</h1>
      <form onSubmit={addContact} className="contact_form">
        <Input
          placeholder="Поиск контактов"
          name="searchName"
          className="contact_search"
          type="text"
          value={searchName}
          onChange={e => {return handleInputSearch(e.target.value), searchContactByInput(e.target.value)}}
          onKeyPress={handleKeyPress}
          />
        <Input
          placeholder="Введите имя контакта..."
          name="name"
          className="contact_input"
          type="text" 
          value={name}
          onChange={handleChange} 
        />
        <Input
          placeholder="Введите фамилию контакта..."
          name="secondName"
          className="contact_input"
          type="text"
          value={secondName}
          onChange={handleChange}
        />
        <Button className="contact_button" onClick={addContact}>Add</Button>
        {searchName ? filteredContacts.map(filteredContact => 
          <div key={filteredContact.id} className="contact">
            <div className="contact__name">
              <div contentEditable="true" suppressContentEditableWarning="true"><b>Имя:</b> {filteredContact.name}</div>
              <div contentEditable="true" suppressContentEditableWarning="true"><b>Фамилия: </b> {filteredContact.secondName}</div>
            </div>
            <div>
              <Button className="delete_button" onClick={() => deleteContact(filteredContact.id)}>&times;</Button>
            </div>
          </div>) : contacts.map(contact => 
          <div key={contact.id} className="contact">
            <div className="contact__name">
              <div contentEditable="true" suppressContentEditableWarning="true"><b>Имя: </b>{contact.name}</div>
              <div contentEditable="true" suppressContentEditableWarning="true"><b>Фамилия: </b>{contact.secondName}</div>
            </div>
            <div>
              <Button className="delete_button" onClick={() => deleteContact(contact.id)}>&times;</Button>
            </div>
          </div>
        ) }
      </form>
    </div>
  )
}

export default ContactList
