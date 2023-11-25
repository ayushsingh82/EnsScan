import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Search from './components/Search/Search.jsx'
import Table from './components/Table/Table'


function App() {


  return (
    <div className='bg-slate-800
    h-screen w-screen'>
     <Header/> 
     <Search/>
     <Table/>
    </div>
  )
}

export default App

    // bg-slate-800 