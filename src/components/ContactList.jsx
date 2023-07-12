import React, { useEffect } from "react";
import ContactItem from "./ContactItem";
import { ListGroup } from "react-bootstrap";
import { useContactContext } from "./contexts/ContactContext";

const ContactList = () => {
  const { contact, getContact } = useContactContext();
  useEffect(() => {
    getContact();
  }, []);
  return (
    <div className="text-center">
      <h1>Contact Book</h1>
      <ListGroup>
        {contact.map((item) => (
          <ContactItem key={item.key} item={item} />
        ))}
      </ListGroup>
    </div>
  );
};

export default ContactList;
