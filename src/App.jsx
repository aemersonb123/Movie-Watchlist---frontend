import './App.css';
import LoginForm from './components/LoginForm';
import MovieAddForm from './components/MovieAddForm';
import MovieEditForm from './components/MovieEditForm';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import RegisterForm from './components/RegisterForm';
import Watchlist from './components/Watchlist';
import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('x-auth-token');
    navigate('/');
  };

  return (
    <div className='App'>
      <Navbar onLogout={handleLogout} />
      <Routes>
        <Route path='/' element={<MovieList />} exact />
        <Route path='/watchlist' element={<Watchlist />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/add-movie' element={<MovieAddForm />} />
        <Route path='/edit-movie' element={<MovieEditForm />} />
      </Routes>
    </div>
  );
}

export default App;
