import { Component } from "react";

class Greet extends Component{
    constructor(props){
        super(props);
        //this adalah sebuah object
        this.state = {name: 'Enigmacamp'}
    }

    change = () => {
        //setState merubah value dalam component(merender)
        this.setState({name : 'IT Bootcamp'})
    }

    changeText = (eV) => {
        this.setState({name: eV.target.value})
    }

    render() {
        return(
            <div>
                <h2>{this.state.name}</h2>
                <button onClick={this.change}>Ubah</button>
                <input type='text' value={this.state.name} onChange={this.changeText}/>
            </div>
        )
    }
}

export default Greet;