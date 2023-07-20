import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Form from "./Form/Form";
import Contacts from "./Contacts/Contacts";
import Filter from "./Filter/Filter";



export default function App() {

  const dispatch = useDispatch();
  useEffect(() => {
  dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(state => state.isLoading);
  const errorState = useSelector(state => state.error);
  
  return (
      <div>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <Filter />
         {isLoading && <b>Request in progress...</b>}
        {!errorState && <Contacts/>}
      </div>
      
    );
};