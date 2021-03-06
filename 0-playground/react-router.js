// TO TEST THIS FILE JUST COPY IT TO APP.JS AND COMMENT THE REST

/*
    react-router
        - works like anchor tags <a>
        - the difference is that istead of asking the serer for the html every time user change route (/GET)
        - the client only ask for the html once, on the first time, then it will fetch all html and javascript
        - the routes will render the wanted component from the javscript we fetched the first time
        - so the difference is that routes are realy fast, and much less expensive then the requests
*/

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

/*
    react router props:
        - react router renders an instance of the component to the wanted adress
        - more then that - react router will pass special props to those instance components
        - the props:
            - history: object that have properties that can redirect user to other adresses via javascript
                - such as goback, gofoward etc..
            - location:
                - search: contain all url variables (query strings)
                - hash: contain all hash value in adress
*/

const Home = () => (
    <div><h1>Home!</h1></div>
)

const Protfolio = () => (
    <div>
        <h1>Protfolio</h1>
        <Link to="/protfolio/:1">Protfolio 1 </Link>
        <Link to="/protfolio/:2">Protfolio 2 </Link>
        <Link to="/protfolio/:3">Protfolio 3 </Link>
    </div>
)

const ProtfolioIndividual = (props) => (
    <div>
        <h3>ProtFolio with id of: <strong>{props.match.params.id}</strong></h3>
    </div>
)

const Contact = () => (
    <div>Contact Me </div>
)

/*
    <Link/>
        a react-router component that works just like anchor tag <a>
        the difference is that instead of fetching the page from server again, link will use the javescript it alreay fetched
        and will render the wanted component instead of GET the html from server

    - params::
        to - the wanted route
*/

const NotFoundPage = () => (
    <div>
        404! - <Link to="/">Go home</Link>
    </div>
)

/*
    NavLink
        - react-router component: just like Link above
        - only its better for navbars
        - it have functions like activeClassName - that will add the wanted class to the active route
*/

const Header = () => (
    <header>
        <h1>Protfolio</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}> Home</NavLink>
        <NavLink to="/protfolio" activeClassName="is-active"> Protfolio</NavLink>
        <NavLink to="/contact" activeClassName="is-active"> Contact</NavLink>
    </header>
)
/*
    Switch
        - instead of trying to render all Routes
        - it will return the first route that have the wanted path

    exact
        - if we use routes without switch it will render all routes that contain other routes
            - for exmaple path="/create" contain the '/' path, so it will render them both
        - when using switch it will render only the exact one

    Route
        - route without path will render everytime with the other wanted routes
        - we can use Switch to return the first Route that have the same path, so it wont continue to the default one
*/
const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact={true}/>
                <Route path="/protfolio" component={Protfolio} exact={true}/>
                <Route path="/protfolio/:id" component={ProtfolioIndividual}/> // id will be validd data via props.match.params.id - special react-router tool.
                <Route path="/contact" component={Contact}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
