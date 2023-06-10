import {Text, TextList, Button, Box} from './ContactList-styled'

export const ContactLIst = ({contacts, filter, onFilterChange, onDelete}) =>{
    const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()));
return(
<Box>
<h2>Contacts</h2>
   <Text>Find contacts by name</Text>
        <input
        onChange={onFilterChange}
          type="text"
          name="filter"
          value={filter}
        />
        <TextList>
          {filteredContacts.map((contact) => (
            <li key={contact.id}>
              {contact.name} : {contact.number}
              <Button onClick={() => onDelete(contact.id)}>Delete</Button>
            </li>
          ))}
        </TextList>
</Box>
)
}