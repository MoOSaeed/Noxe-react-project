import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Details from '../Details/Details';
import Home from '../Home/Home';
import Login from '../Login/Login';
import MasterLayout from '../MasterLayout/MasterLayout';
import Movise from '../Movise/Movise';
import Networks from '../Networks/Networks';
import Notfound from '../Notfound/Notfound';
import People from '../People/People';
import Register from '../Register/Register';
import Tvshows from '../Tvshows/Tvshows';
import Logout from '../Logout/Logout';
import Profile from '../Profile/Profile';
import jwtDecode from 'jwt-decode';
import { useState, useEffect } from 'react';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import './App.css';


function App() {

  let logout = () => {
    localStorage.removeItem('token');
    setUserData(null);
    return < Navigate to='/login' />

  }

  const [userData, setUserData] = useState(null);
  let saveUserData = () => {
    let encoded = localStorage.getItem('token');
    let decoded = jwtDecode(encoded);
    setUserData(decoded);
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      saveUserData()
    }
  }, [])


  let routes = createBrowserRouter([
    {
      path: '/', element: <MasterLayout userData={userData} logout={logout} />, errorElement: < Notfound />, children: [
        { index: true, element: <ProtectedRoute userData={userData}>< Home /> </ProtectedRoute> },
        { path: 'Networks', element: <ProtectedRoute userData={userData}><Networks /></ProtectedRoute> },
        { path: 'People', element: <ProtectedRoute userData={userData}><People /></ProtectedRoute> },
        { path: 'Tvshows', element: <ProtectedRoute userData={userData}><Tvshows /></ProtectedRoute> },
        { path: 'Profile', element: <ProtectedRoute userData={userData}><Profile userData={userData} /> </ProtectedRoute> },
        { path: 'Details/:id/:mediaType', element: <ProtectedRoute userData={userData}><Details /> </ProtectedRoute> },
        { path: 'Movise', element: <ProtectedRoute userData={userData}><Movise /> </ProtectedRoute> },
        { path: 'Login', element: <Login saveUserData={saveUserData} /> },
        { path: 'Register', element: <Register /> },
        { path: 'Logout', element: <Logout /> },
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
