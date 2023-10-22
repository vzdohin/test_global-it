"use client";
import { useState } from 'react';
import Search from '@/components/Search/Search'
import Cards from '@/components/Cards/Cards'
import Popup from '@/components/Popup/Popup'

export default function Home() {
  const [searchUser, setSearchUser] = useState('');

  return (
    <main className='main'>
      <div>
        <Search 
        onSearchUser={setSearchUser}/>
        <Cards 
        searchUser={searchUser}/>
      </div>
    </main>
  )
}
