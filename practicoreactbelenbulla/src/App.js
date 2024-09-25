import logo from './logo.svg';
import './App.css';
import { UserProvider } from './context/UserContext'; 
import UserDisplay from './components/UserDisplay'; 
import UserInput from './components/UserInput'; 

function App() {
  return (
    <UserProvider>
      <div className="App">
        <header className="App-header">
          <UserDisplay /> {/* Muestra el nombre del usuario */}
          <UserInput /> {/* Componente para actualizar el nombre */}
        </header>
      </div>
    </UserProvider>
  );
}

export default App;
