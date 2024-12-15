import { useEffect, useState } from 'react'
import ContactList from './components/ContactList';
import SearchBox from './components/SearchBox';
import ContactForm from './components/ContactForm';
import './App.css'
import css from './App.module.css';
import { nanoid } from 'nanoid';

function App() {
  const [contacts, setContacts] = useState(() => {
    try {
      const savedContacts = localStorage.getItem("contacts");
      return savedContacts ? JSON.parse(savedContacts) : [];  
    } catch (error) {
      console.log(error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [searchQuery, setSearch] = useState("");

  const addContact = ({name, number}) => {
    const lowerName = name.toLowerCase();
    const isDuplicate = contacts.some((contact) => contact.name.toLowerCase() === lowerName || contact.number === number);

    if (isDuplicate) {
      alert('This particular contact already exists.');
      return;
    }

    const newContact = { id: nanoid(), name, number };

    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactID) => {
    setContacts((prev) => prev.filter((person) => person.id !== contactID));
  };

  const filterList = contacts.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={css.MainAppBox}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact}/>
      <SearchBox searchValue={searchQuery} updateSearch={setSearch}/>
      <ContactList list={filterList} handleDelete={deleteContact}/>
    </div>
  )
}

export default App