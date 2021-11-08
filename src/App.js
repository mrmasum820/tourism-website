import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import BookNow from './Pages/Home/BookNow/BookNow';
import MyBookingList from './Pages/MyBookingList/MyBookingList';
import ManageAllBookings from './Pages/ManageAllBookings/ManageAllBookings';
import AddPackage from './Pages/AddPackage/AddPackage';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>

          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <PrivateRoute path="/bookNow/:serviceID">
              <BookNow></BookNow>
            </PrivateRoute>

            <Route path="/about">
              <About></About>
            </Route>

            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/addPackage">
              <AddPackage></AddPackage>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/myBooking">
              <MyBookingList></MyBookingList>
            </Route>
            <Route path="/manageAllOrders">
              <ManageAllBookings></ManageAllBookings>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
