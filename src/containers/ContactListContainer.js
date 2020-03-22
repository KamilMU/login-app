import React from 'react'
import { connect } from 'react-redux'
import ContactList from '../components/ContactList'
import { changeInput, addContact, deleteContact } from '../actions/SessionActions'

class ContactListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      name: '',
      secondName:'',
      email:'',
      searchName: '',
      filteredContacts: []
    }
  }
  componentDidMount() {
    this.setState({
      filteredContacts: this.props.contacts
    })
  }
  addContact = (e) => {
    e.preventDefault();
    if(this.state.name) {
      this.props.addContact(this.state.name, this.state.secondName);
    }
    this.setState({
      name: '',
      secondName: ''
    })
  } 

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  searchContactByInput = inputValue => {
    console.log(inputValue.length)
    this.setState({
      filteredContacts: this.props.contacts.filter(contact => {if (inputValue  !== -1) { return contact.name.toString().toLowerCase().includes(inputValue.toLowerCase())}})
    })
    console.log(this.props.contacts, this.state.filteredContacts, this.state.searchName)
  }

  handleInputSearch = inputSearch => {
    this.setState({ searchName: inputSearch})
  }
  render() {
    return <ContactList 
              name={this.state.name} 
              secondName={this.state.secondName} 
              searchName={this.state.searchName} 
              filteredContacts={this.state.filteredContacts}
              contacts={this.props.contacts}
              addContact={this.addContact}
              handleChange={this.handleChange}
              deleteContact={this.props.deleteContact}
              handleSearch={this.handleSearch}
              searchContactByInput={this.searchContactByInput}
              handleInputSearch={this.handleInputSearch}
            />
  }
}

const mapStateToProps = state => ({
  message: state.contacts.message,
  contacts: state.contacts.contacts
})

const mapDispatchToProps = dispatch => {
  console.log(changeInput, addContact)
  return {
    changeInput: (e) => {
      console.log('changed', e.target.value)
      const action = {type: 'CHANGE_INPUT_TEXT', message: e.target.value};
      dispatch(action)
    },
    addContact: (name, secondName) => dispatch(addContact(name, secondName)),
    deleteContact: (id) => dispatch(deleteContact(id)),
    // searchContact: (message) => dispatch(searchContact(message))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactListContainer)
