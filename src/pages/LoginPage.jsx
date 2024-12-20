import { Formik, Form, Field} from 'formik';
import { ErrorMessage } from 'formik';
import css from './LoginPage.module.css';
import { useId } from 'react';
import * as Yup from 'yup';

const LoginPage = () => {
    const emailID = useId();
    const passwordID = useId();

    const ContactSchema = Yup.object({
        email: Yup.string()
                .matches(/^[A-Za-z\s]+$/, 'Email must contains only letters and spaces.')
                .min(3, "Name is too short")
                .max(50, "Name is too long")
                .required("Email is Required"),
        password: Yup.string()
                .matches(/^[0-9]+$/, 'Phone password must contains only digits.')
                .min(9, "Password must contain 9 digits")
                .max(9, "Password must contain 9 digits")
                .required("Password is Required"),
    });

    const handleSubmit = (values, actions) => {   
        console.log(values);
        actions.resetForm();
    };

    return (
        <div className={css.FormMainBox}>
            <Formik initialValues={{email: "", password: ""}} onSubmit={handleSubmit} validationSchema={ContactSchema}>
                <Form className={css.FormBox}>
                    <div>
                    <label htmlFor={emailID}>Email</label>
                    <Field type="text" 
                           name="email" 
                           id={emailID}
                           className={css.NameField}
                           />
                    <ErrorMessage name="email" as="span" className={css.Error}/>
                    </div>

                    <div>
                    <label htmlFor={passwordID}>Password</label>
                    <Field type="text" 
                           name="password" 
                           id={passwordID}
                           className={css.NumberField}
                           />
                    <ErrorMessage name="password" as="span" className={css.Error}/>
                    </div>

                    <button type="submit" className={css.FormButton}>Log in</button>
                </Form>
            </Formik>
        </div>
    );

};

export default LoginPage;