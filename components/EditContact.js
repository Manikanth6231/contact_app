import React from "react";
import ContactList from "./ContactList";
class EditContact extends React.Component {
 constructor(props) {
   super(props)
    const {id,name,email}=props.location.state.contact;
   this.state = {
      id:id,
      name:name,
      email:email,
   }
 }

  update= (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    // console.log(props.location);
    console.log(this.state);
    this.props.updateContactHandler(this.state);
    this.setState({ name: "", email: "" });
    // console.log(this.props);
    this.props.history.push('/');
    
  };
  render() {
    return (
      <div className="ui main">
        <h2 style={{margin:'4rem 0rem 1rem'}}>Edit Contact</h2>
        <form className="ui form" onSubmit={this.update }>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue">Edit</button>
        </form>
      </div>
    );
  }
}
export default EditContact;