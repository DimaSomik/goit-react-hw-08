import ContactForm from "../components/ContactForm";
import SearchBox from "../components/SearchBox";
import ContactList from "../components/ContactList";
import css from './ContactPage.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/asyncActions";

const ContactPage = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.contacts);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div className={css.MainAppBox}>
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            {loading && <p>Loading...</p>}
            {error && <p>Unexpected error occurred: {error}</p>}
            <ContactList />
        </div>
    );
};

export default ContactPage;