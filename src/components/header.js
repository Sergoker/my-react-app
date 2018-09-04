import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
 <div className="Header"> 
  <div className="HeaderGroup">
  <link to="/" > <img src={require('../images/logo-designcode.svg')} width="30"/></link>
  <link t="/courses">Courses</link>
  <link t="/courses">Downloads</link>
  <link t="/courses">Workshops</link>
  <link t="/courses"><button>Buy</button></link>
  </div>
   
 </div>
)

export default Header
