import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Topbar from './Components/Admin Portal/Commmons/Topbar';
import Titlebar from './Components/TitleBar/TitleBar';
import Dashboard from './Components/Admin Portal/Dashboard/Dashboard';
import LoginRegister from './Components/LoginRegister/LoginRegister';
import SubmittedFormsTable from './Components/Table/Table';
import Faq from './Components/Admin Portal/FAQ/FAQ';
import Hero from './Components/Hero/Hero';
import AdminLogin from './Components/AdminLogin/AdminLogin';
import User from './Components/User/User';
import AddMap from './Components/Admin Portal/AddMap/AddMap';

function App() {
  const location = useLocation();

  const displayTitlebar = location.pathname === '/' || location.pathname === '/admin-login' || location.pathname === '/user-portal';

  return (
    <div className='app'>
      <main className='main-content'>
      {displayTitlebar ? (
          <Titlebar />
        ) : (
          <Topbar />
        )}
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/admin-login' element={<AdminLogin />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/visitor-registration' element={<LoginRegister />} />
          <Route path='/visitor-history' element={<SubmittedFormsTable />} />
          <Route path='/how-to-use' element={<Faq />} />
          <Route path='/user-portal' element={<User />} />
          <Route path='/add-map' element={<AddMap />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
