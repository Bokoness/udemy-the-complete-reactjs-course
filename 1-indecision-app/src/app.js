console.log('App.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'hey',
    options: ['One', 'Two']
};

//JSX - Javascript XML
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0? 'here are your options' : 'No Options'}</p>
    </div>
)

/* A demo that shoes how react rendering works 
    - everytime the state is changed react is rerender elements
    - just like we are doing here with renderCounterApp()
*/

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};

const minusOne = () => {
    count--;
    renderCounterApp();
};

const reset = () => {
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    )

    
    //takes 2 args, 1: the element to render, 2 the container element in html file
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();