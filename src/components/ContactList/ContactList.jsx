import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts, selectNameFilter, state } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectNameFilter) || "";
  console.log(filters);
  const arrayOfContacts = Object.values(contacts);
  console.log(arrayOfContacts);
  const stateD = useSelector(state);

  console.log(stateD);
  // const visibleContacts = arrayOfContacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filters.toLowerCase())
  // );

  const visibleContacts = arrayOfContacts.filter((contact) => {
    if ("id" in contact && "name" in contact && "number" in contact) {
      if (
        typeof contact.id === "string" &&
        typeof contact.name === "string" &&
        typeof contact.number === "string"
      ) {
        return contact.name.toLowerCase().includes(filters.toLowerCase());
      }
    }
    return false;
  });

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => {
        return (
          <li className={css.listItem} key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
