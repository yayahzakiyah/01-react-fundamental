import { Component } from "react";

class CounterButtonPlus extends Component{
    constructor(props){
        super(props);
    }

    buttonPlus = () => {
        let numb = this.props.number + 1
        this.props.callback(numb)
    }

    render(){
        return(
            <div>
                <button onClick={this.buttonPlus}>Increment</button>
            </div>
        )
    }
}
    
export default CounterButtonPlus
