import { Component } from "react";

class CounterButtonMin extends Component {
    constructor(props){
        super(props)
    }

    buttonMin = () => {
        let numb = this.props.number + 1
        this.props.callback(numb)
    }

    render(){
        return(
            <div>
                <button onClick={this.buttonMin}>Decrement</button>
            </div>
        )
    }
}

export default CounterButtonMin