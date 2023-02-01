import './Button.css';
// import { Component } from "react";
// import contactList from './contacts.json'

const Button = ({addContact, sortName, sortPopularity, deleteContact, refresh}) => {

    return (
        <button            
            className={deleteContact ? 'btn btn-delete' : 'btn btn-custom'}
            onClick={addContact || sortName || sortPopularity || deleteContact || refresh}
        >
            {addContact && <span>Add Random Contact</span>}
            {sortName && <span>Sort by name</span>}
            {sortPopularity && <span>Sort by popularity</span>}            
            {deleteContact && <span>Delete</span>}            
            {refresh && <span>Refresh</span>}             
        </button>
    )
}

export default Button;