
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Pages/HomePage/Home/Home';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
