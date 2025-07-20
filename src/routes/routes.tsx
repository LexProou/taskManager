

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import TaskManager from '../components/taskManager/TaskManager'

function Router() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<TaskManager/>} />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router