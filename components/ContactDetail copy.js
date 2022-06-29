import React from "react";
import { Link } from "react-router-dom";
import user from "../Components/images/user.png"

const ContactDetail = (props) => {
  const {id,name, email } = props.location.state.contact;
// console.log(props);
console.log(props);
  return (
      <div className="main">
          <div className="ui  centered">
           <img src={user} alt="user"/>
            <div>
              <div className="content">
               <div className="header">{name}</div>
               <div className="content">{email}</div>
              </div>
            </div>
          </div>
          <Link to={'/'}>
           <button className="ui button blue center">
            Back to Contacts
          </button>
          </Link>
         
      </div>
  );
};

export default ContactDetail;