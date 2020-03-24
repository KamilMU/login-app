import React from 'react';
import { Button, Input } from 'antd'

const ContactForm = ({ name, searchName, secondName, addContact, handleChange, handleInputSearch, searchContactByInput, handleKeyPress }) => {
    return (
        <>
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
            </form>
        </>
    )
}

export default ContactForm;