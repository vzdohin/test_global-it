import './Popup.css';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import CloseButton from '../../images/close.svg';

export default function Popup({ user, closePopup, isPopupOpen }) {
    console.log(user);
    const popupRef = useRef(null);
    const handleOutsideClick = (e) => {
        if (popupRef.current && !popupRef.current.contains(e.target)) {
            closePopup();
        }
    };
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            closePopup();
        }
    };
    useEffect(() => {
        if (isPopupOpen) {
            document.addEventListener('click', handleOutsideClick);
        } else {
            document.removeEventListener('click', handleOutsideClick);
        }
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [isPopupOpen, closePopup]);

    if (!user) return null;

    return (
        <>
            {isPopupOpen && (
                <div className="popup__overlay" onClick={handleOverlayClick}>
                    <section className="popup" ref={popupRef}>
                        <div className="popup__title-container">
                            <h2 className="popup__title">{user.name}</h2>
                            <Image
                                className="popup__image"
                                src={CloseButton}
                                alt="кнопка закрыть"
                                width={20}
                                height={20}
                                onClick={closePopup}
                            />
                        </div>
                        <div className="popup__info-container">
                            <p className='popup__text'>Телефон:</p>
                            <p className='popup__text popup__text-grey'>{user.phone}</p>
                            <p className='popup__text'>Почта:</p>
                            <p className='popup__text popup__text-grey'>{user.email}</p>
                            <p className='popup__text'>Дата приема:</p>
                            <p className='popup__text popup__text-grey'>{user.hire_date}</p>
                            <p className='popup__text'>Должность:</p>
                            <p className='popup__text popup__text-grey'>{user.position_name}</p>
                            <p className='popup__text'>Подразделение:</p>
                            <p className='popup__text popup__text-grey'>{user.department}</p>
                        </div>
                        <div className='popup__description--container'>
                            <p className='popup__text'>Дополнительная информация:</p>
                            <p className='popup__text popup__text-grey'>Разработчики используют текст в качестве заполнителя
                                макта страницы. Разработчики используют текст в качестве заполнителя макта
                                страницы.</p>
                        </div>
                    </section>
                </div>
            )}
        </>
    );
}
