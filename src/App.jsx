import './App.css';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar loggedIn={false} />
      <MovieList loggedIn={true} />
    </div>
  );
}

export default App;
