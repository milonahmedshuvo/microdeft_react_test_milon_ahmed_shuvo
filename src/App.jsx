import { Toaster } from "react-hot-toast"
import { RouterProvider } from "react-router"
import { Routes } from "./lib/Routes/Routes"




function App() {
  

  return (
    <div>
      <RouterProvider router={Routes}>
      </RouterProvider>
      <Toaster />
    </div>
  )
}

export default App
