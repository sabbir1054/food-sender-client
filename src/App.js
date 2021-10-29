
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
import Home from './Pages/HomePage/Home/Home';
import Login from './Pages/Login/Login';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
