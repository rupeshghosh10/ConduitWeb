import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import UserContext from './components/UserContext/UserContext';
import { getUser } from './util/localStorageUtil';
import Profile from './pages/Profile/Profile';
import Settings from './pages/Settings/Settings';
import RequireAuth from './components/RequireAuth/RequireAuth';

const initialUserState = getUser() ? getUser() : {
  email: '',
  username: '',
  token: '',
  isSignedIn: false
};

const App = () => {

  const [user, setUser] = useState(initialUserState);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/signin' element={<Signin />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/profile' element={<RequireAuth><Profile /></RequireAuth>} />
            <Route exact path='/settings' element={<RequireAuth><Settings /></RequireAuth>} />
          </Routes>
        </main>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
