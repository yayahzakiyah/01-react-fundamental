import { Component } from "react";
//props di class menjadi sebuah property
class BodyComponent extends Component {
    render(){
        return(
            <>
            <h1>Body Component</h1>
            <p>Welcome {this.props.lastName}</p>
            </>
        )
    }
}

export default BodyComponent