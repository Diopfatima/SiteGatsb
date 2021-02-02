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
    const thumb = document.getElementById('email')
    return (
        <form  method="post" action="#">
        <div className="field half first">
    <label htmlFor="name">Nom</label>
    <input type="text" name="name" placeholder="Entrer votre nom" id="name" />
  </div>
  <div className="field half">
    <label id="1">Email</label>
    <input type="text" name="email"  placeholder="nom@email.com" id="email" />
  </div>
  <div className="field">
    <label htmlFor="message">Message</label>
    <textarea name="message" id="message" rows="6" />
  </div>
  <ul className="actions">
         <input type="submit" value="Submit"  className="special" onClick = {() =>window.alert("Votre email est") + thumb}/>
    
   
  </ul>
      </form>)
  }
}

export default ContactForm