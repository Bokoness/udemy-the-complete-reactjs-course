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

const ExpenseDashboardPage = (props) => {
    console.log(props);
    return (
        <div>
            This is from my dashboard component
        </div>
    )
}
const AddExpensePage = () => (
    <div>
        Add expense component
    </div>
)

const EditExpensePage = () => (
    <div>Edit Expense Page </div>
)

const HelpPage = () => (
    <div>Help Page</div>
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
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}> Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active"> Create Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active"> Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active"> Help</NavLink>
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
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
