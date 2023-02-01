import './App.css';
import ContactsList from './ContactsList';

function App() {
  return (
    <>
      <ContactsList contactsCount = '2'/>
      <ContactsList contactsCount = '5'/>
      <ContactsList contactsCount = 'all'/>  
    </>

  );
}

export default App;
