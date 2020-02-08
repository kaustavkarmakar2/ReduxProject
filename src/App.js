import React from 'react';
import "materialize-css/dist/css/materialize.min.css";
import './App.css';
import Navbar from './layout/Navbar';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import profile from './profile/Profile';
import challenges from './challenges/challenges';
import Jobs from './Jobs/Jobs';
import Login from './auth/Login';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar profilePicUrl="assets/img"/>
      <Switch>
        {/* <Route exact path="/" component={Dashboard} /> */}
        <Route path="/profile" component={profile} />
        <Route path="/challenges" component={challenges} />
        <Route path="/Jobs" component={Jobs}/>
        <Route path="/signin" component={Login} />
        {/* <Route path="/product/:id" component={ProductDetails} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/create" component={CreateProduct} />
        <Route path="/edit/:id" component={CreateProduct} /> */}
      </Switch> 
    </div>
  </BrowserRouter>
  );
}

export default App;
