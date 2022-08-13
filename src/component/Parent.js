import { Component } from "react";
import Child from "./Child";

class Parent extends Component{
    constructor(props){
        super(props)
        this.state = {
            message: 'Change from parent'
        }
    }

    change = (newMessage) => {
        this.setState({
            message: newMessage
        })
    }

    render() {
        return(
            <div>
                <Child callback={this.change}  name={this.props.name} age={this.props.age} message={this.state.message}/>
            </div>
        )
    }




    // render() {
    //     return(
    //         <div>
    //             <Child name={this.props.name} age={this.props.age}/>
    //         </div>
    //     )
    // }
}

export default Parent