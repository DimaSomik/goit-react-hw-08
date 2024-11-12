import css from './ContactList.module.css';
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({name, number, buttonFunc}) => {
    return (
        <div className={css.ContactBox}>
            <div>
                <p><IoPerson /> {name}</p>
                <p><FaPhoneAlt /> {number}</p>
            </div>
            <button className={css.ContactButton} onClick={buttonFunc}>Delete</button>
        </div>
    );
}

const ContactList = ({list, handleDelete}) => {
    return (
        <ul className={css.ContactListBox}>
            {list.map((item) => {
                return <li key={item.id}><Contact name={item.name}
                                                  number={item.number}
                                                  buttonFunc={() => handleDelete(item.id)}
                /></li>
            })}
        </ul>
    );
}

export default ContactList;