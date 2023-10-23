import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [activePlayers, setActivePlayers] = useState([]);

  const fetchActivePlayers = async () => {
    try {
      
      const url = '/api/player/list_active_players';
      const requestOptions = {
        method: 'GET',
        headers: {
          'token': '64788642-4151-11ee-be56-0242ac120002',
          'Content-Type': 'application/json',
          'client':'Client'
        },
      };
      
      fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={fetchActivePlayers}>Obtener jugadores activos</button>
        <div>
          <h2>Lista de jugadores activos:</h2>
          <ul>
            {activePlayers.map((player, index) => (
              <li key={index}>{player.name}</li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;