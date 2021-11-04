import { BrowserRouter as Router, Route} from "react-router-dom"
import { Provider } from "react-redux"
import store from "./redux/store"

import Pokemon from './components/Pokemon'
import PokemonList from './components/PokemonList'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path ="/" component={PokemonList}></Route>
          <Route exact path ="/:idPokemon" component={Pokemon}></Route>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
