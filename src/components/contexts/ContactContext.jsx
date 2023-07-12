import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { API } from "../../utils/consts";

export const contactContext = createContext();
export function useContactContext() {
  return useContext(contactContext);
}

const ContactContext = ({ children }) => {
  const [contact, setContact] = useState([]);
  const [oneContact, setOneContact] = useState(null);

  async function getContact() {
    const { data } = await axios.get(API);
    console.log(data, "dsf");
    setContact(data);
  }

  async function addContact(newContact) {
    await axios.post(API, newContact);
    getContact();
  }

  async function deleteContact(id) {
    await axios.delete(`${API}/${id}`);
    getContact();
  }

  async function getOneContact(id) {
    const { data } = await axios.get(`${API}/${id}`);
    setOneContact(data);
  }

  async function editContact(id, newData) {
    await axios.patch(`${API}/${id}`, newData);
  }
  const values = {
    contact,
    oneContact,
    getContact,
    addContact,
    deleteContact,
    getOneContact,
    editContact,
  };
  return (
    <contactContext.Provider value={values}>{children}</contactContext.Provider>
  );
};

export default ContactContext;
