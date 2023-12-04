import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UpcomingEvents from './pages/UpcomingEvents'
import Register from './pages/Register'
import Login from './pages/Login'
import MainApp from './components/MainApp'
import Dashboard from './pages/Dashboard'
import AllEvents from './pages/AllEvents'
import MyEvents from './pages/MyEvents';
import CreateEvent from './pages/CreateEvent';
import Opportunities from './pages/Opportunities';
import ViewEvent from './pages/ViewEvent';
import UpdateEvent from './pages/UpdateEvent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upcoming-events" element={<UpcomingEvents />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path='/' element={<MainApp/>}>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='all-events' element={<AllEvents/>}/>
          <Route path='my-events' element={<MyEvents/>}/>
          <Route path='create-event' element={<CreateEvent/>}/>
          <Route path='opportunities' element={<Opportunities/>}/>
          <Route path='event/:id' element={<ViewEvent/>}/>
          <Route path='event/:id/edit' element={<UpdateEvent/>}/>

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
