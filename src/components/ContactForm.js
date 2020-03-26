import React from 'react';
import { Button, Input } from 'antd'

const ContactForm = ({ name, searchName, secondName, addContact, handleChangeName, handleChangeSecondName, handleChangeSearchName }) => {
    return (
        <>
            <form onSubmit={addContact} className="contact_form">
                <Input
                    placeholder="Поиск контактов"
                    name="searchName"
                    className="contact_search"
                    type="text"
                    value={searchName}
                    onChange={e => handleChangeSearchName(e.target.value)}
                />
                <Input
                    placeholder="Введите имя контакта..."
                    name="name"
                    className="contact_input"
                    type="text" 
                    value={name}
                    onChange={e => handleChangeName(e.target.value)} 
                />
                <Input
                    placeholder="Введите фамилию контакта..."
                    name="secondName"
                    className="contact_input"
                    type="text"
                    value={secondName}
                    onChange={e => handleChangeSecondName(e.target.value)}
                />
                <Button className="contact_button" onClick={addContact}>Add</Button>
            </form>
        </>
    )
}

export default ContactForm;