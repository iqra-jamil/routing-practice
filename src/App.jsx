// learning create router browser(routing)
import './App.css'
import Home from "./components/Home"
import About from "./components/About"
import Dashboard from "./components/Dashboard"
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import ParamComp from './components/paramComp';
import Courses from './components/Courses';
import Python from './components/Python';
import NotFound from './components/NotFound';
//use outlet tag to go on child components
import { Outlet } from 'react-router-dom';
//import createBrowserRouter
import {createBrowserRouter,RouterProvider} from "react-router-dom";


//create
let router=createBrowserRouter([
  {
    path:"/",
    element:<div>
       <Navbar/>
       <Home/>
    </div>
    
  },
  {
    path:"/about",
    element:<div>
       <Navbar/>
       <About/>
    </div>
  },
  {
    path:"/dashboard",
    element:<div>
       <Navbar/>
       <Dashboard/>
        <Outlet/>
      </div>,
      //nested Routing
   children:[
    {path:"courses",
      element:<Courses/>
    }
  ,{
    path:"python",
    element:<Python/>
  }
]
  },
  {
    path:"/contact",
    element:<div>
       <Navbar/>
       <Contact/>
    </div>
  },
  //parameters(useparams hook)
  {
  path:"/student/:id",
   element:
   <div>
  <Navbar/>
  <ParamComp/>
   </div>
  },
  //404 page
  {
     path : "*",
     element: <NotFound/>
  }

])
function App() {
  return (
    <>
    
     <div>
      <RouterProvider router={router}/>
     </div>
    
    </>
  )
}

export default App
