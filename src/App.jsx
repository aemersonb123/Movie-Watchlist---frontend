import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar loggedIn={false} />
    </div>
  );
}

export default App;
