import React from "react";
import ContactList from "./ContactList";
class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    // console.log(props.location);
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    // console.log(this.props);
    this.props.history.push('/');
    
  };
  render() {
    return (
      <div className="ui main">
        <h2 style={{margin:'4rem 0rem 1rem'}}>Add Contact</h2>
        <form className="ui form" onSubmit={this.add }>
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
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}
export default AddContact;