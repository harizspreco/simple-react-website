import "./index.css";
import './style.css';
import Naslovna from './Komponente/Naslovna';
import Slikovna from './Komponente/Slikovna';
import Biografska from './Komponente/Biografska';
import Dugmadi from './Komponente/Dugmadi';
import Vrijeme from './Komponente/Vrijeme';





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Naslovna />
      <div className="o-meni">
        <Slikovna />
        <Biografska />
      </div>
        <Dugmadi />
        <div className="vrijeme-container">
         <Vrijeme grad="Sarajevo" zona="Europe/Sarajevo" />
         <Vrijeme grad="New York" zona="America/New_York" />
         <Vrijeme grad="Tokyo" zona="Asia/Tokyo" />
        </div>
      </header>
    </div>
  );
}

export default App;
