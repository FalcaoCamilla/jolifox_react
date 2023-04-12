import './App.css';
import ComponentUm from './componentes';
import { ComponentDois } from './componentes';

function App() {
  const variavelUm = "teste"
  return (
    <div className="App">
      <ComponentUm></ComponentUm>
      <header className="App-header">
        alguma coisa
        { variavelUm }
        <br></br>
        <div>teste de baixo</div>
      </header>
      
    </div>
  );
}

export default App;