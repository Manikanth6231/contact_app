import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import {BrowserRouter as Router,Route} from 'react-router-dom'
import "./App.css";
import api from './api/contacts'
import Header from "./Components/Header";
import AddContact from "./Components/AddContact";
import ContactList from "./Components/ContactList";
import ContactCard from "./Components/ContactCard";
import ContactDetail from "./Components/ContactDetail";
import EditContact from "./Components/EditContact";
function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [searchTerm,setSearchTerm]=useState('');
  const [searchResults,setSearchResults]=useState([]);
  const addContactHandler = async (contact) => {
    console.log(contact);
    const request={
      id:uuid(),
      ...contact
    }
    const response=await api.post("/contacts",request)
    setContacts([...contacts, response.data]);
  };
  const updateContactHandler= async (contact)=>{
       const response=await api.put(`/contacts/${contact.id}`,contact)
      //  console.log(response);
      const {id,name,email}=response.data;
      setContacts(contacts.map(contact=>{
         return contact.id===id?{...response.data}:contact;
      }));

  };
const searchHandler=(searchTerm)=>{
console.log(searchTerm);
setSearchTerm(searchTerm);
if(searchTerm!=="")
{
  const newContactList=contacts.filter(contact=>{
     return Object.values(contact)
     .join("")
     .toLocaleLowerCase()
     .includes(searchTerm.toLocaleLowerCase());
  });
  setSearchResults(newContactList);
}
else{
  setSearchResults(contacts);
}
}
  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };


const retriveContacts=async ()=>{
  const response = await api.get("/contacts")
  // console.log(response)
  return response.data;
}

  useEffect(() => {
     
const getAllContacts= async ()=>{
  const AllContacts=await retriveContacts();
  if(AllContacts)setContacts(AllContacts);

}
getAllContacts();
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  
  return (
    <div className="ui container">
      <Router>
          {/* <Routes> */}
          <Header />
            <Route path="/" exact
             render={(props)=>(<ContactList 
              {...props}
              contacts={searchTerm.length<1 ? contacts : searchResults}
               getContactId={removeContactHandler}
              term={searchTerm}
              searchKeyword={searchHandler}
              />
             )}
             />
            <Route path='/add'
             render={(props)=>(<AddContact 
              {...props}
              addContactHandler={addContactHandler}/>
             )}
             />
             <Route path='/contact/${id}' component={ContactDetail}/>
             <Route 
             path='/Edit'
             render={(props)=>(<EditContact 
              {...props}
              updateContactHandler={updateContactHandler}/>
             )}
             />
          {/* </Routes> */}
      </Router>
     
    </div>
  );
}

export default App;