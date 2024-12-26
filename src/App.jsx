import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Banner from './Component/Section/Banner'
import Cloud from './Component/Section/Cloud'
import Price from './Component/Section/Price'
import Poster from './Component/Section/Poster'
import Footer from './Component/Section/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Cloud/>
      <Price/>

      <Poster/>
      <Footer/>
    </div>
  )
}

export default App