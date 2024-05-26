import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import css from "./Contact.module.css";
export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <>
      <div className={css.listItemContainer}>
        <span className={css.listItemPice}>
          <FaUser /> <p className={css.contactName}>{name} </p>
        </span>
        <span className={css.listItemPice}>
          <FaPhone />
          <p>{number}</p>
        </span>
      </div>
      <button
        className={css.deleteButton}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </>
  );
}
