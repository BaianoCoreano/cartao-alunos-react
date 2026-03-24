import CartaoAluno from './components/CartaoAluno';
import './App.css';

import leoncio from './assets/Leôncio.PNG';
import juno from './assets/Juno over.PNG';
import wuyang from './assets/Wuyang over.PNG';
function App() {
  return (
    <div className="container">

     <CartaoAluno 
  nome="Gabriel Dos Santos"
  turma="3TC"
  cargo="Front-End"
  habilidades={["HTML", "CSS", "React"]}
  imagem={wuyang}
/>

<CartaoAluno 
  nome="Ana"
  turma="2TE"
  cargo="Back-End"
  habilidades={["Node", "API", "MongoDB"]}
  imagem={juno}
/>

<CartaoAluno 
  nome="Christian Daris"
  turma="3TC"
  cargo="UI/UX"
  habilidades={["Figma", "Design", "UX"]}
  imagem={leoncio}
/>

    </div>
  );
}

export default App;
