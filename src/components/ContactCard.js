import React from 'react'

function ContactCard(props) {
    return (
        <div className="contact-card">
            <img src={props.contact.imgUrl} alt="saka"/>
            <h3>{props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>{props.contact.email}</p>
        </div>

    )
}

export default ContactCard