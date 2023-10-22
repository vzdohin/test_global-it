import './Card.css'
import Image from 'next/image'
import Telephone from '../../images/telephone.svg'
import Mail from '../../images/mail.svg'

export default function Card({ user, onClick }) {
    return (
        <li className='card' onClick={onClick}>
            <h2 className='card__title'>{user.name}</h2>
            <div className='card__container'>
                <Image 
                className='card__image'
                src={Telephone}
                alt='телефон'
                width={24}
                height={24}
                />
                <p className='card__text'>{user.phone}</p>
            </div>
            <div className='card__container'>
                <Image 
                className='card__image'
                src={Mail}
                alt='почта'
                width={24}
                height={24}
                />
                <p className='card__text'>{user.email}</p>
            </div>
        </li>
    )
}