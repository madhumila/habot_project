import React from 'react'
import Navbar from './Components/Navbar'
import Headers from './Components/Headers'
import Content from './Components/Content'
import VideoSection from './Components/VideoSection'
import Action from './Components/Action'
import Working from './Components/Working'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='container-fluid p-0'>
      <Navbar/>
      <Headers/>
      <Content/>
      <VideoSection/>
      <Action/>
      <Working/>
      <Footer />
    </div>
  )
}

export default App
