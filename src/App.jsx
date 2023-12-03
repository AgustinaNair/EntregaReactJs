import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/ItemListConteiner/ItemListContainer";
 
function App() {

  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="MONSTER ENERGY DRINKS"/>
    </div>
  )
}

export default App;
