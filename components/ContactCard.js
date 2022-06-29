import React from "react";
import { Link } from "react-router-dom";
import user from "../Components/images/user.png"

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  // console.log(props)
  return (
    <div className="item" >
        
       <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link to={{pathname:'/contact/${id}',state:{contact:props.contact}}}>
          <div className="header">{name}</div>
         <div>{email}</div>
        </Link>
       
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px",margin:'8px 40%'}}
        onClick={() => props.clickHander(id)}
      
      ></i>
      <Link to={{pathname:'/Edit',state:{contact: props.contact}}}>
      <i
        className="edit alternate outline icon"
        style={{ color: "blue", marginTop: "7px",margin:'8px 40%'}}
      ></i>
      </Link>
     
      
    </div>
  );
};

export default ContactCard;