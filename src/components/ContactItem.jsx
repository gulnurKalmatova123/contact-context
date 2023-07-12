import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useContactContext } from "./contexts/ContactContext";

const ContactItem = ({ item }) => {
  const navigate = useNavigate();
  const { deleteContact } = useContactContext();
  return (
    <div className="text-center">
      <ListGroup.Item>
        {item.name} - {item.surname} - {item.phone}
        <div className="mt-4">
          <Button
            variant="danger"
            className="ms-3 "
            onClick={() => deleteContact(item.id)}
          >
            delete
          </Button>
          <Button
            variant="dark"
            className="ms-2"
            onClick={() => navigate(`/edit/${item.id}`)}
          >
            edit
          </Button>
        </div>
      </ListGroup.Item>
    </div>
  );
};

export default ContactItem;
