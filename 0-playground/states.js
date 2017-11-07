/*
     A demo that shoes how react rendering works 
        - everytime the state is changed react is rerender elements
        - just like we are doing here with renderCounterApp()
    - the reason react dont rerender elements here, and we need to rerender them with renderCounterApp() - is we didnt bind functions;
*/

console.log('states');

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

//************** A a way to do the same app with Reactjs states ******************/
//everytime the state changes - the elements that are using the state will rerender automaticly, behind the seens the renderCounterApp() method is called

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);

        this.state = {
            count: 0
        }
    }
    //the prefred way to setState - pass a function to setState
        //params: 1st - the previous state (before it got updated)
    addOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }
    //another way to setState, but its less preffered (watch lecture 34)
    minusOne() {
        this.setState({count: this.state.count - 1})
    }

    reset() {
        this.setState((prev) => {
            return {
                count: 0
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));