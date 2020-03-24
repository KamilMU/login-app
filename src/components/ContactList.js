import React from 'react';
import { Button } from 'antd'

const ContactList = ({ searchName, contacts, filteredContacts, deleteContact }) => {
    return (
        <div>
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
        </div>
    )
}

export default ContactList;