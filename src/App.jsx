import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Media.css'
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
import AppContext from './AppContext';
import { getCurrentUser } from './services/apis';
import CreateOpportunity from './pages/CreateOpportunity';
import AboutUs from './pages/AboutUs'

function App() {

  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [pageTitle, setPageTitle] = useState("Dashboard")

  const values = {
    user,
    setUser,
    loadingUser,
    pageTitle,
    setPageTitle
  }

  useEffect(()=>{
    const token = localStorage.getItem("alumeet__token");
    if(!token){
        return;
    }

    const getUser = async()=>{
        try {

            setLoadingUser(true);
            const response = await getCurrentUser(token);
            if(response.data.user){
                console.log(response.data.user)
                setUser(response.data.user)
            }   
            
        } catch (error) {
            console.log(error)                
        }
        finally{
          setLoadingUser(false)
        }
    }
    getUser();
  }, [])

  return (
    <AppContext.Provider value={values}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/upcoming-events" element={<UpcomingEvents />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path='/' element={<MainApp/>}>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='all-events' element={<AllEvents/>}/>
            <Route path='my-events' element={<MyEvents/>}/>
            <Route path='create-event' element={<CreateEvent/>}/>
            <Route path='event/:id' element={<ViewEvent/>}/>
            <Route path='event/:id/edit' element={<UpdateEvent/>}/>

            <Route path='opportunities' element={<Opportunities/>}/>
            <Route path='opportunities/create' element={<CreateOpportunity/>}/>


          </Route>

        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
