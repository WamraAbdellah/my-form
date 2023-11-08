import './App.css';
import DonneésPersonnelles  from './componentes/DonneésPersonnelles';
import { Formation } from './componentes/Formation';
import { Autre } from './componentes/Autre';
import { Button } from './componentes/Button';



function App() {

  return (
    <body>
      <form id='form' >
        <DonneésPersonnelles/>
        <Formation/>
        <Autre/>
        <Button/>
      </form>
    </body>
  );

}



export default App;

