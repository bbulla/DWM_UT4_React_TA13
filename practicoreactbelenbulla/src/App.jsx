import React from 'react';
import { UserProvider } from './context/UserContext';
import UserDisplay from './components/UserDisplay'; 

function App() {
    return (
        <UserProvider>
            <div className="container">
                <h1>Aplicación de Contexto</h1>
                <UserDisplay />
            </div>
        </UserProvider>
    );
}

export default App;
