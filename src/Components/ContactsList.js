import { Component } from "react";
import contactsList from './../contacts.json'
import ContactCard from "./ContactCard";
import Button from "./Button";
import './ContactsList.css'

// const contactsListLength = contactsList.length

class ContactsList extends Component{
    constructor(props){
        super(props)
        this.state = {
            restrictedList: isNaN(Number(this.props.contactsCount)) 
                ? 
                contactsList
                : 
                contactsList.filter((el, i) => i < this.props.contactsCount),
            listLength: isNaN(Number(this.props.contactsCount)) 
                ? 
                contactsList.length
                : 
                Number(this.props.contactsCount)
        }
    }

    addContact = () => {
        let newContact;
        const newList = this.state.restrictedList
    
        do {
          newContact = this.getRandomContact();
        } while(newList.includes(newContact) && newList.length < contactsList.length);
    
        newList.length < contactsList.length && newList.push(newContact);
    
        this.setState({
            restrictedList: [...newList],
            listLength: this.state.listLength + 1
        })
    }

    getRandomContact = () => {
        let i = Math.floor(Math.random() * contactsList.length);
        return contactsList[i];
    }

    sortName = () => {        
        const newList = this.state.restrictedList
        this.setState({
            restrictedList: newList.sort( (a, b) => a.name.localeCompare( b.name ))
        })
    }

    sortPopularity = () => {        
        const newList = this.state.restrictedList
        this.setState({
            restrictedList: newList.sort( (a, b) => b.popularity - a.popularity )
        })
    }

    deleteContact = (id) => {
        this.setState({
            restrictedList: this.state.restrictedList.filter((el) => el.id !== id),
            listLength: this.state.listLength - 1
        })
    }

    refresh = () => {
        this.setState({
            restrictedList: isNaN(Number(this.props.contactsCount)) 
                ? 
                contactsList
                : 
                contactsList.filter((el, i) => i < this.props.contactsCount),
            listLength: isNaN(Number(this.props.contactsCount)) 
                ? 
                contactsList.length
                : 
                Number(this.props.contactsCount)
        })
    }


    render(){
       
        let contactsToDisplay = this.state.restrictedList.map( (el, i ) => <ContactCard {...el} key={el.id}  deleteContact={() => this.deleteContact(el.id)}/>) 
        
        return(
            <>
            <h2>The first {this.state.listLength} contacts:</h2>

            <>
                <div className='button-container'>
                    <Button addContact={this.addContact} />
                    <Button sortName={this.sortName} />
                    <Button sortPopularity={this.sortPopularity} />
                    <Button refresh={this.refresh} />
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        {/* <th>Action</th> */}
                        <th>Won Oscar</th>
                        <th>Won Emmy</th>
                        <th></th>
                    </tr>
                    </thead>

                    <tbody>
                        {contactsToDisplay}         
                    </tbody>
                </table>
            </>
            </>
            
        )
    }
}

export default ContactsList
