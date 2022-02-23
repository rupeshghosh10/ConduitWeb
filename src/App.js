import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Signin from './pages/Signin/Signin';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/signin' element={< Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
