import css from './form.module.css'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { useRef } from 'react';
import { nanoid } from '@reduxjs/toolkit';

export default function Form(props) {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.contacts);

    const contactNameRef = useRef();
    const contactNumberRef = useRef();

    const onFormSubmit = event => {
        event.preventDefault();

        const contactName = contactNameRef.current.value;
        const contactNumber = Number(contactNumberRef.current.value);


        const existingContact = contacts.find(
            contact => contact.name === contactName
        );

        if (existingContact) {
            alert(`${contactName} is already in contacts`);
            contactNameRef.current.value = '';
            contactNumberRef.current.value = '';
            return;
        }

        dispatch(
            addContact({ name: contactName, phone: contactNumber, id: nanoid() })
        );

        console.log(contactNameRef.current.value, contactNumberRef.current.value);
        contactNameRef.current.value = '';
        contactNumberRef.current.value = '';
  };

    return (
            <form className={css.form} onSubmit={onFormSubmit}>
                <label>
                    Name
                    <input
                        className={css.form__input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        ref={contactNameRef}

                    />
                </label>
                <label>
                    Number
                    <input
                    className={css.form__input}
                        type="tel"
                        name="number"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    required
                    ref={contactNumberRef}
                    />
                </label>
                <button className={css.btn__submit}>Add Contact</button>
            </form>
        )
}
