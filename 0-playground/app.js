'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// /*
//      A demo that shoes how react rendering works 
//         - everytime the state is changed react is rerender elements
//         - just like we are doing here with renderCounterApp()
//     - the reason react dont rerender elements here, and we need to rerender them with renderCounterApp() - is we didnt bind functions;
// */

// console.log('states');

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     )


//     //takes 2 args, 1: the element to render, 2 the container element in html file
//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();

//************** A a way to do the same app with Reactjs states ******************/
//everytime the state changes - the elements that are using the state will rerender automaticly, behind the seens the renderCounterApp() method is called

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.addOne = _this.addOne.bind(_this);
        _this.minusOne = _this.minusOne.bind(_this);
        _this.reset = _this.reset.bind(_this);

        _this.state = {
            count: []
        };
        return _this;
    }
    //the prefred way to setState - pass a function to setState
    //params: 1st - the previous state (before it got updated)


    _createClass(Counter, [{
        key: 'addOne',
        value: function addOne() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
        }
        //another way to setState, but its less preffered (watch lecture 34)

    }, {
        key: 'minusOne',
        value: function minusOne() {
            this.setState({ count: this.state.count - 1 });
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.setState(function (prev) {
                return {
                    count: 0
                };
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {

            var stringCount = localStorage.getItem('count');
            var count = parseInt(stringCount, 10);
            console.log(stringCount, count);

            if (!isNaN(count)) {
                this.setState({ count: count });
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.count !== this.state.count) {
                localStorage.setItem('count', this.state.count);
            };
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Count: ',
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { onClick: this.addOne },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.minusOne },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.reset },
                    'reset'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);
//default props - if Counter didn't recieve any count props - make count 0
// Counter.defaultProps = {
//     count: 0
// }
//send Counter - count props of -10, so it wont use its default 0 props. 


ReactDOM.render(React.createElement(Counter, { count: true }), document.getElementById('app'));
