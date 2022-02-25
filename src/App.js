import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Signin from './pages/Signin/Signin';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/signin' element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
