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

const appRoot = document.getElementById('app');

//takes 2 args, 1: the element to render, 2 the container element in html file
ReactDOM.render(template, appRoot);
