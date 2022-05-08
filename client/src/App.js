import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import MealAdded from './components/MealAdded';
import MealEdit from './components/MealEdit';
import MealHome from './components/MealHome';
import MealMakeOrder from './components/MealMakeOrder';
import MealDetails from './components/MealDetails';
import MealMenu from './components/MealMenu';
import MealCreate from './components/MealCreate';
import MealReceivedOrders from './components/MealReceivedOrders';
import StaffCreatePost from './components/StaffCreatePost';
import StaffEditPost from './components/StaffEditPost';
import StaffHome from './components/StaffHome';
import StaffMenu from './components/StaffMenu';
import StaffPostDetails from './components/StaffPostDetails';
import EventCreatePost from './components/EventCreatePost';
import EventEditPost from './components/EventEditPost';
import EventBook from './components/EventBook';
import EventAddedEvent from './components/EventAddedEvent';
import EventHome from './components/EventHome';
import EventMenu from './components/EventMenu';
import EventPostDetails from './components/EventPostDetails';
import EventReceivedOrders from './components/EventReceivedOrders';
import AddRoom from './components/AddRoom';
import BookRooms from './components/BookRooms';
import RoomDetails from './components/RoomDetails';
import Roomhome from './components/Roomhome';
import RoomMenu from './components/RoomMenu';
import RoomReciveorders from './components/RoomReciveorders';
import UpdateRoom from './components/UpdateRoom';
import ViewRooms from './components/ViewRooms';
import RentAddedvehicles from "./components/RentAddedvehicles";
import RentCreatePost from "./components/RentCreatePost";
import RentEditPost from "./components/RentEditPost";
import RentHome from "./components/RentHome";
import RentMakeOrder from "./components/RentMakeOrder";
import RentMenu from "./components/RentMenu";
import RentPostDetails from "./components/RentPostDetails";
import RentReceivedOrders from "./components/RentReceivedOrders";
import admin from './admin';
import navAdmin from './adminNav';
import Home from './components/Dashboard';
import LoginAdminPage from './pages/LoginAdminPage/LoginAdminPage'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Route path="/" exact component={Home}></Route>
        <Route path="/mealsadded" component={MealAdded}></Route>
        <Route path="/mealorder/:id" component={MealMakeOrder}></Route>
        <Route path="/mealmenu" component={MealMenu}></Route>
        <Route path="/mealhome" component={MealHome}></Route>
        <Route path="/addmeal" component={MealCreate}></Route>
        <Route path="/editmeal/:id" component={MealEdit}></Route>
        <Route path="/meal/:id" component={MealDetails}></Route>
        <Route path="/mealorders" component={MealReceivedOrders}></Route>
        <Route path="/staffadd" component={StaffCreatePost}></Route>
        <Route path="/staffedit/:id" component={StaffEditPost}></Route>
        <Route path="/staffhome" component={StaffHome}></Route>
        <Route path="/staffmenu" component={StaffMenu}></Route>
        <Route path="/staffpost/:id" component={StaffPostDetails}></Route>
        <Route path="/eventadd" component={EventCreatePost}></Route>
        <Route path="/eventedit/:id" component={EventEditPost}></Route>
        <Route path="/eventbook/:id" component={EventBook}></Route>
        <Route path="/eventadded"  component={EventAddedEvent}></Route>
        <Route path="/eventHome" component={EventHome}></Route>
        <Route path="/eventmenu" component={EventMenu}></Route>
        <Route path="/eventpost/:id" component={EventPostDetails}></Route>
        <Route path="/eventorders" component={EventReceivedOrders}></Route>
        <Route path="/roomadd" component={AddRoom}></Route>
        <Route path="/roombook/:id" component={BookRooms}></Route>
        <Route path="/roompost/:id"component ={RoomDetails}></Route>
        <Route path="/roomHome"component ={Roomhome}></Route>
        <Route path="/roommenu" component={RoomMenu}></Route>
        <Route path="/roomorders" component={RoomReciveorders}></Route>
        <Route path="/roomedit/:id" component ={UpdateRoom}></Route>
        <Route path="/roomadded" component={ViewRooms}></Route>
        <Route path="/vehiclesadded" component={RentAddedvehicles}></Route>
        <Route path="/rentadd"  component={RentCreatePost}></Route>
        <Route path="/rentedit/:id" component={RentEditPost}></Route>
        <Route path="/rentHome" component={RentHome}></Route>
        <Route path="/rentorder/:id" component={RentMakeOrder}></Route>
        <Route path="/rentmenu" component={RentMenu}></Route>
        <Route path="/rentpost/:id" component={RentPostDetails}></Route>
        <Route path="/rentorders" component={RentReceivedOrders}></Route>
        <Route path="/adminhome" component={admin}></Route>
        <Route path="/adminnav" component={navAdmin}></Route>
        <Route path='/adminlogin' exact component={LoginAdminPage} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;