class A extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count = 0
        }
    }

    //event that fires after react mount the component
    componentDidMount(){ 
        console.log('compnentDidMout');
    };

    //fires after state is updated
    componentDidUpate(prevProps, prevState) {
        console.log('ComponentDudUpdate', prevProps, prevState);
    };

    //fires before component is deleted
    componentWillUnmout() {
        console.log('ComponentWillUnmount');
    };


    render() {
        return (
            <div>{this.state.count}</div>
        )
    }

    // //default props - if Counter didn't recieve any count props - make count 0
    // A.defaultProps = {
    //     count: 0
    // }
}