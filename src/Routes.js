import React from "react";
import { Route, Switch, } from "react-router-dom";
import Post from "./Post";
import Posts from "./Posts";
import Home from "./Home";
import About from "./About";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
      	<Route path="/" exact component={Home} />
	  	<Route path="/posts" exact component={Posts} />
	  	<Route path="/about" exact component={About} />
	    <Route path="/post" exact component={Post} />
	  </Switch>
    );
  }}
export default Routes;
  