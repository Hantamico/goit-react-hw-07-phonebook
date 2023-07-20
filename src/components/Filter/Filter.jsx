
import { useDispatch } from "react-redux";
import css from "./filter.module.css"
import { useRef } from "react";
import { filterContacts } from "redux/contactsSlice";

export default function Filter() {
  const dispatch = useDispatch();

  const filterNameRef = useRef();

  const handleInputValue = () => {
    const filterValue = filterNameRef.current.value;

    dispatch(filterContacts(filterValue));
  };
    return (
        <div className={css.filter__container}>
            <h3>Filter contacts by name</h3>
            <input
                type="text"
                onChange={handleInputValue}
                ref={filterNameRef}
            />
        </div>
    )
}

