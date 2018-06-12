import React from "react";
import { Route, Switch, Link } from "react-router-dom";

const people = ["Shea", "Brandon", "Erik", "Steven"];
const About = () => <h1>About!</h1>;
const Home = () => {
  let peopleList = people.map((person, i) => (
    <Link to={`/people/${i}`}> {person} </Link>
  ));
  return <div>{peopleList}</div>;
};
const Oops = () => <h1>404 Not Found!</h1>;
const Person = props => <h1> Hello, {people[props.match.params.id]}! </h1>;

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/people/:id" component={Person} />
    <Route path="*" component={Oops} />
  </Switch>
);
