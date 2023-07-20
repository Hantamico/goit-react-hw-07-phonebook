import css from './contacts.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export default function Contacts() {
    const dispatch = useDispatch();

    const contacts = useSelector(state => state.contacts.contacts);

   const filter = useSelector(state => state.contacts.filter);
  

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  
    const handleDeleteContact = contactId => {
      dispatch(deleteContact(contactId));
    };

    return (
        <ul>
          {filteredContacts.map((contact, id) => 
              <li className={css.contacts__item} key={id}>
                   <p>{contact.name}: {contact.phone}</p>
                  <button className={css.delete__btn} onClick={() => handleDeleteContact(contact.id)}>Delete</button>
              </li>
          )}
        </ul>
    )
        
}

