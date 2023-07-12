import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useContactContext } from "../contexts/ContactContext";

const EditContactPage = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const { oneContact, getOneContact, editContact } = useContactContext();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getOneContact(id);
  }, []);

  useEffect(() => {
    if (oneContact) {
      setName(oneContact.name);
      setSurname(oneContact.surname);
      setPhone(oneContact.phone);
    }
  }, [oneContact]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !surname.trim() || !phone.trim()) {
      return;
    }
    const newContact = {
      name,
      surname,
      phone,
    };
    editContact(id, newContact);
    navigate("/");
  }
  return (
    <div>
      <h1 className="text-center mt-4">Add Todo</h1>
      <Form onSubmit={handleSubmit} className="w-50 mx-auto">
        <Form.Control
          className="mt-2  text-center"
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="enter name"
        />
        <Form.Control
          className="mt-2 text-center"
          onChange={(e) => setSurname(e.target.value)}
          value={surname}
          type="text"
          placeholder="enter surname"
        />
        <Form.Control
          className="mt-2  text-center"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          type="number"
          placeholder="enter phone"
        />
        <Button
          className=" mx-auto d-block px-5 mt-2"
          variant="dark"
          type="submit"
        >
          Add
        </Button>
      </Form>
    </div>
  );
};

export default EditContactPage;
