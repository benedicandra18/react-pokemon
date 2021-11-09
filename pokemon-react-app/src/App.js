import { BrowserRouter as Router, Route} from "react-router-dom"
import { Provider } from "react-redux"
import store from "./redux/store"
import PokemonDetail from './components/PokemonDetail'
import PokemonList from './components/PokemonList'
import { Body } from "./styles/Body.style"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Body>
        <div className="App">
          <Route exact path ="/" component={PokemonList}></Route>
          <Route exact path ="/:idPokemon" component={PokemonDetail}></Route>
        </div>
        </Body>
      </Router>
  
    </Provider>
  );
}

export default App;
