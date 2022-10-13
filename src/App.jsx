import './App.css';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import Watchlist from './components/Watchlist';

function App() {
  return (
    <div className='App'>
      <Navbar loggedIn={true} />
      <Watchlist userToken='eyidnfikjsni.fsdfjksje.gjksei' />
      {/* <MovieList loggedIn={true} /> */}
    </div>
  );
}

export default App;
