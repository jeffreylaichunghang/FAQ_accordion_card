import { useState } from 'react'

import './App.css'
import CardHeader from './components/CardHeader'
import FAQ from './components/FAQ'

function App() {

  return (
    <div className='background'>
      <div className='container'>
        <CardHeader />
        <FAQ />
      </div>
    </div>
  )
}

export default App
