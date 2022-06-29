import {React, useRef } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
const ContactList = (props) => {
  console.log(props);
    const inputEl=useRef("");
  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };


  const renderContactList =props.contacts.map((contact) => {
    // console.log(contact)
    return (
      
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
     
    );
  });
  const getSearchTerm=()=>{
    console.log(inputEl.current.value);
    props.searchKeyword(inputEl.current.value);
  }
  return (
    <div className="main">
        <h2 style={{margin:'3rem 0 2rem'}}>
            Contact List
        <Link to='/add'><button className="ui button blue right" >Add_contact</button></Link>
        </h2>
        <div className="ui search">
          <div className="ui icon input">
           <input
           ref={inputEl} 
           type="text" placeholder="Search Contacts" className="prompt"
           value={props.term}
           onChange={getSearchTerm}
           />
           <i className="search icon"></i>
          </div>

        </div>
        <div className="ui called list">
           {renderContactList.length>0?renderContactList:"No contacts avaliable"}
        </div>

    </div>
  )
};
export default ContactList