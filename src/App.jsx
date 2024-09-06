
import { Outlet } from 'react-router-dom'

import { Button } from "@/components/ui/button"
import Navbar from './components/App Components/Navbar'


function App() {


  return (
   <>
   <Navbar />
   <div className="w-[80%] mt-10 mx-auto">

   <Outlet />
   </div>
   
   </>
  )
}

export default App
