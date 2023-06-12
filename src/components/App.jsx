import { Component } from "react"
import { Form } from "./Form/Form"
import { ContactLIst } from "./ContactList/ContactList";

const LS_KEY = 'contacts'

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }
  
  componentDidMount = () => {
  const savedContacts = localStorage.getItem(LS_KEY);
  if (savedContacts) {
    this.setState({ contacts: JSON.parse(savedContacts) });
  }
  };

  componentDidUpdate = (_, prevState) => {
  const {contacts} = this.state;
  if(prevState.contacts !== contacts){
    localStorage.setItem(LS_KEY, JSON.stringify(contacts))
  }
  }
  addContact = (contact) => {
  const existingContact = this.state.contacts.some(({name}) => contact.name.toLowerCase() === name.toLowerCase());
  if (existingContact) {
    alert('This contact already exists in the phonebook!');
    return;
  }
  this.setState({
    contacts: [...this.state.contacts, contact]
  });}
  onFilterChange = (e) => {
      this.setState({ filter: e.target.value });
    };
  onDelete = (id) => {
      this.setState((prevState) => ({
        contacts: prevState.contacts.filter((contact) => contact.id !== id),
      }));
    };
  render(){
  return (
    <>
    <Form addContact={this.addContact} onChange={this.onChange}/>
    <ContactLIst contacts={this.state.contacts} filter={this.state.filter} onFilterChange={this.onFilterChange} onDelete={this.onDelete}/>
    </>
  )
}
};

export default App;
