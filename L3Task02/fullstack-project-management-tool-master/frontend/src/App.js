import AppLayout from "./components/Applayout";
import { Routes, Route } from "react-router-dom";
import Task from "./components/Task";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
    {/* <Navbar/> */}
    <AppLayout>
      <Toaster
        position="top-right"
        gutter={8}
      />
      <Routes>
        {/* <Route path="/:projectId" element={[]} /> */}
        <Route path="/" element={
          <div className="flex flex-col items-center w-full pt-10">
            <img src="./image/welcome.svg" className="w-5/12" alt="" />
            <h1 className="text-lg text-gray-600">Select or create new project</h1>
          </div>
        } />
      </Routes>
    </AppLayout>
    {/* <Home/> */}
    </div>
  )
}

export default App
