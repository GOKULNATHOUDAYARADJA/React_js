import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// this is function get by the react-router 
import Layout from './Layout.jsx'
// import the layout then only the router know the template
import Home from './components/Home/Home.jsx'
// import the home component
import About from './components/About/About.jsx'
// import the About component
import User from './components/User/User.jsx'
// import the User component 
import Github, {githubInfoLoader} from './components/Github/Github.jsx'
// import the github component
const router = createBrowserRouter(
  // this is the method from the react router we have 'n' number of router we have depending upon useage we use the different and different router
  createRoutesFromElements(
    //above the method also is get by the router incause you don't know about the use of method mean go to the website and learn which method is used to which puppose
    <Route path='/' element={<Layout />}>
     {/* // this is implement the template and add other componet by using "sanwige" static componet is work has a static which component is using the react-router it's only work has a dinamic */}
      {/* Note: [path] attribute  is the "url" purpose and [element] attribute is the impliment the component  */}
      <Route path='' element={<Home />}/>
      {/* import the Home component  */}
      <Route path='about' element={<About />} />
      {/* import the about component */}
      <Route path='user/' element={<User />} >
        {/* import the User component  */}
        <Route path=':userid' element={<User />} />
        {/* incause we accepting the any parameter mean we use the sanwig implimentation */}
      </Route>
      <Route 
      loader={githubInfoLoader}
      // loader is a attribute when fleatching the data its a fastest way to get the data when hover the pointer in the component its get loaded
      path='github' 
      element={<Github />} />
      <Route path='*' element={<div>Not Found</div>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
