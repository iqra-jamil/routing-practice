// learning create router browser(routing)
import './App.css'
import Home from "./components/Home"
import About from "./components/About"
import Dashboard from "./components/Dashboard"
import Contact from './components/Contact';
import Navbar from './components/Navbar';
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
    </div>
  },
  {
    path:"/contact",
    element:<div>
       <Navbar/>
       <Contact/>
    </div>
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
