import "./App.css";
import React from 'react';
import LoginForm from './components/LoginForm';


const App: React.FC = () => {
  const handleLogin = (email: string, password: string) => {
    console.log('Email:', email);
    console.log('Senha:', password);
    //autenticação com Clerk pendente
  };

  return (
    <> 
    
      <LoginForm onLogin={handleLogin} />

    </>
  );
};

export default App;
