import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar'
import { MainSection } from './pages/MainSection'
import { ContactForm } from './components/Forms/ContactForm'
import { WDWD } from './pages/WhatDoWeDo'
import { Reasons } from './pages/Reasons'
import { CtoBanner } from './components/CtoBanner'
import { AdquisitionProcess } from './pages/AdquisitionProcess'
import introVideo from './assets/Intro_MagueyToken_Web.mp4'
import { PlantationOptions } from './pages/PlantationOptions'
import { Title } from './components/Title'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="App">
      <NavBar />
      <div className=''>
        <video src={introVideo} autoPlay muted></video>
      </div>
      <div className="content px-6 md:px-20">

        <MainSection />
        <WDWD />
        <Reasons />
      </div>
      <CtoBanner />
      <div className="content px-6 md:px-20">
        <AdquisitionProcess />
        <PlantationOptions />

        <Title>VISITA EL RANCHO MAGUEYTOKEN</Title>

        <div className="bg-gray-400 min-w-full min-h-[500px]">

        </div>
        <Title>Contáctanos</Title>
        <ContactForm />
      </div>
    </div>
  )
}

export default App
