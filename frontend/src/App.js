import React from "react";
import Homepage from "./components/Homepage/index";
import { BaseContainer } from "./styles/containers";

import Nav from "./components/Nav/index";
import BottomBar from "./components/BottomBar/index";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Registration from "./components/Registration";
import RegistrationValidation from "./components/RegistrationValidation";
import RegistrationValidated from "./components/RegistrationValidated";
import CreateRestaurant from "./components/CreateRestaurant";
import Restaurant from "./components/Restaurant";
import RestaurantProfile from "./components/RestaurantProfile";
import {NotFound} from "./components/NotFound";
import Reviews from "./components/Reviews";
import Users from "./components/Users";
import UserProfile from "./components/UserProfile/userprofile";
import ReviewUserProfile from "./components/UserProfile/review-userprofile";
import CommentUserProfile from "./components/UserProfile/comment-userprofile";
import RestaurantUserProfile from "./components/UserProfile/restaurant-userprofile";
import EditUserProfile from "./components/UserProfile/edit-userprofile";

import {ThemeProvider} from "styled-components";


function App() {
  return (

      <Router>
    <BaseContainer>
      <Nav />
            <Switch>
                <Route exact path="/" component={ Homepage } />
                <Route exact path="/login" component={ LoginPage } />
                <Route exact path="/registration" component={ Registration } />
                <Route exact path="/registration-validation" component={ RegistrationValidation } />
                <Route exact path="/registration-validated" component={ RegistrationValidated } />
                <Route exact path="/create-restaurant" component={ CreateRestaurant } />
                <Route exact path="/restaurants" component={ Restaurant }/>
                <Route exact path="/reviews" component={ Reviews }/>
                <Route exact path="/users" component={ Users }/>
                <Route exact path="/restaurant-profile" component={ RestaurantProfile } />
                <Route exact path="/userprofile" component={ UserProfile } />
                <Route exact path="/review-userprofile" component={ ReviewUserProfile } />
                <Route exact path="/comment-userprofile" component={ CommentUserProfile } />
                <Route exact path="/restaurant-userprofile" component={ RestaurantUserProfile } />
                <Route exact path="/edit-userprofile" component={ EditUserProfile } />
                <Route path="*" component={NotFound}/>
            </Switch>
      <BottomBar />
    </BaseContainer>

      </Router>
  );
}

export default App;
