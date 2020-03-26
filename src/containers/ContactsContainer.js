import React from 'react'
import { connect } from 'react-redux'
import Contacts from '../components/Contacts'
import { addContact, deleteContact } from '../actions/SessionActions'

class ContactsContainer extends React.Component {

  addContact = (e) => {
    e.preventDefault();
    if(this.props.name) {
      this.props.addContact(this.props.name, this.props.secondName);
    }
  } 

  handleChangeName = text => {
    this.props.changeInputName(text)
  }

  handleChangeSecondName = text => {
    this.props.changeInputSecondName(text)
  }

  handleChangeSearchName = inputSearch => {
    console.log(inputSearch)
    this.props.changeInputSearchName(inputSearch)
  }

  render() {
    return <Contacts 
              name={this.props.name} 
              secondName={this.props.secondName} 
              searchName={this.props.searchName} 
              filteredContacts={this.props.filteredContacts}
              contacts={this.props.contacts}
              addContact={this.addContact}
              deleteContact={this.props.deleteContact}
              handleChangeName={this.handleChangeName}
              handleChangeSecondName={this.handleChangeSecondName}
              handleChangeSearchName={this.handleChangeSearchName}
            />
  }
}

const mapStateToProps = state => ({
  name: state.contacts.name,
  secondName: state.contacts.secondName,
  searchName: state.contacts.searchName,
  contacts: state.contacts.contacts,
  filteredContacts: state.contacts.contacts.filter(contact => contact.name.toString().startsWith(state.contacts.searchName))
})

const mapDispatchToProps = dispatch => {
  return {
    changeInputName: (text) => {
      console.log('changed', text)
      const action = { type: 'CHANGE_INPUT_NAME', name: text };
      dispatch(action)
    },
    changeInputSecondName: (text) => {
      const action = { type: 'CHANGE_INPUT_SECONDNAME', secondName: text };
      dispatch(action)
    },
    changeInputSearchName: (text) => {
      const action = { type: 'CHANGE_INPUT_SEARCHNAME', searchName: text };
      dispatch(action)
    },
    addContact: (name, secondName) => dispatch(addContact(name, secondName)),
    deleteContact: (id) => dispatch(deleteContact(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer)
