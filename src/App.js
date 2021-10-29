
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
import AddNew from './Pages/AddNew/AddNew';
import Home from './Pages/HomePage/Home/Home';
import Login from './Pages/Login/Login';
import ManagerAllOrders from './Pages/ManageOrder/ManagerAllOrders';
import MyOrders from './Pages/MyOrder/MyOrders';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import PrivateRoute from './PrivateRoute/PrivateRoute';

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
            <PrivateRoute path="/placeOrder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/addNew">
              <AddNew></AddNew>
            </PrivateRoute>
            <PrivateRoute path="/manageOrders">
              <ManagerAllOrders></ManagerAllOrders>
            </PrivateRoute>
            <PrivateRoute path="/myOrder">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <Route exact path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
