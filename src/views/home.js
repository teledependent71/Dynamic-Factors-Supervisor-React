import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Dynamic Factors Supervisor</title>
        <meta property="og:title" content="Dynamic Factors Supervisor" />
      </Helmet>
    </div>
  )
}

export default Home
