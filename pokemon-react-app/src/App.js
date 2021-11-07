import { BrowserRouter as Router, Route} from "react-router-dom"
import { Provider } from "react-redux"
import store from "./redux/store"
import PokemonDetail from './components/PokemonDetail'
import PokemonList from './components/PokemonList'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path ="/" component={PokemonList}></Route>
          <Route exact path ="/:idPokemon" component={PokemonDetail}></Route>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
