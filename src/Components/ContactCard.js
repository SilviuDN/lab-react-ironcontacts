import './ContactCard.css'
import Button from './Button'

const ContactCard = ({id, name, pictureUrl, popularity, wonOscar, wonEmmy, deleteContact}) => {
    return(
          <tr key={id}>
            <td><img src={pictureUrl} alt={name} /></td>
            <td>{name}</td>
            <td>{Math.round(popularity)}</td>
            <td>{wonOscar ? '🏆' : ''}</td>
            <td>{wonEmmy ? '🏆' : ''}</td>

            <td>
              <Button className='btn-delete' deleteContact = { () => deleteContact() }/>
            </td>
          </tr>
    )
}

export default ContactCard