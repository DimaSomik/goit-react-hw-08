import { useEffect, useState } from 'react'
import ContactList from './components/ContactList';
import SearchBox from './components/SearchBox';
import ContactForm from './components/ContactForm';
import './App.css'
import css from './App.module.css';

function App() {
  const fetchData = () => {
    try {
      const savedContacts = localStorage.getItem("contacts");
      return savedContacts ? JSON.parse(savedContacts) : [];  
    } catch (error) {
      throw new Error("Something went wrong:", error);
    }
  }

  const [contacts, setContacts] = useState(fetchData);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // const [contacts, setContacts] = useState(
  //   [
  //     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  //     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  //     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  //     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  //   ]
  // );

  const [searchQuery, setSearch] = useState("");

  const addContact = (newContact) => {
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
