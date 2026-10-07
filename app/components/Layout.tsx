import React from 'react'
import Navbar from './navbar'
interface Ilayout{
    children:React.ReactNode
}
function Layout({children}:Ilayout) {
  return (
    <div>
      <Navbar/>
    
        {children }</div>
  )
}

export default Layout