import React from 'react'
import Header from '../header/index'
import Body from '../body/index'
import Footer from '../footer/index'
import './home.css'

function Home() {
  return (
      <div className='Home'>
          <di>
            <Header/>
                </di>
          <div>
            <Body/>
                </div>
          <div>
            <Footer/>
                </div>
      </div>
  )
}

export default Home

