import React from 'react'
import {Outlet} from 'react-router-dom' //this is function from the react-router is used to change the component depending up on the url
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
// Layout is a concept is make a webpage template because somaney Time
// we use the same component some time only we change the component
// is depending up on the url
// we make a template who its look like

function Layout() {
  return (
    <>
    <Header /> {/*this is fixed component  */}
    <Outlet />  {/*this dinamic component it's work by the react-router */}
    <Footer />  {/*this is fixed component  */}
    </>
  )
}

export default Layout