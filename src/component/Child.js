import { Component } from "react";

class Child extends Component{
    constructor(props){
        super(props)
    }

    changeMessage = () => {
        let newMessage = 'Change from Child'
        this.props.callback(newMessage)
    }

    render() {
        return(
            <div>
                <div>Name: {this.props.name} Age: {this.props.age}</div>
                <button className="btn btn-primary my-2" onClick={this.changeMessage}>Change Message</button>
                <div>{this.props.message}</div>
            </div>
        )
    }
    // render() {
    //     return(
    //         <div>
    //             Name: {this.props.name} Age: {this.props.age}
    //         </div>
    //     )
    // }
}

export default Child