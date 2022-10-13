import './App.css';
import LoginForm from './components/LoginForm';
import MovieAddForm from './components/MovieAddForm';
import MovieEditForm from './components/MovieEditForm';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import RegisterForm from './components/RegisterForm';
import Watchlist from './components/Watchlist';

function App() {
  return (
    <div className='App'>
      <Navbar loggedIn={false} />
      <RegisterForm />
      {/* <LoginForm /> */}
      {/* <MovieEditForm /> */}
      {/* <MovieAddForm /> */}
      {/* <Watchlist userToken='eyidnfikjsni.fsdfjksje.gjksei' /> */}
      {/* <MovieList loggedIn={true} /> */}
    </div>
  );
}

export default App;
