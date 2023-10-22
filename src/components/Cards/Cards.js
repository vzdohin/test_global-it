import { useState, useEffect } from 'react';
import './Cards.css'
import Card from '../Card/Card'
import Popup from '../Popup/Popup';

export default function Cards({ searchUser }) {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    
    const filtredUsers = users.filter(user => {
        return user.name.toLowerCase().includes(searchUser.toLowerCase())
    })

    useEffect(() => {
        fetch('http://localhost:3000')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(er => console.log(er))
    }, [])


    const openPopup = (user) => {
        
        setSelectedUser(user);
        setPopupOpen(true);
    };
    const closePopup = () => {
        setPopupOpen(false);
        setSelectedUser(null);
    }
    return (
        <section className='cards__container'>
            <ul className='cards'>
                {filtredUsers.map(user => (
                    <Card
                        key={user.email}
                        user={user}
                        onClick={() => openPopup(user)}
                    />
                ))}
            </ul>
            {selectedUser && <Popup
                user={selectedUser}
                openPopup={openPopup}
                closePopup={closePopup}
                isPopupOpen={isPopupOpen} />}
        </section>
    )
}