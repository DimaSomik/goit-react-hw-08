import { Formik, Form, Field} from 'formik';
// import { ErrorMessage } from 'formik';
import css from './ContactForm.module.css';
import { useId } from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
// import * as Yup from 'yup';

const ContactForm = ({addContact}) => {
    const nameID = useId();
    const numberID = useId();
    const [name, setName] = useState({
        id: nanoid(),
        name: '',
        number: ''
    });

    /* Nie wiem dlaczego, ale ten schemat walidacji nie działa prawidłowo, mimo, ze jest taki sam jak w konspekcie */
    // const ContactSchema = Yup.object().shape({
    //     name: Yup.string().min(3, "Name is too short").max(50, "Name is too long").required("Name is Required"),
    //     number: Yup.string().min(9, "Number must contain 7 digits").max(9, "Number must contain 7 digits").required("Number is Required")
    // });

    const handleSubmit = () => {   
        addContact(name);
        setName({
            id: nanoid(),
            name: '',
            number: ''
        })
    };

    return (
        <Formik initialValues={{}} onSubmit={handleSubmit}>
                <Form className={css.FormBox}>
                    <div>
                    <label htmlFor={nameID}>Name</label>
                    <Field type="text" 
                           name="name" 
                           id={nameID}
                           value={name.name}
                           onChange={(e) => {setName((prev) => {return {...prev, name: e.target.value}})}} 
                           className={css.NameField}
                           />
                    {/* <ErrorMessage name="name" as="span" className={css.Error}/> */}
                    </div>

                    <div>
                    <label htmlFor={numberID}>Number</label>
                    <Field type="text" 
                           name="number" 
                           id={numberID}
                           value={name.number}
                           onChange={(e) => {setName((prev) => {return {...prev, number: e.target.value}})}} 
                           className={css.NumberField}
                           required/>
                    {/* <ErrorMessage name="number" as="span" className={css.Error}/> */}
                    </div>

                    <button type="submit" className={css.FormButton}>Add contact</button>
                </Form>
        </Formik>
    );
};

export default ContactForm;