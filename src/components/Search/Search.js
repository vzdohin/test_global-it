import './Search.css'

import Image from 'next/image'
import Lupa from '../../images/lupa.svg'

export default function Search({ onSearchUser }) {
    const handleSearchChange = (e) => {
        onSearchUser(e.target.value)
    }
    return (
        <div className='search-form'>
            <form
                className='search-form__container'
                noValidate
            >
                <section className='search-form__section'>

                    <input
                        className='search-form__input'
                        required
                        type='text'
                        onChange={handleSearchChange}
                    />
                    <Image
                        className='search-form__img'
                        src={Lupa}
                        alt='изображение лупы'
                        width={24}
                        height={24}
                    />
                </section>
            </form>
        </div >
    )
}