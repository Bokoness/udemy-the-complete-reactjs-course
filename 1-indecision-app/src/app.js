class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);

        this.state = {
            options: [1,2,3,4,5]
        }
    }

    handleDeleteOptions () {
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    
    render() {
        const title = 'Indecision';    
        const subtitle = 'Hey thre';

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption/>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {

        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>
                What should i do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/> )
                }
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>{this.props.optionText}</div>
        )
    }
}

class AddOption extends React.Component {
    handleOnSubmit (e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        
          if (option) {
            alert(option);
          }
    }
    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
          </form>
        )
    }
}
ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));


