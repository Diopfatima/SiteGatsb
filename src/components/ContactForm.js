import React from 'react'

class ContactForm extends React.Component {

  render() {
    const formStyle = {
      textAlign: 'left'
    }
    const buttonsStyle = {
      margin: '1rem',
      textAlign: 'center',
    }
    return (
        <form method="post" action="#">
        <div className="field half first">
    <label htmlFor="name">Name</label>
    <input type="text" name="name" id="name" />
  </div>
  <div className="field half">
    <label htmlFor="email">Email</label>
    <input type="text" name="email" id="email" />
  </div>
  <div className="field">
    <label htmlFor="message">Message</label>
    <textarea name="message" id="message" rows="6" />
  </div>
  <ul className="actions">
    
      <input type="submit" value="Submit"  className="special" />
    
   
  </ul>
      </form>)
  }
}

export default ContactForm