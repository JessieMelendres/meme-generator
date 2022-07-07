import React from 'react'

function ContactCard(props){
    return(
        <div className='contact-card'>
           <h3>{props.contact.name}</h3>
           <p>Phone:{props.contact.phone}</p>
           <p>Email Address: {props.contact.email}</p>
        </div>
    )
}

export default ContactCard